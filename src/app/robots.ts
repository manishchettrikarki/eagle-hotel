import { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/"], // keep admin and API routes private
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
