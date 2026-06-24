import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE, NAV_LINKS, SERVICES } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-earth-700/40 bg-forest-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-8 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Jarrell's Quality logo"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <span className="font-display text-lg font-bold text-cream-50">
              Jarrell&apos;s Quality
            </span>
          </div>
          <p className="mt-4 text-sm leading-6 text-cream-300">
            Family owned and operated HVAC contractor serving Middle
            Tennessee. Licensed &amp; insured heating, cooling, and comfort
            services for residential, commercial, and new construction.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-tan-400">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream-300 transition-colors hover:text-cream-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="text-sm text-cream-300 transition-colors hover:text-cream-50"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-tan-400">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.href}
                  className="text-sm text-cream-300 transition-colors hover:text-cream-50"
                >
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-tan-400">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-cream-300">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-fire-500" />
              <a href={SITE.phoneTel} className="hover:text-cream-50">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-fire-500" />
              <a href={`mailto:${SITE.email}`} className="hover:text-cream-50">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-fire-500" />
              <span>{SITE.serviceAreas.slice(0, 4).join(", ")} &amp; more</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-fire-500" />
              <span className="flex flex-col gap-0.5">
                {SITE.hours.map((h) => (
                  <span key={h.day}>
                    {h.day}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-earth-700/40 px-4 py-6 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-xs text-cream-300/50 sm:flex-row">
          <span>
            {`© ${new Date().getFullYear()} Jarrell's Quality. All rights reserved.`}
          </span>
          <span>Licensed &amp; Insured · Family Owned &amp; Operated</span>
        </div>
      </div>
    </footer>
  );
}
