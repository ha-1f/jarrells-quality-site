import { Phone, Mail, Clock } from "lucide-react";
import { SITE } from "@/lib/site-config";
import Reveal from "@/components/ui/Reveal";
import LeadForm from "@/components/sections/LeadForm";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-navy-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <span className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
              Get In Touch
            </span>
            <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
              Schedule Your Service
            </h2>
            <p className="mt-4 text-zinc-400">
              Fill out the form and we&apos;ll follow up to confirm your
              appointment, or call/text us directly for faster service.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={SITE.phoneTel}
                className="flex items-center gap-3 text-sm font-semibold text-white hover:text-cyan-300"
              >
                <Phone className="h-5 w-5 text-orange-400" />
                {SITE.phoneDisplay}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-sm font-semibold text-white hover:text-cyan-300"
              >
                <Mail className="h-5 w-5 text-orange-400" />
                {SITE.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-zinc-300">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
                <span className="flex flex-col gap-0.5">
                  {SITE.hours.map((h) => (
                    <span key={h.day}>
                      {h.day}: {h.time}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <LeadForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
