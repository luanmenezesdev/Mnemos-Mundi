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

function loadUnityLoader() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Unity loader can only run in the browser."));
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
      existing.addEventListener("error", () => {
        reject(new Error("Failed to load the Unity loader script."));
      }, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = UNITY_LOADER_ID;
    script.src = UNITY_LOADER_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load the Unity loader script."));
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

    if (!canvas) {
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
          throw new Error("Unity loader is available but createUnityInstance was not found.");
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
          cause instanceof Error ? cause.message : "Não foi possível carregar o build do Unity.";
        setError(message);
      }
    };

    void bootstrap();

    return () => {
      cancelled = true;

      const instance = unityInstanceRef.current;
      unityInstanceRef.current = null;

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
        "flex min-h-screen w-full flex-col items-center overflow-hidden bg-background text-foreground",
        "bg-[radial-gradient(circle_at_50%_20%,var(--surface-blue-glass),transparent_45%),linear-gradient(180deg,var(--color-soft-blue)_0%,var(--background)_100%)]",
        "px-4 pb-8 pt-4 sm:px-6 sm:pb-10 lg:px-8 lg:pb-12",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <header className="h-[70px] w-full max-w-[min(96vw,1280px)] rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-surface-glass shadow-[0_0_40px_var(--surface-blue-glass)] backdrop-blur-xl">
        <div className="flex h-full w-full items-center px-4 sm:px-5">
          <Link
            href="/"
            className="flex h-full min-w-0 items-center gap-4 pr-4 sm:min-w-[340px] sm:pr-8"
          >
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[var(--border-soft)] bg-[var(--surface-blue-glass)]">
              <Image
                src="/images/logo_oficial.png"
                alt="Mnemos Mundi Logo"
                fill
                className="scale-[1.15] object-contain"
              />
            </div>

            <div className="flex min-w-0 flex-col gap-0">
              <span className="truncate text-[var(--text-eyebrow)] font-medium uppercase tracking-[0.28em] text-text-primary">
                MNEMOS MUNDI
              </span>
              <span className="truncate text-[var(--text-caption)] uppercase tracking-[0.16em] text-text-muted">
                Explore. Aprenda. Transforme
              </span>
            </div>
          </Link>

          <div className="h-9 w-px shrink-0 bg-[var(--border-soft)]" />

          <div className="flex min-w-0 flex-1 items-center px-4 sm:px-8">
            <p className="truncate text-sm uppercase tracking-[0.24em] text-text-muted">
              {loadingVisible ? status : "Sessão ativa"}
            </p>
          </div>

          <div className="h-9 w-px shrink-0 bg-[var(--border-soft)]" />

          <div className="flex h-full min-w-[150px] items-center justify-end gap-2 pl-3 sm:min-w-[210px] sm:gap-4 sm:pl-8">
            <button
              type="button"
              aria-label="Tela cheia"
              onClick={handleFullscreen}
              disabled={!isReady}
              className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-[var(--surface-blue-glass)] disabled:cursor-not-allowed disabled:opacity-40"
            >
              ⛶
            </button>

            <button
              type="button"
              aria-label="Configurações"
              className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-[var(--surface-blue-glass)]"
            >
              ⚙️
            </button>

            <div className="relative h-12 w-12 rounded-full border border-[var(--border-glow)] bg-surface-soft shadow-[0_0_22px_var(--surface-blue-glass)]">
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[var(--surface-glass)] bg-[var(--color-mint-400)]" />
            </div>
          </div>
        </div>
      </header>

      <section className="flex w-full flex-1 items-center justify-center py-5 sm:py-6 lg:py-8">
        <div
          className="relative aspect-video w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-glow)] bg-[var(--surface-blue-glass)] shadow-[inset_0_0_80px_var(--surface-blue-glass),0_0_45px_var(--surface-blue-glass)] backdrop-blur-[2px]"
          style={{
            maxWidth: "min(96vw, calc((100svh - 220px) * 16 / 9))",
          }}
        >
          <canvas
            key={loadingKey}
            ref={canvasRef}
            id="unity-canvas"
            className="h-full w-full outline-none"
            tabIndex={-1}
          />

          {!isReady ? (
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(5,8,22,0.2),rgba(5,8,22,0.5))]" />
          ) : null}
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
    </main>
  );
}
