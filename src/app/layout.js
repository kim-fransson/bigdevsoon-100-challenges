import { inter } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "BigDevSoon | 100 Challenges",
  description: "My solutions for BigDev Soon 100 challenges",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <bds />
      </body>
    </html>
  );
}
