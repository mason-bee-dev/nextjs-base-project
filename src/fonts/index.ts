import { Inter, Noto_Sans, Open_Sans, Poppins } from "next/font/google"

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-noto-sans",
})

export const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-open-sans",
})

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-poppins",
})

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
})
