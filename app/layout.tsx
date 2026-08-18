import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "蘇打綠｜作品唱片室",
  description: "從《蘇打綠》到《冬 未了》，收藏六個人與二十年之間，所有流動的光。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
