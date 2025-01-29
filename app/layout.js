import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700", ],
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400",  ],
});

export const metadata = {
  title: "Protfolio - Rinit",
  description: "Rinit's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
