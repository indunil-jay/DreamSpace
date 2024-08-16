import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollTop } from "@/components/design/top-scroll-visual-bar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "DreamSpace",
    template: "DreamSpace | %s",
  },
  description:
    "DreamSpace is a full-service interior design firm based in Sri lanka, specializing in creating elegant and functional spaces for homes, offices, retail shops, hospitals, hotels, and commercial projects. Our team of expert designers transforms your vision into reality with personalized, innovative designs that blend warmth, style, and functionality. Discover how we can bring your dream space to life with our professional interior design services.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased min-h-dvh relative", poppins.className)}>
        <ScrollTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
