import type { Metadata } from "next";
import { Chivo, Karla } from "next/font/google";
import "./globals.css";

const chivo = Chivo({
  variable: "--font-display",
  subsets: ["latin"],
});
const karla = Karla({
  variable: "--font-body",
  subsets: ["latin"],
});
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Vidhi Khandelwal | AI and Software Engineer",
  description: "AI and software engineer building data-intensive products, agent workflows, and dependable execution systems.",
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${chivo.variable} ${karla.variable}`}>
        {children}
      </body>
    </html>
  );
}
