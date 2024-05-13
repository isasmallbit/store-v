import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { UserProvider } from "@/context/UserProvider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

import { Plus_Jakarta_Sans } from "next/font/google";
const inter = Plus_Jakarta_Sans({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Neova",
  description: "Neova description",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className='h-full'>
      <body className={
        cn("bg-background h-full flex flex-col", inter.className)
      }>
        <UserProvider>
          <Header />
          <div className='flex-1 max-w-7xl m-auto w-[90%]'>
            {children}
          </div>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
