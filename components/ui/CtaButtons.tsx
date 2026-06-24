import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site-config";

export default function CtaButtons({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-4 sm:flex-row sm:justify-center ${className ?? ""}`}>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 rounded-full bg-fire-500 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-fire-600 hover:scale-105"
      >
        Get a Free Quote <ArrowRight className="h-4 w-4" />
      </Link>
      <a
        href={SITE.phoneTel}
        className="flex items-center justify-center gap-2 rounded-full border border-tan-400/40 bg-earth-800/30 px-7 py-3.5 text-sm font-semibold text-cream-100 backdrop-blur-sm transition-colors hover:bg-earth-800/50"
      >
        <Phone className="h-4 w-4 text-fire-500" />
        Call Now: {SITE.phoneDisplay}
      </a>
    </div>
  );
}
