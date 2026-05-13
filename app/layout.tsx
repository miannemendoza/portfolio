import { Inter, Archivo, Rubik } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const archivo = Archivo({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Michelle Mendoza | Software Engineer",
  description:
    "Portfolio of Michelle Anne F. Mendoza — Software Engineer specializing in frontend development with React, Next.js, and TypeScript.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={`${rubik.className} antialiased`}>{children}</body>
    </html>
  );
}
