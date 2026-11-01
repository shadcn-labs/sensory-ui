"use client";

import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";

const LABS_LINKS = [
  { label: "shadcn-labs.com", href: "https://www.shadcn-labs.com/" },
  { label: "@shadcnlabs", href: "https://x.com/shadcnlabs" },
  { label: "github.com/shadcn-labs", href: "https://github.com/shadcn-labs" },
] as const;

interface LabsFooterProps {
  placement: "home" | "announcement";
}

export function LabsFooter({ placement }: LabsFooterProps) {
  return (
    <aside aria-label="Shadcn Labs" className="border-border border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex flex-col gap-1.5">
          <a
            className="inline-flex w-fit items-center"
            href="https://www.shadcn-labs.com/"
            onClick={() =>
              posthog.capture("labs_link_clicked", {
                link: "labs_site",
                placement,
              })
            }
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              alt="Shadcn Labs"
              className="h-5 w-auto dark:invert"
              height={60}
              src="/shadcn-labs-logotype.svg"
              width={554}
            />
          </a>
          <p className="text-muted-foreground text-xs">
            sensory-ui is part of Shadcn Labs.{" "}
            <Link
              className="underline underline-offset-2 transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              href="/shadcn-labs"
              onClick={() =>
                posthog.capture("labs_link_clicked", {
                  link: "announcement",
                  placement,
                })
              }
            >
              Read the announcement
            </Link>
            . Not affiliated with or endorsed by{" "}
            <a
              className="underline underline-offset-2 transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              href="https://github.com/shadcn"
              onClick={() =>
                posthog.capture("labs_link_clicked", {
                  link: "shadcn",
                  placement,
                })
              }
              rel="noopener noreferrer"
              target="_blank"
            >
              shadcn
            </a>
            .
          </p>
        </div>

        <nav aria-label="Shadcn Labs links" className="shrink-0">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-muted-foreground uppercase tracking-wide">
            {LABS_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  href={link.href}
                  onClick={() =>
                    posthog.capture("labs_link_clicked", {
                      link: link.label.toLowerCase(),
                      placement,
                    })
                  }
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
