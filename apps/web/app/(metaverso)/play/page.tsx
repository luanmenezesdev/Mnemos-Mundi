import type { Metadata } from "next";
import { PortalLayout } from "./components/PortalLayout";

export const metadata: Metadata = {
  title: "Mnemos Mundi | Protótipo",
  description: "Experiência navegável do protótipo Mnemos Mundi.",
};

export default function Play() {
  return <PortalLayout />;
}
