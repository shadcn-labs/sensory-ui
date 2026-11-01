"use client";

import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";
import { Button } from "@/components/ui/sensory-ui/button";

export function LabsHeader() {
  return (
    <header className="border-border border-b">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:top-8 focus:left-1/2 focus:z-100 focus:-translate-x-1/2 focus:-translate-y-1/2 focus:bg-primary focus:px-3 focus:py-1.5 focus:font-medium focus:text-primary-foreground focus:text-xs focus-visible:ring-2 focus-visible:ring-ring"
        href="#main-content"
      >
        Skip to main content
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          className="flex items-center gap-2.5 font-semibold text-base transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          href="/"
        >
          <Image
            alt="sensory-ui"
            aria-hidden="true"
            className="size-6 rounded-full"
            height={256}
            priority
            src="/sensory-ui-logo-small.svg"
            width={256}
          />
          <span>sensory-ui</span>
        </Link>

        <nav
          aria-label="Site links"
          className="flex items-center gap-1 sm:gap-2"
        >
          <Button
            asChild
            className="bg-transparent text-muted-foreground hover:text-foreground"
            sound="interaction.tap"
            variant="ghost"
          >
            <Link
              href="/docs"
              onClick={() =>
                posthog.capture("labs_nav_link_clicked", { link: "docs" })
              }
            >
              Docs
            </Link>
          </Button>
          <Button
            asChild
            className="size-8 bg-transparent"
            sound="interaction.tap"
            variant="outline"
          >
            <Link
              aria-label="X - @SatyamVyas04"
              href="https://x.com/SatyamVyas04"
              onClick={() =>
                posthog.capture("labs_nav_link_clicked", { link: "twitter" })
              }
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconBrandX aria-hidden="true" className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            className="bg-transparent"
            sound="interaction.tap"
            variant="outline"
          >
            <Link
              aria-label="GitHub - shadcn-labs/sensory-ui"
              href="https://github.com/shadcn-labs/sensory-ui"
              onClick={() =>
                posthog.capture("labs_nav_link_clicked", { link: "github" })
              }
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconBrandGithub aria-hidden="true" className="size-3.5" />
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
