export const dynamic = "force-static";
export const revalidate = false;

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://elevenfuturetech.com/sitemap.xml",
  };
}
