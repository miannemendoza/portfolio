import { Inter, Archivo, Rubik } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
const archivo = Archivo({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });
export const metadata = {
  title: "Michelle Mendoza Portfolio",
  description: "Come check my portfolio!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={`${rubik.className} antialiased`}>{children}</body>
    </html>
  );
}
