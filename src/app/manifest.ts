import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Oramax Dental & Maxillofacial Clinic",
    short_name: "Oramax Clinic",
    description:
      "Oramax Dental & Maxillofacial Clinic — Dr. Khushal Gangwani, Juhu Mumbai. Request appointments, call or get directions.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#16222d",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  };
}
