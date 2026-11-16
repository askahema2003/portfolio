import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { site } from "@/data/site";

const title = `${site.name} | ${site.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.tagline,
  openGraph: {
    title,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: "#fff4dc",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
