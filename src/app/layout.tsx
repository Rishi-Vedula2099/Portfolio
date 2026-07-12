import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rishivedula.in"),
  title: "Rishi Vedula | Cloud Engineer",
  description:
    "Cloud Engineer specializing in Azure, AWS, DevOps, SharePoint, AI and Full Stack Development.",
  authors: [{ name: "Rishi Vedula" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1120",
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
