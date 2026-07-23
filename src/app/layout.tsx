import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const mplus = M_PLUS_Rounded_1c({
  variable: "--font-mplus",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Slimoa(スリモア)| 置き換えダイエットシェイク【公式】",
  description:
    "1日1食、置き換えるだけ。忙しい毎日でも続けやすい置き換えダイエットシェイク Slimoa(スリモア)。初回限定価格で今すぐお試し。※本ページはポートフォリオ用のデモLPです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${mplus.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-ink">
        {children}
      </body>
    </html>
  );
}
