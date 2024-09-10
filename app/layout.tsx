import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: "ADSN Conference 2024 - Perth, Australia",
  description: "The 3rd Australian Data Science Network Conference",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}