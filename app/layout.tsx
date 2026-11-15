import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.name} | ${site.title}`,
  description: site.tagline,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
