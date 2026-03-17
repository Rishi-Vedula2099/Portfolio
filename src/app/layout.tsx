import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishi Vedula · Portfolio · 武士道",
  description:
    "Full-stack engineer and systems thinker. Samurai-themed portfolio showcasing skills, projects, and the way of the craftsman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
