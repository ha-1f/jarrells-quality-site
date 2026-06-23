import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site-config";

export default function CtaButtons({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-4 sm:flex-row sm:justify-center ${className ?? ""}`}>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-transform hover:scale-105"
      >
        Get a Free Quote <ArrowRight className="h-4 w-4" />
      </Link>
      <a
        href={SITE.phoneTel}
        className="flex items-center justify-center gap-2 rounded-full border border-cyan-400/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
      >
        <Phone className="h-4 w-4 text-cyan-300" />
        Call Now: {SITE.phoneDisplay}
      </a>
    </div>
  );
}
