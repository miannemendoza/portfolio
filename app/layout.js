import { Inter, Archivo } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const archivo = Archivo({ subsets: ["latin"] });
export const metadata = {
  title: "Michelle Mendoza Portfolio",
  description: "Come check my portfolio!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${archivo.className} antialiased`}>{children}</body>
    </html>
  );
}
