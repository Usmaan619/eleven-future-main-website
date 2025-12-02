import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://elevenfuturetech.com"),

  title: {
    default: "Eleven Future Tech – IT Solutions & Digital Innovation",
    template: "%s | Eleven Future Tech",
  },

  description:
    "Eleven Future Tech is a leading IT company delivering web development, mobile apps, AI solutions, cloud services, cybersecurity, automation and complete digital transformation. Contact us for a free consultation.",

  keywords: [
    "IT services",
    "software development",
    "digital solutions",
    "AI solutions",
    "Eleven Future Tech",
    "web development company",
    "mobile app development",
    "cloud services",
    "cybersecurity",
    "automation",
  ],

  // ⭐ Updated ICONS (recommended best-practice)
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/icon.png", type: "image/png" },
      {
        url: "/icon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180" }],
  },

  openGraph: {
    title: "Eleven Future Tech – IT Solutions & Digital Innovation",
    description:
      "We build next-gen digital solutions including software development, AI, cloud, automation, mobile apps and digital transformation.",
    url: "https://elevenfuturetech.com",
    siteName: "Eleven Future Tech",
    type: "website",
    images: [
      {
        url: "https://elevenfuturetech.com/eft-logo.png",
        width: 1200,
        height: 630,
        alt: "Eleven Future Tech",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://elevenfuturetech.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ⭐ Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WFX3B248');
          `}
        </Script>

        {/* ⭐ Organization Schema */}
        <Script
          id="org-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Eleven Future Tech",
            url: "https://elevenfuturetech.com",
            logo: "https://elevenfuturetech.com/eft-logo.png",
            image: "https://elevenfuturetech.com/eft-logo.png",
            sameAs: [
              "https://www.linkedin.com/company/elevenfuturetech/",
              "https://www.instagram.com/elevenfuturetech/",
            ],
          })}
        </Script>

        {/* ⭐ Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Eleven Future Tech",
            url: "https://elevenfuturetech.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://elevenfuturetech.com/?search={query}",
              "query-input": "required name=query",
            },
          })}
        </Script>

        {/* ⭐ Services Schema */}
        <Script
          id="services-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "IT Solutions & Software Development",
            serviceType:
              "Web Development, Mobile Apps, AI Solutions, Cloud Services, Cybersecurity, Automation",
            provider: {
              "@type": "Organization",
              name: "Eleven Future Tech",
              url: "https://elevenfuturetech.com",
            },
            areaServed: "Worldwide",
            availableChannel: {
              "@type": "VirtualChannel",
              serviceUrl: "https://elevenfuturetech.com/services",
            },
          })}
        </Script>

        {/* ⭐ Contact Schema — prevents Google from showing WhatsApp/Phone snippet */}
        <Script
          id="contact-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            telephone: "+91 7000015122",
            contactType: "customer support",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          })}
        </Script>

        {/* ⭐ Breadcrumbs Schema */}
        <Script
          id="breadcrumbs-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://elevenfuturetech.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://elevenfuturetech.com/services",
              },
            ],
          })}
        </Script>
      </head>

      <body className={`${_geist.className} antialiased`}>
        {/* ⭐ GTM (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WFX3B248"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
