import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { Suspense } from "react";

export const metadata = {
  title: "Wallpapers Web App",
  description: "Created by Achour Meguenni",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Suspense>
          <Navbar />
          <div className="container-wrapper">
            <div className="container mx-auto max-w-[1000px]">{children}</div>
          </div>
        </Suspense>
      </body>
    </html>
  );
}
