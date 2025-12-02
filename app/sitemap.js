export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap() {
  return [
    {
      url: "https://elevenfuturetech.com/",
      lastModified: "2025-12-02",
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: "https://elevenfuturetech.com/about",
      lastModified: "2025-11-15",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://elevenfuturetech.com/services",
      lastModified: "2025-12-01",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://elevenfuturetech.com/portfolio",
      lastModified: "2025-11-25",
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://elevenfuturetech.com/contact",
      lastModified: "2025-06-01",
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
