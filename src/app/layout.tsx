import type { Metadata } from "next";
import { Libre_Baskerville} from "next/font/google";
import "./globals.css";

const Libre = Libre_Baskerville({
  weight: '400',
  subsets: ["latin"],
});

const Libre_wide = Libre_Baskerville({
  weight: '700',
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Autotransfer",
  description: "Transfer auto in germany",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Libre.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
