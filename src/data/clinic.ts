export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.oramaxclinic.in";

export const doctor = {
  name: "Dr. Khushal Gangwani",
  hindiName: "डॉ. खुशहाल गंगवानी",
  specialty: "Oral and Maxillofacial Surgeon",
  shortIntro:
    "Dr. Khushal Gangwani provides oral and maxillofacial surgical care with an emphasis on clear communication, patient comfort and individualized treatment planning.",
  profileStatus: "Professional qualifications and detailed profile coming soon.",
} as const;

export const clinic = {
  name: "Oramax Dental & Maxillofacial Clinic",
  tagline: "Specialized oral & maxillofacial care in Juhu, Mumbai",
  phoneDisplay: "+91 98239 00884",
  phoneHref: "tel:+919823900884",
  address: {
    line1: "Sukh Shanti, 8, N S Rd Number 8,",
    line2: "Jaihind Society, Nutan Laxmi Society,",
    line3: "Vithal Nagar, Juhu,",
    city: "Mumbai",
    state: "Maharashtra",
    postalCode: "400049",
    country: "India",
  },
  fullAddress:
    "Sukh Shanti, 8, N S Rd Number 8, Jaihind Society, Nutan Laxmi Society, Vithal Nagar, Juhu, Mumbai, Maharashtra 400049, India",
  shortAddress: "Juhu, Mumbai, Maharashtra 400049",
  // NOTE: Replace with the exact Google Maps listing URL when available.
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Oramax+Dental+%26+Maxillofacial+Clinic+Sukh+Shanti+N+S+Rd+Number+8+Juhu+Mumbai+400049",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Oramax+Dental+%26+Maxillofacial+Clinic+Sukh+Shanti+N+S+Rd+Number+8+Juhu+Mumbai+400049",
  // Keyless embed (no API key required). Replace with Place ID embed if available.
  embedUrl:
    "https://www.google.com/maps?q=Oramax+Dental+%26+Maxillofacial+Clinic,+N+S+Rd+Number+8,+Juhu,+Mumbai+400049&output=embed",
} as const;

export type ServiceSlug =
  | "oral-surgery"
  | "maxillofacial-surgery"
  | "dental-implants"
  | "tooth-extraction"
  | "wisdom-teeth"
  | "surgical-consultation";

export interface Service {
  slug: ServiceSlug;
  enabled: boolean;
  name: string;
  short: string;
  icon: string;
  /** Educational intro shown on cards + detail pages. Not a claim of offering. */
  verified: boolean;
}

export const services: Service[] = [
  {
    slug: "oral-surgery",
    enabled: true,
    name: "Oral Surgery",
    short:
      "Diagnosis and surgical care for conditions affecting the teeth, jaws and supporting structures.",
    icon: "stethoscope",
    verified: true,
  },
  {
    slug: "maxillofacial-surgery",
    enabled: true,
    name: "Maxillofacial Surgery",
    short:
      "Specialist surgical care relating to the jaws, face and associated structures.",
    icon: "scan-face",
    verified: true,
  },
  {
    slug: "wisdom-teeth",
    enabled: true,
    name: "Wisdom Tooth Procedures",
    short:
      "Assessment of third molars, including impacted wisdom teeth, and planning for their care.",
    icon: "activity",
    verified: true,
  },
  {
    slug: "tooth-extraction",
    enabled: true,
    name: "Tooth Extraction",
    short:
      "Planned removal of teeth that cannot be preserved, with attention to comfort and healing.",
    icon: "plus-circle",
    verified: true,
  },
  {
    slug: "dental-implants",
    enabled: true,
    name: "Dental Implant Surgery",
    short:
      "Surgical placement planning for dental implants to replace missing teeth.",
    icon: "anchor",
    verified: true,
  },
  {
    slug: "surgical-consultation",
    enabled: true,
    name: "Surgical Consultation",
    short:
      "Unrushed first consultation: examination, imaging review and clear treatment options.",
    icon: "messages",
    verified: true,
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
] as const;

export const serviceDisclaimer =
  "Information on this page is for general education only and does not replace professional medical advice. Individual treatment decisions require an in-person consultation.";
