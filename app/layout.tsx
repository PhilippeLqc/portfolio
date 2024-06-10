import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Philippe's Portfolio",
  description:
    "Welcome to my portfolio! Where you can see my experiences, my journey, and my projects. Let's discuss and see what we can do together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta property="og:title" content="Philippe's Portfolio" />
        <meta
          property="og:description"
          content="Welcome to my portfolio! Where you can see my experiences, my journey, and my projects. Let's discuss and see what we can do together!"
        />
        <meta property="og:image" content="/b1.svg" />
        <meta property="og:url" content="https://philippelequoc.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Philippe's Portfolio" />
        <meta
          name="twitter:description"
          content="Welcome to my portfolio! Where you can see my experiences, my journey, and my projects. Let's discuss and see what we can do together!"
        />
        <meta
          name="twitter:image"
          content="https://votre-site.com/path-to-image.jpg"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
