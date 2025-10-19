import { useState } from "react";
import { TabNavigation } from "@/components/TabNavigation";
import { ChargeTimeTab } from "@/components/tabs/ChargeTimeTab";
import { CostCalcTab } from "@/components/tabs/CostCalcTab";
import { TripLogTab } from "@/components/tabs/TripLogTab";
import { BatteryHealthTab } from "@/components/tabs/BatteryHealthTab";
import { GlossaryTab } from "@/components/tabs/GlossaryTab";
import { InstallerTab } from "@/components/tabs/InstallerTab";
import { PreHeatTab } from "@/components/tabs/PreHeatTab";
import { TyreLogTab } from "@/components/tabs/TyreLogTab";
import { Zap } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("charge");

  const renderTab = () => {
    switch (activeTab) {
      case "charge":
        return <ChargeTimeTab />;
      case "cost":
        return <CostCalcTab />;
      case "trip":
        return <TripLogTab />;
      case "battery":
        return <BatteryHealthTab />;
      case "glossary":
        return <GlossaryTab />;
      case "installer":
        return <InstallerTab />;
      case "preheat":
        return <PreHeatTab />;
      case "tyre":
        return <TyreLogTab />;
      default:
        return <ChargeTimeTab />;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-md mx-auto px-3 py-2.5">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-primary/10 glow-effect">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Ampere Mate</h1>
              <p className="text-[10px] text-muted-foreground">Your EV Companion</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-3 py-3">
        {renderTab()}
      </main>

      {/* Bottom Navigation */}
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
