export const SITE = {
  name: "Jarrell's Quality",
  tagline: "Heating · Cooling · Comfort",
  homeTagline: "Your Neighbors in Heating & Cooling",
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

// Kept short on purpose — the goal is a menu simple enough for anyone to use.
export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/reviews" },
  { label: "About Us", href: "/about" },
];

export const MORE_LINKS: NavLink[] = [
  { label: "Maintenance Plans", href: "/maintenance-plans" },
  { label: "Financing", href: "/financing" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog", href: "/blog" },
];

export const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Tell Us What's Going On",
    description: "Name, number, and what you need. That's it — takes about 30 seconds.",
  },
  {
    step: "2",
    title: "We Call You Back",
    description: "A real person from our family calls to find a time that works for you.",
  },
  {
    step: "3",
    title: "We Show Up & Fix It",
    description: "Friendly, on time, and we explain everything before we start.",
  },
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

// Real, verified review pulled from the business's Facebook page — replace/add
// more as new ones come in (Facebook gates older reviews behind login).
export const TESTIMONIALS = [
  {
    name: "Melissa Davis",
    location: "Facebook Review",
    quote:
      "Amazing service! Will use Jarrell's from now on! Professional and polite. He explained everything! And did I mention fast!",
    rating: 5,
  },
];

export const REVIEW_AGGREGATE = {
  source: "Facebook",
  percentRecommend: 86,
  reviewCount: 6,
};

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
      "We're currently working on financing options for system replacements and larger repairs. Give us a call to ask what's available right now.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Murfreesboro, Smyrna, La Vergne, Nashville, Franklin, Shelbyville, Manchester, Tullahoma, and surrounding Middle Tennessee communities.",
  },
];
