import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mayuri Yadav & Associates",
  description: "Trusted legal services with integrity and expertise.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}