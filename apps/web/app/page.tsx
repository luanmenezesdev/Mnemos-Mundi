import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/landing-page";

export const metadata: Metadata = {
  title: "Mnemos Mundi | Educação Imersiva em Mundos Exploráveis",
  description:
    "Mnemos Mundi é uma infraestrutura para escolas, cursinhos e universidades criarem experiências educacionais imersivas com progressão e conquistas persistentes.",
};

export default function Home() {
  return <LandingPage />;
}
