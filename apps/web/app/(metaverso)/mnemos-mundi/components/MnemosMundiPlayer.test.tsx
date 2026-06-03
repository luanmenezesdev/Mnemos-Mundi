import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

vi.mock("next/image", () => ({
  default: (props: any) => {
    // Keep the test isolated from Next.js image runtime details.
    // eslint-disable-next-line @next/next/no-img-element
    const { fill, ...imgProps } = props;
    return <img alt={imgProps.alt} src={imgProps.src} {...imgProps} />;
  },
}));

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

import { MnemosMundiPlayer } from "./MnemosMundiPlayer";

describe("MnemosMundiPlayer", () => {
  it("keeps the portal shell minimal while Unity is still loading", async () => {
    const originalCreateUnityInstance = window.createUnityInstance;
    window.createUnityInstance = vi.fn(() => new Promise(() => undefined));

    try {
      render(<MnemosMundiPlayer />);

      expect(screen.getByText("MNEMOS MUNDI")).toBeInTheDocument();
      await screen.findByText("Carregando build WebGL");
      expect(screen.getByText("Portal Central")).toBeInTheDocument();
      expect(screen.getByText("Escolha uma disciplina para começar")).toBeInTheDocument();

      expect(screen.getByRole("button", { name: /tela cheia/i })).toBeInTheDocument();
      expect(screen.queryByRole("button", { name: /configurações/i })).not.toBeInTheDocument();
      expect(screen.queryByText("Sessão ativa")).not.toBeInTheDocument();
    } finally {
      window.createUnityInstance = originalCreateUnityInstance;
    }
  });
});
