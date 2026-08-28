import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Edison Flores | Ingeniero en Tecnologías de la Información",
  description:
    "Portafolio de Edison Flores: desarrollo web, soporte técnico, visualización de datos y soluciones digitales desde Morona Santiago, Ecuador.",
  keywords: [
    "Edison Flores",
    "Ingeniero TI",
    "desarrollo web",
    "soporte técnico",
    "Morona Santiago",
    "Ecuador",
  ],
  authors: [{ name: "Edison Flores" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Edison Flores | Portafolio",
    description: "Soluciones digitales con propósito: web, datos y soporte TI.",
    type: "website",
    locale: "es_EC",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Portafolio de Edison Flores" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edison Flores | Portafolio",
    description: "Ingeniería TI, desarrollo web, datos y soporte técnico.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
