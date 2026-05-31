"use client";

import { MnemosMundiPlayer } from "./MnemosMundiPlayer";

export function PortalLayout() {
  return (
    <div className="flex min-h-screen w-full overflow-hidden bg-[#020817] text-white">
      <div className="w-full">
        <MnemosMundiPlayer />
      </div>
    </div>
  );
}
