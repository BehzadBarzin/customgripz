import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import QueryProvider from "@/providers/QueryProvider";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CustomGripz",
  description: "Custom Phone Cases for Everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />

        {/* Main Min Height = Screen - NavBar */}
        <main className="grainy-light flex min-h-[calc(100vh-3.5rem-1px)] flex-col">
          {/* To push the footer to bottom: Content Height = 100% & Flex = 1  */}
          <div className="flex h-full flex-1 flex-col">
            {/* EdgeStore provider */}
            <EdgeStoreProvider>
              {/* React Query Provider */}
              <QueryProvider>{children}</QueryProvider>
            </EdgeStoreProvider>
          </div>
          <Footer />
        </main>

        <Toaster />
      </body>
    </html>
  );
}
