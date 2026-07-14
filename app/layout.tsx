import type { Metadata } from "next";
import { Chivo, Karla } from "next/font/google";
import "./globals.css";

const chivo = Chivo({ variable: "--font-display", subsets: ["latin"] });
const karla = Karla({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vidhi Khandelwal | AI and Software Engineer",
  description: "AI and software engineer building data-intensive products, agent workflows, and dependable execution systems.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${chivo.variable} ${karla.variable}`}>{children}</body>
    </html>
  );
}
