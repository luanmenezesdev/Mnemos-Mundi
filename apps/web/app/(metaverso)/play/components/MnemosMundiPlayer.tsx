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
        "mnemos-portal-shell relative flex min-h-screen w-full overflow-hidden bg-black text-foreground",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <img
        src="/images/player-bg.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/62" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(56,189,248,0.18),transparent_36%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(120,100,255,0.12),transparent_42%)]" />

      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/90 via-black/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/85 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/85 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-4 pb-5 pt-4 sm:px-6 lg:px-8 landscape:pb-4">
        <header className="flex w-full items-start justify-between gap-4">
          <Link href="/" className="flex min-w-0 flex-1 items-start gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5">
              <Image
                src="/images/logo_oficial.webp"
                alt="Mnemos Mundi Logo"
                fill
                className="scale-110 object-contain opacity-85"
              />
            </div>

            <div className="flex min-w-0 max-w-[180px] flex-col sm:max-w-none">
              <span className="truncate text-[var(--text-eyebrow)] uppercase tracking-[0.24em] text-text-primary sm:tracking-[0.28em]">
                MNEMOS MUNDI
              </span>
              <span className="truncate text-[var(--text-caption)] uppercase tracking-[0.14em] text-text-muted sm:tracking-[0.16em]">
                Portal Central
              </span>
            </div>
          </Link>

          <button
            type="button"
            aria-label="Ativar modo imersivo"
            onClick={handleFullscreen}
            disabled={!isReady}
            className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 text-sm text-text-secondary backdrop-blur-md transition-colors hover:border-[#5bc0eb]/40 hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-40 sm:min-h-11 sm:px-4"
          >
            <span className="hidden sm:inline">Modo imersivo</span>
            <span className="sm:hidden">Imersivo</span>
          </button>
        </header>

        <section className="flex w-full flex-1 flex-col justify-center gap-5 pt-5 sm:gap-6 sm:pt-6 landscape:pt-4">
          <div className="flex flex-1 items-center justify-center px-3 py-8 portrait:flex landscape:hidden md:hidden">
            <div className="mx-auto w-full max-w-[330px] rounded-[28px] border border-cyan-300/20 bg-white/[0.045] px-6 py-7 text-center shadow-[0_0_60px_rgba(91,192,235,0.12)] backdrop-blur-xl">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-2xl text-white">
                ↻
              </div>

              <p className="mb-3 whitespace-nowrap text-[10px] uppercase tracking-[0.28em] text-[#5bc0eb]">
                Modo paisagem
              </p>

              <h1 className="mx-auto max-w-[260px] text-2xl font-light leading-tight text-white">
                Gire o dispositivo para acessar o Portal Central.
              </h1>

              <p className="mx-auto mt-4 max-w-[260px] text-sm leading-relaxed text-white/55">
                A experiência WebGL foi criada para navegação horizontal, com
                mais espaço para explorar o mundo.
              </p>
            </div>
          </div>
          <div className="relative hidden flex-1 landscape:block md:block">
            <div className="pointer-events-none absolute inset-x-[18%] -top-10 h-48 bg-[radial-gradient(circle_at_50%_50%,rgba(53,214,255,.22),transparent_62%)] blur-3xl" />
            <div className="pointer-events-none absolute inset-x-[12%] bottom-8 h-56 bg-[radial-gradient(circle_at_50%_100%,rgba(120,100,255,.18),transparent_62%)] blur-3xl" />

            <div className="pointer-events-none absolute left-1/2 top-0 h-[68%] w-[72%] -translate-x-1/2 rounded-full border border-cyan-300/10 bg-cyan-300/[0.03] blur-sm" />

            <div
              className="mnemos-portal-stage group relative mx-auto aspect-video w-full max-w-full overflow-hidden rounded-[20px] border border-cyan-300/20 bg-[rgba(5,8,18,0.34)] shadow-[inset_0_0_90px_rgba(91,192,235,0.10),0_0_90px_rgba(91,192,235,0.18)] backdrop-blur-xl sm:rounded-[30px]"
              style={{
                width: "min(100%, calc((100svh - 150px) * 16 / 9))",
              }}
            >
              <div className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] ring-1 ring-white/10" />
              <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_50%,transparent_55%,rgba(0,0,0,0.20)_100%)]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

              <canvas
                key={loadingKey}
                ref={canvasRef}
                id="unity-canvas"
                className="relative z-0 h-full w-full outline-none"
                tabIndex={-1}
              />

              {!isReady ? (
                <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_50%_50%,rgba(5,8,22,0.08),rgba(5,8,22,0.58))]" />
              ) : null}
            </div>

            <p className="mt-5 text-center text-sm text-white/45">
              Para uma experiência melhor, use o modo imersivo.
            </p>
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
