"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LoadingScreen } from "./LoadingScreen";

type UnityInstance = {
  Quit: () => Promise<void> | void;
  SetFullscreen: (enabled: 0 | 1) => void;
};

type UnityConfig = {
  arguments: string[];
  companyName: string;
  codeUrl: string;
  dataUrl: string;
  frameworkUrl: string;
  productName: string;
  productVersion: string;
  showBanner: (message: string, type?: "error" | "warning" | "notice") => void;
  streamingAssetsUrl: string;
};

declare global {
  interface Window {
    createUnityInstance?: (
      canvas: HTMLCanvasElement,
      config: UnityConfig,
      onProgress: (progress: number) => void,
    ) => Promise<UnityInstance>;
  }
}

const UNITY_LOADER_ID = "mnemos-mundi-unity-loader";
const UNITY_BUILD_BASE = "/unity/Build";
const UNITY_LOADER_SRC = `${UNITY_BUILD_BASE}/unity.loader.js`;
let unityLoaderPromise: Promise<void> | null = null;

function suppressWindowAlert() {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const originalAlert = window.alert;
  window.alert = () => undefined;

  return () => {
    window.alert = originalAlert;
  };
}

function loadUnityLoader() {
  if (typeof window === "undefined") {
    return Promise.reject(
      new Error("Unity loader can only run in the browser."),
    );
  }

  if (window.createUnityInstance) {
    return Promise.resolve();
  }

  if (unityLoaderPromise) {
    return unityLoaderPromise;
  }

  unityLoaderPromise = new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(UNITY_LOADER_ID);
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => {
          reject(new Error("Failed to load the Unity loader script."));
        },
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.id = UNITY_LOADER_ID;
    script.src = UNITY_LOADER_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error("Failed to load the Unity loader script."));
    document.body.appendChild(script);
  }).finally(() => {
    unityLoaderPromise = null;
  });

  return unityLoaderPromise;
}

function buildUnityConfig(showBanner: UnityConfig["showBanner"]): UnityConfig {
  return {
    arguments: [],
    companyName: "Sites Arretados",
    codeUrl: `${UNITY_BUILD_BASE}/unity.wasm.unityweb`,
    dataUrl: `${UNITY_BUILD_BASE}/unity.data.unityweb`,
    frameworkUrl: `${UNITY_BUILD_BASE}/unity.framework.js.unityweb`,
    productName: "Mnemos-Mundi",
    productVersion: "0.1.0",
    showBanner,
    streamingAssetsUrl: "/unity/StreamingAssets",
  };
}

export function MnemosMundiPlayer({ className }: { className?: string }) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const unityInstanceRef = React.useRef<UnityInstance | null>(null);
  const [loadingKey, setLoadingKey] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const [status, setStatus] = React.useState("Inicializando o portal...");
  const [error, setError] = React.useState<string | null>(null);
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    const canvas = canvasRef.current;
    const restoreAlert = suppressWindowAlert();

    if (!canvas) {
      restoreAlert();
      return undefined;
    }

    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";

    setProgress(0);
    setStatus("Inicializando o portal...");
    setError(null);
    setIsReady(false);

    const showBanner: UnityConfig["showBanner"] = (message, type) => {
      if (type === "error") {
        setError(message);
        return;
      }

      if (type === "warning") {
        setStatus(message);
        return;
      }

      setStatus(message);
    };

    const bootstrap = async () => {
      try {
        await loadUnityLoader();

        if (cancelled) {
          return;
        }

        const instance = await window.createUnityInstance?.(
          canvas,
          buildUnityConfig(showBanner),
          (nextProgress) => {
            if (!cancelled) {
              setProgress(nextProgress * 100);
            }
          },
        );

        if (!instance) {
          throw new Error(
            "Unity loader is available but createUnityInstance was not found.",
          );
        }

        if (cancelled) {
          await instance.Quit();
          return;
        }

        unityInstanceRef.current = instance;
        setProgress(100);
        setStatus("Portal aberto.");
        setIsReady(true);
      } catch (cause) {
        if (cancelled) {
          return;
        }

        const message =
          cause instanceof Error
            ? cause.message
            : "Não foi possível carregar o build do Unity.";
        setError(message);
      }
    };

    void bootstrap();

    return () => {
      cancelled = true;

      const instance = unityInstanceRef.current;
      unityInstanceRef.current = null;
      restoreAlert();

      if (instance) {
        void instance.Quit();
      }
    };
  }, [loadingKey]);

  const handleRetry = React.useCallback(() => {
    setLoadingKey((current) => current + 1);
  }, []);

  const handleFullscreen = React.useCallback(() => {
    unityInstanceRef.current?.SetFullscreen(1);
  }, []);

  const loadingVisible = !isReady || Boolean(error);

  return (
    <main
      className={[
        "mnemos-portal-shell relative flex min-h-screen w-full overflow-hidden bg-background text-foreground",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(91,192,235,0.16),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(157,125,255,0.14),transparent_28%),radial-gradient(circle_at_50%_82%,rgba(244,201,93,0.06),transparent_22%)]" />

      <div className="relative z-10 flex min-h-screen w-full flex-col px-4 pb-4 pt-4 sm:px-6 lg:px-8">
        <header className="mx-auto flex w-full max-w-[1600px] items-start justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-start gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5">
              <Image
                src="/images/logo_oficial.webp"
                alt="Mnemos Mundi Logo"
                fill
                className="scale-110 object-contain opacity-85"
              />
            </div>

            <div className="flex min-w-0 flex-col">
              <span className="truncate text-[var(--text-eyebrow)] uppercase tracking-[0.28em] text-text-primary">
                MNEMOS MUNDI
              </span>
              <span className="truncate text-[var(--text-caption)] uppercase tracking-[0.16em] text-text-muted">
                Portal Central
              </span>
            </div>
          </Link>

          <button
            type="button"
            aria-label="Tela cheia"
            onClick={handleFullscreen}
            disabled={!isReady}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-[var(--text-body-sm)] text-text-secondary backdrop-blur-md transition-colors hover:border-[#5bc0eb]/40 hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            Tela cheia
          </button>
        </header>

        <section className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-start gap-4 pt-4 sm:gap-5 sm:pt-5">
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-x-[12%] top-0 h-40 bg-[radial-gradient(circle_at_50%_0%,rgba(53,214,255,.16),transparent_60%)] blur-3xl" />
            <div className="pointer-events-none absolute inset-x-[14%] bottom-0 h-40 bg-[radial-gradient(circle_at_50%_100%,rgba(120,100,255,.14),transparent_60%)] blur-3xl" />

            <div
              className="mnemos-portal-stage relative mx-auto min-h-[calc(100svh-144px)] w-full overflow-hidden rounded-[32px] border border-white/8 bg-[rgba(7,11,24,0.34)] shadow-[inset_0_0_80px_rgba(91,192,235,0.08),0_0_80px_rgba(91,192,235,0.14)]"
              style={{ maxWidth: "min(1600px, 92vw)" }}
            >
              <canvas
                key={loadingKey}
                ref={canvasRef}
                id="unity-canvas"
                className="h-full w-full outline-none"
                tabIndex={-1}
              />

              {!isReady ? (
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(5,8,22,0.08),rgba(5,8,22,0.48))]" />
              ) : null}
            </div>
          </div>
        </section>

        {loadingVisible ? (
          <LoadingScreen
            error={error}
            onRetry={error ? handleRetry : undefined}
            progress={progress}
            status={status}
          />
        ) : null}
      </div>
    </main>
  );
}
