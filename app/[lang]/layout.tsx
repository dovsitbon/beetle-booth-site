import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Assistant, Frank_Ruhl_Libre, Karla, Playfair_Display, Special_Elite } from "next/font/google";
import "../globals.css";
import site from "@/data/site.json";
import { dirOf, getDict, isLocale, locales } from "@/lib/i18n";
import { Providers } from "@/components/providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Intro } from "@/components/Intro";
import { SmoothScroll } from "@/components/SmoothScroll";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

// Seules les polices des grands titres sont préchargées (LCP) ; les autres arrivent en swap.
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400"], variable: "--font-playfair", display: "swap" });
const frank = Frank_Ruhl_Libre({ subsets: ["hebrew"], weight: ["300"], variable: "--font-frank", display: "swap" });
const karla = Karla({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-karla", display: "swap", preload: false });
const assistant = Assistant({ subsets: ["hebrew", "latin"], weight: ["400", "600"], variable: "--font-assistant", display: "swap", preload: false });
const special = Special_Elite({ subsets: ["latin"], weight: ["400"], variable: "--font-special", display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: "Beetle Booth",
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#f4ebdd", width: "device-width", initialScale: 1 };

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

const introScript = `try{if(sessionStorage.getItem("beetlebooth-intro")==="1"||matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("intro-seen")}catch(e){}`;

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);

  return (
    <html lang={lang} dir={dirOf(lang)} className={`${playfair.variable} ${frank.variable} ${karla.variable} ${assistant.variable} ${special.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body>
        <Providers lang={lang} d={d}>
          <Intro skipLabel={d.intro.skip} rtl={dirOf(lang) === "rtl"} />
          <SmoothScroll />
          <Header />
          <main id="main">{children}</main>
          <Footer lang={lang} d={d} />
          <WhatsAppFloat label={d.whatsapp.float} message={d.whatsapp.hello} />
        </Providers>
      </body>
    </html>
  );
}
