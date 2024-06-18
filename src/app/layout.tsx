"use client";

import "./globals.css";
import "./styles.css";
import { CSSProperties, useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [atOne, setAtOne] = useState(
    "radial-gradient(600px at 1257px 535px, rgba(29, 78, 216, 0.15), transparent 80%)"
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.pageX;
      const y = e.pageY;
      const gradient = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      setAtOne(gradient);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const style: CSSProperties = {
    background: atOne,
  } as CSSProperties;

  return (
    <html lang="en">
      <body className={"layout"} style={style}>
        {children}
      </body>
    </html>
  );
}
