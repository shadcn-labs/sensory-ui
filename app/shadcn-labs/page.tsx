import type { Metadata } from "next";
import { LabsFooter } from "@/app/_components/labs-footer";
import { LabsCards } from "./_components/labs-cards";
import { LabsFamily } from "./_components/labs-family";
import { LabsFaq } from "./_components/labs-faq";
import { LabsHeader } from "./_components/labs-header";
import { LabsHero } from "./_components/labs-hero";

const PAGE_URL = "https://sensory-ui.com/shadcn-labs";
const TITLE = "sensory-ui is now part of Shadcn Labs";
const DESCRIPTION =
  "Shadcn Labs is an open-source group building registries, templates and tools for the shadcn/ui ecosystem. Nothing changes: same CLI, same components, same sound.";

const ogImage =
  "/api/og?file=og-shadcn-labs.png&mode=docs&badge=Announcement&title=sensory-ui%20is%20now%20part%20of%20Shadcn%20Labs&description=The%20open-source%20group%20building%20registries%2C%20templates%20and%20tools%20for%20shadcn%2Fui.%20Same%20CLI%2C%20same%20components%2C%20same%20sound.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  keywords: [
    "sensory-ui",
    "shadcn labs",
    "shadcn-labs",
    "shadcn/ui",
    "shadcn sounds",
    "shadcn audio",
    "semantic sound",
    "ui sound effects",
    "react sound components",
    "announcement",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "sensory-ui",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "sensory-ui is now part of Shadcn Labs - announcement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SatyamVyas04",
    creator: "@SatyamVyas04",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: ogImage,
        alt: "sensory-ui is now part of Shadcn Labs - announcement",
      },
    ],
  },
};

// Structured data: announcement page + Labs org + breadcrumbs + FAQ (AEO).
// Keep the FAQ copy in sync with app/shadcn-labs/_components/labs-faq.tsx.
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Does anything change for existing users?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The CLI, the docs, the registry and every install command keep working exactly as before - same components, same sound.",
      },
    },
    {
      "@type": "Question",
      name: "What is Shadcn Labs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An open-source group building registries, templates, ports and skills for the shadcn/ui ecosystem. sensory-ui joins as its sound layer.",
      },
    },
    {
      "@type": "Question",
      name: "How do I install sensory-ui?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Run npx shadcn@latest add shadcn-labs/sensory-ui/sensory-ui and wrap your app in the provider. The docs cover every sound role and pack.",
      },
    },
  ],
};

// Structured data: announcement page + Labs org + breadcrumbs.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Shadcn Labs announcement",
      description: DESCRIPTION,
      url: PAGE_URL,
      isPartOf: { "@id": "https://sensory-ui.com/#website" },
      about: { "@id": "https://sensory-ui.com/#app" },
      primaryImageOfPage: ogImage,
    },
    {
      "@type": "Organization",
      name: "Shadcn Labs",
      url: "https://www.shadcn-labs.com/",
      sameAs: ["https://github.com/shadcn-labs", "https://x.com/shadcnlabs"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "home",
          item: "https://sensory-ui.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Shadcn Labs announcement",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data for SEO
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD FAQ structured data for AEO
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        type="application/ld+json"
      />
      <LabsHeader />
      <main id="main-content">
        <LabsHero />
        <LabsCards />
        <LabsFamily />
        <LabsFaq />
      </main>
      <LabsFooter placement="announcement" />
    </>
  );
}
