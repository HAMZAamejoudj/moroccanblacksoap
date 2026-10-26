import type { Metadata } from "next";
import { Inter, Playfair_Display, Cairo } from "next/font/google";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { getDictionary } from "@/lib/dictionaries";
import "../../styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { lang } = await params;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Wholesale Moroccan Black Soap – Organic Beldi Soap Bulk Supplier",
      template: `%s | ${SITE_NAME}`,
    },
    description:
      "Discover authentic Moroccan black soap wholesale. 100% natural Beldi soap for skincare, hammam rituals, and private label brands. Certified, ethical, and export-ready.",
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: lang === "ar" ? "ar_MA" : lang === "fr" ? "fr_MA" : "en_US",
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: '/icon.png',
      shortcut: '/icon.png',
      apple: '/icon.png',
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }, { lang: "ar" }];
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang, "common");

  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <div className={`${inter.variable} ${playfair.variable} ${cairo.variable} antialiased bg-white min-h-screen`}>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(lang)};document.documentElement.dir=${JSON.stringify(dir)};`,
        }}
      />
      <Navbar dict={dict} lang={lang} />
      {children}
      <Footer dict={dict} lang={lang} />
    </div>
  );
}
