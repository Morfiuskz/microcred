import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { NeedMicrocreditSection } from "../components/NeedMicrocreditSection";
import { SelfCheckSection } from "../components/SelfCheckSection";
import { StatisticsSection } from "../components/StatisticsSection";
import { StartCardsSection } from "../components/StartCardsSection";
import { KeyFactsSection } from "../components/KeyFactsSection";
import { RisksSection } from "../components/RisksSection";
import { UsefulSections } from "../components/UsefulSections";
import { FinancialLiteracySection } from "../components/FinancialLiteracySection";
import { Footer } from "../components/Footer";

export function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Header />
      <main>
        <HeroSection />
        <NeedMicrocreditSection />
        <SelfCheckSection />
        <StatisticsSection />
        <StartCardsSection />
        <KeyFactsSection />
        <RisksSection />
        <UsefulSections />
        <FinancialLiteracySection />
      </main>
      <Footer />
    </div>
  );
}

