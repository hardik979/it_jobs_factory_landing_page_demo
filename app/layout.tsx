import type { Metadata } from "next";
import { Merriweather, Inter, Righteous } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["400", "700"], // specify weights you want
  subsets: ["latin"], // required
  display: "swap",
});
const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "700"], // specify weights you want
  subsets: ["latin"], // required
  display: "swap",
});
const righteous = Righteous({
  variable: "--font-righteous",
  weight: ["400"], // specify weights you want
  subsets: ["latin"], // required
  display: "swap",
});
export const metadata: Metadata = {
  title: "IT Jobs Factory",
  description: "IT Jobs Factory",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${merriweather.variable} ${inter.variable} ${righteous.variable}  [font-family:var(--font-inter)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
