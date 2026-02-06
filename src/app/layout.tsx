import localFont from "next/font/local";
import "./globals.css";

const myCustom = localFont({
  src: [
    { path: "/fonts/Jost-Regular.tttf", weight: "400", style: "normal" },
    { path: "/fonts/Jost-Bold.tttf", weight: "700", style: "normal" },
    { path: "/fonts/Jost-ExtraBold.tttf", weight: "800", style: "normal" },
    { path: "/fonts/Jost-Medium.tttf", weight: "500", style: "normal" },
    { path: "/fonts/Jost-SemiBold.tttf", weight: "600", style: "normal" },
    { path: "/fonts/Lora-Bold.tttf", weight: "700", style: "normal" },
    { path: "/fonts/Lora-Medium.tttf", weight: "500", style: "normal" },
    { path: "/fonts/Lora-Regular.tttf", weight: "400", style: "normal" },
    { path: "/fonts/Lora-SemiBold.tttf", weight: "600", style: "normal" },
  ],
  variable: "--font-my-custom",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${myCustom.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
