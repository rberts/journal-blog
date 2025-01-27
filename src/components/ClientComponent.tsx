"use client";

import { useEffect, useState } from "react";

export default function ClientComponent() {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return <p>Largura da tela: {screenWidth ? `${screenWidth}px` : "Carregando..."}</p>;
}
