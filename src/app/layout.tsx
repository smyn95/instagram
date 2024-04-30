import NavBar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import AuthSession from "@/context/authContext";
import SWRConfigContext from "@/context/SWRContext";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "gram",
    template: "gram | %s",
  },
  description: "Photos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="w-full bg-neutral-50 overflow-auto">
        <AuthSession>
          <header className="sticky top-0 bg-white z-10 border-b">
            <div className="max-w-screen-xl mx-auto">
              <NavBar />
            </div>
          </header>
          <main className="w-full flex justify-center max-w-screen-xl mx-auto">
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
        </AuthSession>
        <div id="portal" />
      </body>
    </html>
  );
}
