import type { Metadata } from "next";
import localFont from "next/font/local";
import { Info, Zap, ShoppingBag, PhoneCall, SquareUser } from "lucide-react";
import Header from "@components/app/header";
import "./globals.css";

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

const sections = [
  {
    icon: <Info />,
    name: "About",
    linkTo: "about",
  },
  {
    icon: <Zap />,
    name: "Features",
    linkTo: "features",
  },
  {
    icon: <ShoppingBag />,
    name: "Products",
    linkTo: "products",
  },
  {
    icon: <PhoneCall />,
    name: "Contact",
    linkTo: "contact",
  },
  {
    icon: <SquareUser />,
    name: "Login",
    linkTo: "#",
  },
];

export const metadata: Metadata = {
  title: "Trackolo",
  description: "Track what matters with Trackolo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header sections={sections} />
        {children}
      </body>
    </html>
  );
}
