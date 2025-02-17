import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import './globals.css'

const fontNotoSansJp= Noto_Sans_JP({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${fontNotoSansJp.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
