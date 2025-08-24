import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Plan Nuclear Argentino",
  description: "Sitio oficial (ES)"
};

export default function RootLayout({children}:{children: ReactNode}){
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
