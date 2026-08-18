import {
  Montserrat,
  Cormorant_Garamond,
  Inter,
} from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-montserrat",
});
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cormorant-garamond",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${cormorantGaramond.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
