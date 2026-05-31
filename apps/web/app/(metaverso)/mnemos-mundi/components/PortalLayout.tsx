'use client';

import React from "react";
import { LoadingScreen } from "./LoadingScreen";
import { MnemosMundiPlayer } from "./MnemosMundiPlayer";

export function PortalLayout() {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden bg-[#020817] text-white">
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}

      {loaded && (
        <div className="w-full h-screen">
          <MnemosMundiPlayer />
        </div>
      )}
    </div>
  );
}
