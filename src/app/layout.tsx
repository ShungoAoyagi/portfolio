import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shungo Aoyagi's Portfolio",
  description: "Shungo Aoyagi's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
