import type { Metadata } from "next"; // Object to set metadata
import { Inter } from "next/font/google"; // You can change the font to anything you want.
import "./globals.css";

// If you are experiencing an error "localFont is undefined", you might need to add the following blocks of code
const inter = Inter({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
//

export const metadata: Metadata = {
  title: "Alan's Personal Website",
  description:
    "A Personal Website for Alan Mathew.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // returns boilerplate
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
function localFont(arg0: { src: string; variable: string; weight: string; }) {
  throw new Error("Function not implemented.");
}

