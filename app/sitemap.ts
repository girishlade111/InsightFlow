import { MetadataRoute } from "next"

const siteConfig = {
  name: "InsightFlow",
  description: "AI-Powered Feedback Intelligence Platform - Collect, manage, and analyze user feedback efficiently",
  url: "https://insightflow.vercel.app",
}

const pages = [
  {
    url: siteConfig.url,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 1,
  },
  {
    url: `${siteConfig.url}/terms`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    url: `${siteConfig.url}/privacy`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    url: `${siteConfig.url}/cookies`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    url: `${siteConfig.url}/contact`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    url: `${siteConfig.url}/docs`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: page.url,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}