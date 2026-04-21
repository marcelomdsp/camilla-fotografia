import type { Metadata } from "next";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { BotaoFlutuante } from "@/app/components/BotaoFlutuante";
import { PageWrapper } from "@/app/components/PageWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camilla Fotografia",
  description: "Fotografia de casamentos e ensaios",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <main>
          <PageWrapper>
            <Header />
            {children}
            <Footer />
            <BotaoFlutuante />
          </PageWrapper>
        </main>
      </body>
    </html>
  );
}
