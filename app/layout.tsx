import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased transition-colors duration-300">
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Force remove Next.js DevTools Badge */}
        <Script id="remove-next-badge" strategy="afterInteractive">
          {`
            (function() {
              const removeBadge = () => {
                const badge = document.querySelector('[data-next-badge="true"]') || 
                              document.querySelector('#next-logo') || 
                              document.querySelector('[data-nextjs-dev-tools-button]');
                if (badge) badge.remove();
              };
              removeBadge();
              const observer = new MutationObserver(removeBadge);
              observer.observe(document.body, { childList: true, subtree: true });
            })();
          `}
        </Script>

        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
