import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.RobotsFile {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://insightflow.vercel.app/sitemap.xml",
    host: "https://insightflow.vercel.app",
  }
}