import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Sahit Tirunagari — Travel & Wildlife Photography",
  description: "Portfolio of Sahit Tirunagari — travel and wildlife photographer. Workshops, prints, and assignments worldwide."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 max-w-5xl mx-auto w-full p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
