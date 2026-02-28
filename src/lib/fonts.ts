import { Lora, Jost } from "next/font/google";

export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
});