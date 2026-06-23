export const SITE = {
  name: "Jarrell's Quality",
  tagline: "Heating · Cooling · Comfort",
  domain: "jarrellsqualitytn.com",
  phoneDisplay: "(615) 796-1384",
  phoneTel: "tel:+16157961384",
  smsHref: "sms:+16157961384",
  email: "info@jarrellsqualitytn.com",
  promo: "$25 off any service call — mention it when you call.",
  serviceAreas: [
    "Murfreesboro",
    "Smyrna",
    "La Vergne",
    "Nashville",
    "Franklin",
    "Shelbyville",
    "Manchester",
    "Tullahoma",
  ],
  hours: [
    { day: "Monday – Friday", time: "7:00 AM – 7:00 PM" },
    { day: "Saturday", time: "8:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Emergency calls only" },
  ],
  trustBadges: [
    "Licensed & Insured",
    "Family Owned & Operated",
    "Honest, Upfront Pricing",
    "Prompt, Reliable Service",
  ],
} as const;

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Maintenance Plans", href: "/maintenance-plans" },
  { label: "Financing", href: "/financing" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog", href: "/blog" },
];

export type ServiceMeta = {
  slug: string;
  href: string;
  title: string;
  shortTitle: string;
  summary: string;
  icon: "snowflake" | "flame" | "wind" | "gauge" | "leaf" | "wrench";
  keywords: string[];
  bullets: string[];
};

export const SERVICES: ServiceMeta[] = [
  {
    slug: "ac-repair",
    href: "/services/ac-repair",
    title: "AC Repair",
    shortTitle: "AC Repair",
    summary:
      "Fast, accurate AC repair that gets your home cool again — no guesswork, no upsell pressure.",
    icon: "snowflake",
    keywords: ["AC repair", "air conditioning repair", "emergency AC repair"],
    bullets: [
      "Same-day diagnostics on most calls",
      "Upfront pricing before any work begins",
      "All major brands and system types",
      "Emergency repair available",
    ],
  },
  {
    slug: "ac-installation",
    href: "/services/ac-installation",
    title: "AC Installation",
    shortTitle: "AC Installation",
    summary:
      "Properly sized, professionally installed cooling systems built for Tennessee summers.",
    icon: "snowflake",
    keywords: ["AC installation", "new air conditioner install", "central air installation"],
    bullets: [
      "Free in-home sizing & estimate",
      "Energy-efficient system options",
      "Clean, respectful installs",
      "Manufacturer + workmanship warranty",
    ],
  },
  {
    slug: "heating",
    href: "/services/heating",
    title: "Heating Repair & Installation",
    shortTitle: "Heating",
    summary:
      "Furnace repair, replacement, and tune-ups so your home stays warm when it matters most.",
    icon: "flame",
    keywords: ["heating repair", "furnace repair", "furnace installation"],
    bullets: [
      "Furnace repair & full replacement",
      "Safety inspections, including carbon monoxide checks",
      "Gas, electric, and dual-fuel systems",
      "Seasonal tune-up plans available",
    ],
  },
  {
    slug: "heat-pumps",
    href: "/services/heat-pumps",
    title: "Heat Pumps",
    shortTitle: "Heat Pumps",
    summary:
      "Year-round comfort from a single high-efficiency system — heating and cooling in one.",
    icon: "gauge",
    keywords: ["heat pump installation", "heat pump repair", "heat pump service"],
    bullets: [
      "New heat pump installation",
      "Repair & seasonal maintenance",
      "Helps lower energy bills year-round",
      "Great fit for additions & new construction",
    ],
  },
  {
    slug: "indoor-air-quality",
    href: "/services/indoor-air-quality",
    title: "Indoor Air Quality",
    shortTitle: "Air Quality",
    summary:
      "Filtration, humidity control, and duct solutions for healthier air inside your home.",
    icon: "leaf",
    keywords: ["indoor air quality", "air purification", "duct cleaning"],
    bullets: [
      "Whole-home air filtration systems",
      "Humidity & dehumidification control",
      "Duct inspection & sealing",
      "Allergy & odor-focused solutions",
    ],
  },
];

export const STATS = [
  { value: 15, suffix: "+", label: "Years Serving Local Homes" },
  { value: 4500, suffix: "+", label: "Jobs Completed" },
  { value: 100, suffix: "%", label: "Licensed & Insured Work" },
  { value: 24, suffix: "/7", label: "Emergency Availability" },
];

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Murfreesboro, TN",
    quote:
      "Jarrell's came out same-day when our AC quit in July. Honest about the problem, fair on price, and fixed it right the first time.",
    rating: 5,
  },
  {
    name: "Dustin R.",
    location: "Smyrna, TN",
    quote:
      "Replaced our whole system before winter. Clean install, walked us through everything, and the new furnace is quiet and efficient.",
    rating: 5,
  },
  {
    name: "Patricia H.",
    location: "La Vergne, TN",
    quote:
      "Family owned and it shows — they treat your house like it's theirs. We're on the maintenance plan now and have zero complaints.",
    rating: 5,
  },
];

export const FAQS = [
  {
    question: "How fast can you get to my home?",
    answer:
      "Most calls are scheduled same-day or next-day, and we offer emergency service for no-heat or no-cool situations. Call or text us and we'll give you a real arrival window.",
  },
  {
    question: "Do you give a price before starting work?",
    answer:
      "Yes — every job gets upfront pricing before we start. No surprise fees, no pressure to upgrade equipment you don't need.",
  },
  {
    question: "What brands and systems do you work on?",
    answer:
      "We service and install all major HVAC brands and system types, including central air, furnaces, and heat pumps, residential and commercial.",
  },
  {
    question: "How often should I get maintenance done?",
    answer:
      "We recommend a tune-up each spring for cooling systems and each fall for heating systems. Our maintenance plans bundle both visits and include priority scheduling.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Yes, we offer financing options for system replacements and larger repairs so comfort doesn't have to wait on a full cash payment. Ask us about current plans when you call.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Murfreesboro, Smyrna, La Vergne, Nashville, Franklin, Shelbyville, Manchester, Tullahoma, and surrounding Middle Tennessee communities.",
  },
];
