// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Providers from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

// Static metadata — works perfectly
export const metadata = {
  title:
    "Lyschor Real Estate LLC — Licensed UAE Brokerage with Legal RUB Payments",
  description:
    "Licensed Dubai real estate brokerage offering 100% legal non-cash RUB payments for Russian buyers.",
  keywords:
    "dubai real estate russian, buy property dubai rub, dubai broker rub payment, uae real estate russian buyers, недвижимость дубай рубли, купить квартиру дубай рублями",
  openGraph: {
    title: "Lyschor Real Estate — Legal RUB Payments",
    description:
      "Licensed UAE brokerage with unique escrow RUB payment service",
    url: "https://lyschorrealestate.ae",
    type: "website",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://lyschorrealestate.ae",
    languages: {
      en: "https://lyschorrealestate.ae/en",
      ru: "https://lyschorrealestate.ae/ru",
    },
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Lyschor Real Estate LLC",
              url: "https://lyschorrealestate.ae",
              logo: "https://lyschorrealestate.ae/images/logo.png",
              description:
                "Licensed UAE real estate brokerage offering legal RUB non-cash payments for Russian buyers",
              telephone: "+971-XXX-XXX-XXXX",
              email: "info@lyschorrealestate.ae",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressRegion: "Dubai",
                addressCountry: "AE",
              },
              openingHours: "Mo-Su 09:00-21:00",
              sameAs: ["https://t.me/lyschor"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
