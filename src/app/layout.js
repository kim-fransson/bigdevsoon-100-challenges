import { Inter } from "next/font/google";
import Head from 'next/head'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>BigDevSoon | 100 Challenges</title>
        <bds />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
