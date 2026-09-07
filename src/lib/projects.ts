import techopsImg from "@/assets/techops.jpg.asset.json";
import nagari3Img from "@/assets/nagari3.jpg.asset.json";
import nagari2Img from "@/assets/nagari2.jpg.asset.json";
import nagari1Img from "@/assets/nagari1.jpg.asset.json";
import apartmentsIndian1 from "@/assets/apartments-indian-1.jpg";
import apartmentsIndian2 from "@/assets/apartments-indian-2.jpg";
import apartmentsIndian3 from "@/assets/apartments-indian-3.jpg";
import apartmentsIndian4 from "@/assets/apartments-indian-4.jpg";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  type: "Residential Plots" | "Flats & Apartments";
  status: "Ready to Register" | "Booking Open" | "Under Development" | "Almost Sold Out";
  location: string;
  fullLocation: string;
  mapQuery: string;
  image: string;
  gallery?: string[];
  highlights: string[];
  amenities: string[];
  investment: {
    title: string;
    description: string;
  }[];
  connectivity: {
    place: string;
    distance: string;
  }[];
  description: string;
};

export const projects: Project[] = [
  {
    slug: "techops-park",
    name: "Techops Park",
    tagline: "Nagpur's next industrial-tech growth corridor",
    type: "Residential Plots",
    status: "Booking Open",
    location: "Kalamna, Nagpur",
    fullLocation: "Mouza Kalamna, Tahsil Nagpur (Gramin), District Nagpur, Maharashtra",
    mapQuery: "Kalamna, Nagpur, Maharashtra",
    image: techopsImg.url,
    highlights: [
      "Strategically placed on Nagpur's eastern growth corridor",
      "Wide 40 ft and 60 ft internal tar roads",
      "Clear title, N.A. sanctioned layout",
      "Bank loan approved with leading nationalised banks",
    ],
    amenities: [
      "Grand entrance arch",
      "24x7 security & CCTV",
      "Landscaped central garden",
      "Underground drainage",
      "Overhead water supply",
      "Street lighting on every plot",
      "Kids play area",
      "Compound wall around layout",
    ],
    investment: [
      {
        title: "MIHAN SEZ proximity",
        description:
          "Direct connectivity to India's largest multi-modal SEZ hub, driving industrial jobs and rental demand.",
      },
      {
        title: "Outer Ring Road access",
        description:
          "Nagpur's proposed 118 km outer ring road passes within minutes of the layout, unlocking massive appreciation.",
      },
      {
        title: "Samruddhi Mahamarg",
        description:
          "The Mumbai-Nagpur expressway interchange brings the entire western Maharashtra economy to your doorstep.",
      },
      {
        title: "Metro Phase-II",
        description:
          "Nagpur Metro's proposed extension will place a station within a short drive of Techops Park.",
      },
    ],
    connectivity: [
      { place: "Nagpur Railway Station", distance: "14 km" },
      { place: "Dr. Babasaheb Ambedkar Intl. Airport", distance: "18 km" },
      { place: "MIHAN SEZ", distance: "22 km" },
      { place: "NH-6 Highway", distance: "3 km" },
    ],
    description:
      "Techops Park is our flagship plotted development in Mouza Kalamna, engineered for investors and end-users who see where Nagpur is heading. Positioned along the eastern industrial belt, with the proposed outer ring road and Samruddhi Mahamarg interchange arriving within a decade, every plot here is a hedge against inflation and a bet on Nagpur's tier-1 future.",
  },
  {
    slug: "sai-ram-nagari-3",
    name: "Sai Ram Nagari 3",
    tagline: "Wide open plots in the greens of Surgaon",
    type: "Residential Plots",
    status: "Booking Open",
    location: "Surgaon, Nagpur",
    fullLocation: "Village Surgaon, District Nagpur, Maharashtra",
    mapQuery: "Surgaon, Nagpur, Maharashtra",
    image: nagari3Img.url,
    highlights: [
      "Third phase of our best-selling Sai Ram Nagari series",
      "Plot sizes from 1,000 sq.ft to 3,500 sq.ft",
      "N.A. / T.P. sanctioned & bank loan approved",
      "Green belt buffer on two sides",
    ],
    amenities: [
      "Themed entrance gate",
      "Central fountain plaza",
      "Jogging track",
      "Meditation garden",
      "Rainwater harvesting",
      "Solar street lights",
      "Underground utilities",
      "Community hall (proposed)",
    ],
    investment: [
      {
        title: "Surgaon growth belt",
        description:
          "Surgaon is one of Nagpur's fastest-appreciating peripheries with new schools, colleges and industrial units.",
      },
      {
        title: "Proposed 4-lane road widening",
        description:
          "State PWD has sanctioned road widening on the main approach road, cutting commute time to Nagpur city in half.",
      },
      {
        title: "Educational hub proximity",
        description:
          "Multiple upcoming CBSE schools and a proposed engineering college within 5 km.",
      },
      {
        title: "Low entry, high upside",
        description:
          "Still priced 30-40% below adjacent developed layouts — the classic Sai Ram Nagari pattern.",
      },
    ],
    connectivity: [
      { place: "Nagpur city centre", distance: "18 km" },
      { place: "Wardha Road", distance: "9 km" },
      { place: "Nearest school cluster", distance: "4 km" },
      { place: "Nearest hospital", distance: "6 km" },
    ],
    description:
      "The third chapter in the Sai Ram Nagari story — bigger, greener and better planned than ever. Surgaon offers what Nagpur's core no longer can: space, silence and a clear runway of appreciation. Every plot in Nagari 3 is oriented for cross ventilation, natural light and a lifetime of quiet mornings.",
  },
  {
    slug: "sai-ram-nagari-2",
    name: "Sai Ram Nagari 2",
    tagline: "Palm-lined avenues, lakeside living at Pipalpar",
    type: "Residential Plots",
    status: "Almost Sold Out",
    location: "Pipalpar, Nagpur",
    fullLocation: "Village Pipalpar, District Nagpur, Maharashtra",
    mapQuery: "Pipalpar, Nagpur, Maharashtra",
    image: nagari2Img.url,
    highlights: [
      "Lakeside layout — only 12 plots remaining",
      "Palm-lined 60 ft main boulevard",
      "N.A. sanctioned, all approvals in place",
      "Over 300 happy families already registered",
    ],
    amenities: [
      "Lakeside walking promenade",
      "Grand arched entrance gate",
      "Central rotary garden",
      "Underground electric cabling",
      "24x7 borewell water supply",
      "Speed breakers & signage",
      "Compound wall on all sides",
      "Landscaped plot corners",
    ],
    investment: [
      {
        title: "Waterfront premium",
        description:
          "Lakeside plots in Nagpur's periphery have historically appreciated 2.5x faster than dry-land layouts.",
      },
      {
        title: "Tourism circuit",
        description:
          "Pipalpar sits on a proposed eco-tourism circuit with a state-funded lakefront development plan.",
      },
      {
        title: "Sold-out neighbours",
        description:
          "All plots in Sai Ram Nagari 1 & 2 first phases are already resold at 2x+ the original booking price.",
      },
      {
        title: "Registry-ready",
        description:
          "Instant registration on payment — no waiting, no dependencies.",
      },
    ],
    connectivity: [
      { place: "Nagpur airport", distance: "24 km" },
      { place: "Amravati Road", distance: "7 km" },
      { place: "Pipalpar lake", distance: "0.3 km" },
      { place: "Nearest market", distance: "2 km" },
    ],
    description:
      "Sai Ram Nagari 2 is what happens when a plotted development is designed around a view instead of a spreadsheet. Palm-lined boulevards, a lakefront promenade and a hushed morning quiet you can't find inside Nagpur anymore. Only a handful of plots remain — this project rarely gets a second chance for buyers.",
  },
  {
    slug: "sai-ram-nagari",
    name: "Sai Ram Nagari",
    tagline: "The layout that started it all — Ajni, Nagpur",
    type: "Residential Plots",
    status: "Ready to Register",
    location: "Ajni, Nagpur",
    fullLocation: "Ajni, Nagpur, Maharashtra",
    mapQuery: "Ajni, Nagpur, Maharashtra",
    image: nagari1Img.url,
    highlights: [
      "Our founding project — established 2010",
      "Fully developed layout with mature landscaping",
      "Walking distance to Ajni Railway Station",
      "Metro-connected micro-market",
    ],
    amenities: [
      "Wrought-iron gated entrance",
      "Tree-lined internal streets",
      "Fully developed civic infrastructure",
      "Streetlights on every pole",
      "Registered plots ready for construction",
      "Neighbourhood park",
      "Compound wall & security cabin",
      "Piped water connection",
    ],
    investment: [
      {
        title: "Nagpur Metro corridor",
        description:
          "Ajni is a live station on the operational Nagpur Metro — the single biggest appreciation driver for the area.",
      },
      {
        title: "Central business proximity",
        description:
          "Twelve minutes to Sitabuldi and eight minutes to the Zero Mile — the geographic centre of India.",
      },
      {
        title: "Institutional demand",
        description:
          "Railway, IT and government employees continue to drive steady end-user demand.",
      },
      {
        title: "Zero appreciation risk",
        description:
          "Established layout, mature roads, existing homes — you're not betting on the future, you're buying the present.",
      },
    ],
    connectivity: [
      { place: "Ajni Railway Station", distance: "1.5 km" },
      { place: "Ajni Metro Station", distance: "1.2 km" },
      { place: "Nagpur Airport", distance: "6 km" },
      { place: "Sitabuldi Market", distance: "5 km" },
    ],
    description:
      "Sai Ram Nagari is the project that gave our company its name. Fifteen years on, it stands as proof of what we promise — a plot bought here in 2010 is worth over eight times its original price today. A handful of resale-ready plots have opened up, and this is your chance to enter Nagpur's most trusted plotted layout.",
  },
  {
    slug: "sairam-heights",
    name: "Sairam Heights",
    tagline: "Skyline living, redefined for Nagpur",
    type: "Flats & Apartments",
    status: "Under Development",
    location: "Wardha Road, Nagpur",
    fullLocation: "Wardha Road, Nagpur, Maharashtra",
    mapQuery: "Wardha Road, Nagpur",
    image: apartmentsIndian1,
    highlights: [
      "22-storey premium residential tower",
      "2, 3 & 4 BHK sky homes",
      "Floor-to-ceiling glass balconies",
      "Sky lounge on the 20th floor",
    ],
    amenities: [
      "Rooftop infinity pool",
      "Fully equipped clubhouse",
      "Multi-tier security",
      "High-speed elevators",
      "Sky garden",
      "Kids' play zone",
      "Yoga & meditation deck",
      "EV charging parking",
    ],
    investment: [
      {
        title: "Wardha Road prestige",
        description:
          "Nagpur's most sought-after residential corridor, home to the city's premium developments.",
      },
      {
        title: "Rental yield",
        description:
          "3 BHK Wardha Road apartments deliver among the highest rental yields in Nagpur.",
      },
      {
        title: "Airport & MIHAN",
        description:
          "Direct connectivity to the airport and MIHAN SEZ — a magnet for corporate tenants.",
      },
      {
        title: "Scarcity of tall towers",
        description:
          "Very few 20+ storey towers on Wardha Road — early buyers get the best views and prices.",
      },
    ],
    connectivity: [
      { place: "Airport", distance: "4 km" },
      { place: "MIHAN SEZ", distance: "8 km" },
      { place: "AIIMS Nagpur", distance: "9 km" },
      { place: "Ramdaspeth", distance: "6 km" },
    ],
    description:
      "Sairam Heights is our flagship high-rise, a 22-storey tower on Wardha Road engineered for buyers who want a signature address. Every home is a corner home, every balcony frames a horizon, and every amenity is built to a standard we've refused to compromise on since day one.",
  },
  {
    slug: "sairam-residency",
    name: "Sairam Residency",
    tagline: "Twin-tower luxury with a resort at your doorstep",
    type: "Flats & Apartments",
    status: "Booking Open",
    location: "Manish Nagar, Nagpur",
    fullLocation: "Manish Nagar, Nagpur, Maharashtra",
    mapQuery: "Manish Nagar, Nagpur",
    image: apartmentsIndian2,
    highlights: [
      "Twin 18-storey towers",
      "2 & 3 BHK homes with resort-style courtyard",
      "40,000 sq.ft of amenities",
      "70% open landscape",
    ],
    amenities: [
      "Resort-style swimming pool",
      "Grand double-height clubhouse",
      "Gym, spa & sauna",
      "Landscaped courtyard",
      "Amphitheatre",
      "Indoor games",
      "24x7 concierge",
      "Two-tier basement parking",
    ],
    investment: [
      {
        title: "Manish Nagar micro-market",
        description:
          "One of Nagpur's fastest-growing residential neighbourhoods with steady end-user demand.",
      },
      {
        title: "Ring Road proximity",
        description:
          "Direct connectivity to the inner and outer ring roads for hassle-free city access.",
      },
      {
        title: "School-hospital cluster",
        description:
          "Top CBSE / ICSE schools and multi-specialty hospitals within a 3 km radius.",
      },
      {
        title: "Assured appreciation",
        description:
          "Premium twin-tower projects in Nagpur have historically appreciated 12-15% year on year.",
      },
    ],
    connectivity: [
      { place: "Ring Road", distance: "1 km" },
      { place: "Wardha Road", distance: "4 km" },
      { place: "Nearest metro station", distance: "3 km" },
      { place: "Airport", distance: "9 km" },
    ],
    description:
      "Sairam Residency was designed around one idea — you shouldn't have to leave home to feel like you're on holiday. The twin towers cradle a resort-style courtyard with a lagoon pool, cabana lounge and amphitheatre, so every evening feels like a weekend you didn't have to plan.",
  },
  {
    slug: "sairam-greens",
    name: "Sairam Greens",
    tagline: "Low-rise boutique living close to nature",
    type: "Flats & Apartments",
    status: "Ready to Register",
    location: "Besa, Nagpur",
    fullLocation: "Besa, Nagpur, Maharashtra",
    mapQuery: "Besa, Nagpur",
    image: apartmentsIndian3,
    highlights: [
      "Boutique G+3 low-rise, only 24 exclusive homes",
      "2 & 3 BHK garden apartments",
      "Private terrace with each top-floor unit",
      "Ready to move in — occupation certificate received",
    ],
    amenities: [
      "Landscaped central garden",
      "Cobblestone driveway",
      "Covered parking for every home",
      "Solar-powered common lighting",
      "Rainwater harvesting",
      "Society lounge",
      "Kids' sandpit play area",
      "Piped gas ready",
    ],
    investment: [
      {
        title: "Besa premium enclave",
        description:
          "Besa has quietly become Nagpur's low-rise luxury enclave, favoured by senior professionals and NRI buyers.",
      },
      {
        title: "Low-density scarcity",
        description:
          "Only 24 homes across the entire project — resale demand consistently outstrips supply.",
      },
      {
        title: "Ready product",
        description:
          "Zero construction risk, zero waiting — move in the day you register.",
      },
      {
        title: "Rent-ready yield",
        description:
          "Existing corporate tenant demand from nearby IT parks and hospitals.",
      },
    ],
    connectivity: [
      { place: "Besa main road", distance: "0.4 km" },
      { place: "Beltarodi IT cluster", distance: "3 km" },
      { place: "Airport", distance: "12 km" },
      { place: "Ring Road", distance: "2 km" },
    ],
    description:
      "Sairam Greens is what we build when we want to say less. A quiet G+3, twenty-four families, a garden you actually use. It's the antidote to the ninety-storey skyline race — a home that feels like a home, in a neighbourhood that still remembers your name.",
  },
  {
    slug: "sairam-enclave",
    name: "Sairam Enclave",
    tagline: "Mediterranean-inspired boutique residences",
    type: "Flats & Apartments",
    status: "Almost Sold Out",
    location: "Civil Lines, Nagpur",
    fullLocation: "Civil Lines, Nagpur, Maharashtra",
    mapQuery: "Civil Lines, Nagpur",
    image: apartmentsIndian4,
    highlights: [
      "Mediterranean-themed boutique tower",
      "3 & 4 BHK signature residences",
      "Only 3 units left",
      "Civil Lines — Nagpur's most exclusive address",
    ],
    amenities: [
      "Arched courtyard",
      "Rooftop lounge deck",
      "Private lift lobby per home",
      "Concierge & valet",
      "Home automation ready",
      "Landscaped terrace gardens",
      "Wine cellar (proposed)",
      "Multi-tier security",
    ],
    investment: [
      {
        title: "Civil Lines exclusivity",
        description:
          "Nagpur's oldest premium neighbourhood — a Civil Lines address is generational.",
      },
      {
        title: "New-supply drought",
        description:
          "Almost no new premium supply has come to Civil Lines in a decade, keeping prices firm.",
      },
      {
        title: "Institutional neighbours",
        description:
          "Surrounded by embassies, official residences, five-star hotels and elite schools.",
      },
      {
        title: "Last three homes",
        description:
          "Only three residences remain — first-come, first-served with priority-buyer pricing.",
      },
    ],
    connectivity: [
      { place: "Sitabuldi", distance: "3 km" },
      { place: "Zero Mile", distance: "2 km" },
      { place: "Airport", distance: "8 km" },
      { place: "Railway Station", distance: "4 km" },
    ],
    description:
      "Sairam Enclave is a small, intentional collection of Mediterranean-inspired residences on one of the most protected streets in Nagpur. Arched balconies, terracotta finishes, an interior courtyard — everything about it is designed to feel less like a project and more like a private address you were invited into.",
  },
];

export const plotProjects = projects.filter((p) => p.type === "Residential Plots");
export const flatProjects = projects.filter((p) => p.type === "Flats & Apartments");

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
