import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["300", "500", "600", "700", "900"],
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Petwa Foundation",
    default: "Petwa Foundation",
  },
  description:
    "Petwa Foundation is a registered Namibian welfare organization dedicated to improving the lives of disadvantaged communities. We strive to promote healthy lifestyles, provide accessible healthcare, and support education.",
  openGraph: {
    type: "website",
    siteName: "Petwa Foundation",
  },
  twitter: {
    card: "summary",
    title: "Petwa Foundation",
    description:
      "Petwa Foundation is a registered Namibian welfare organization dedicated to improving the lives of disadvantaged communities. We strive to promote healthy lifestyles, provide accessible healthcare, and support education.",
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
        className={`${poppins.className} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
