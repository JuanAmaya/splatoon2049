import type { Metadata } from "next";
import { Inter, MuseoModerno } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/_components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const museoModerno = MuseoModerno({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Splatoon",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={museoModerno.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
