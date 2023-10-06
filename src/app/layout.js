import "./globals.css";

import { Montserrat } from "next/font/google";

// import local fonts
import localFont from "next/font/local";
const Fabulous = localFont({ src: "../../public/fonts/NT Fabulous.otf" });

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400"],
});

export const metadata = {
  title: "Flashlight Effect",
  description:
    "A cursor with a horror-themed spotlight effect is used to build suspense by revealing select content while shrouding the rest in darkness, creating an eerie and mysterious ambiance.",
  icons: [
    {
      rel: "icon",
      url: "/favicon.png",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${Fabulous.className}`}>
        {children}
      </body>
    </html>
  );
}
