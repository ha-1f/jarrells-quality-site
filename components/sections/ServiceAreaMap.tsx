"use client";

const CITIES: { name: string; x: number; y: number; major?: boolean }[] = [
  { name: "Nashville", x: 190, y: 105, major: true },
  { name: "Franklin", x: 170, y: 160, major: true },
  { name: "Murfreesboro", x: 310, y: 195, major: true },
  { name: "Smyrna", x: 275, y: 155 },
  { name: "La Vergne", x: 240, y: 135 },
  { name: "Shelbyville", x: 280, y: 290, major: true },
  { name: "Manchester", x: 370, y: 310, major: true },
  { name: "Tullahoma", x: 340, y: 345, major: true },
  { name: "Winchester", x: 350, y: 395, major: true },
  { name: "Lewisburg", x: 195, y: 295, major: true },
  { name: "Lebanon", x: 345, y: 90 },
  { name: "Mt. Juliet", x: 300, y: 85 },
  { name: "Antioch", x: 235, y: 155 },
  { name: "Woodbury", x: 395, y: 220 },
  { name: "McMinnville", x: 435, y: 275 },
  { name: "Spring Hill", x: 135, y: 220 },
  { name: "Columbia", x: 120, y: 265 },
  { name: "Eagleville", x: 220, y: 240 },
];

export default function ServiceAreaMap() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-earth-700/40 bg-navy-950">
      <svg
        viewBox="0 0 550 450"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background grid */}
        <defs>
          <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#1e2a3a" strokeWidth="0.5" />
          </pattern>
          <radialGradient id="glow" cx="310" cy="195" r="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e85d1a" stopOpacity="0.12" />
            <stop offset="60%" stopColor="#e85d1a" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#e85d1a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="550" height="450" fill="#0a0f1a" />
        <rect width="550" height="450" fill="url(#grid)" />

        {/* Service area glow */}
        <ellipse cx="290" cy="230" rx="200" ry="175" fill="url(#glow)" />

        {/* Red dotted boundary — ~1hr radius from Murfreesboro */}
        <ellipse
          cx="290"
          cy="230"
          rx="195"
          ry="175"
          fill="none"
          stroke="#e85d1a"
          strokeWidth="2.5"
          strokeDasharray="8 6"
          opacity="0.8"
        />

        {/* Murfreesboro center marker */}
        <circle cx="310" cy="195" r="8" fill="#e85d1a" opacity="0.25" />
        <circle cx="310" cy="195" r="4" fill="#e85d1a" />

        {/* City dots and labels */}
        {CITIES.map((city) => (
          <g key={city.name}>
            <circle
              cx={city.x}
              cy={city.y}
              r={city.major ? 3 : 2}
              fill={city.name === "Murfreesboro" ? "#e85d1a" : city.major ? "#4db8e8" : "#8ba3bf"}
            />
            <text
              x={city.x}
              y={city.y - (city.major ? 8 : 6)}
              textAnchor="middle"
              fill={city.name === "Murfreesboro" ? "#e85d1a" : city.major ? "#f5f0e8" : "#8ba3bf"}
              fontSize={city.major ? 11 : 9}
              fontWeight={city.major ? 700 : 400}
              fontFamily="system-ui, sans-serif"
            >
              {city.name}
            </text>
          </g>
        ))}

        {/* Legend */}
        <g transform="translate(15, 400)">
          <line x1="0" y1="0" x2="20" y2="0" stroke="#e85d1a" strokeWidth="2" strokeDasharray="4 3" />
          <text x="26" y="4" fill="#8ba3bf" fontSize="9" fontFamily="system-ui, sans-serif">
            ~1 Hour Service Radius
          </text>
        </g>
      </svg>
    </div>
  );
}
