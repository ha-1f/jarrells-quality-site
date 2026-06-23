import { Phone, AlertTriangle } from "lucide-react";
import { SITE } from "@/lib/site-config";
import Reveal from "@/components/ui/Reveal";

export default function EmergencyCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-8 sm:flex-row sm:justify-between sm:text-left">
        <Reveal className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20">
            <AlertTriangle className="h-7 w-7 text-white" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              No Heat or No Cool? We&apos;re On It.
            </h3>
            <p className="mt-1 text-sm text-orange-50">
              Emergency HVAC service available for urgent comfort and safety
              issues.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href={SITE.phoneTel}
            className="flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-orange-600 shadow-lg transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            Call Now: {SITE.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
