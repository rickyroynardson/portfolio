import { MetadataRoute } from "next";
import navigationItems from "@/data/navigations.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const navigations = navigationItems.map((item) => {
    return {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}{item.path}`,
      lastModified: new Date(),
      priority: item.path === "/" ? 1 : 0.7,
    };
  });

  return [...navigations];
}
