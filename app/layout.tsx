import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/context/Theme";
import { Toaster } from "@/components/ui/sonner";
//import { Toaster } from "sonner";

const inter = localFont({
  src:"./fonts/inter-VF.ttf",
  variable: "--font-inter",
  weight:"100 200 300 400 500 600 700 800 900"
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-VF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 600 700",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description: "A better version of Stack Overflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      <Toaster/>
    </html>
  );
}
