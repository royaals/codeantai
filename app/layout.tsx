import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { Providers } from "./provider";
import "./globals.css";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeAnt AI",
  description: "Assignment for CodeAnt AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} lg:bg-[#FAFAFA] antialiased`}>
        <div className="">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
