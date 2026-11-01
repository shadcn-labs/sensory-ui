"use client";

import { IconArrowUpRight } from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";
import posthog from "posthog-js";

const ease = [0.32, 0.72, 0, 1] as const;

const FAMILY = [
  "sensory-ui",
  "termcn",
  "emailcn",
  "framecn",
  "ogimagecn",
  "agentcn",
  "mcpcn",
  "editorcn",
  "pdfcn",
  "shadercn",
  "startercn",
  "shadcn-cssinjs",
  "skills",
] as const;

const DIRECTORY = [
  { label: "shadcn-labs.com", href: "https://www.shadcn-labs.com/" },
  { label: "@shadcnlabs", href: "https://x.com/shadcnlabs" },
  { label: "shadcn/ui", href: "https://github.com/shadcn-ui" },
  { label: "shadcn", href: "https://github.com/shadcn" },
] as const;

export function LabsFamily() {
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: prefersReduced ? 0 : 12 },
    transition: { duration: 0.25, ease, delay },
    viewport: { once: true, margin: "-80px" },
    whileInView: { opacity: 1, y: 0 },
  });

  return (
    <section
      aria-labelledby="labs-family-heading"
      className="border-border border-t"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="pt-12 sm:pt-16" {...fadeUp()}>
          <span className="font-mono text-muted-foreground text-xs tracking-widest">
            the labs family
          </span>
          <h2
            className="mt-3 text-balance font-serif text-3xl tracking-tight sm:text-4xl"
            id="labs-family-heading"
          >
            A new voice <span className="text-primary">in the group.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-balance text-muted-foreground text-sm/relaxed">
            One open-source group, many voices: registries, templates, ports,
            skills - and now sound.
          </p>
        </div>

        {/* Simple family list: every project of the group, equal treatment */}
        <motion.ul
          className="my-12 flex flex-wrap items-center justify-center gap-2 sm:my-16"
          {...fadeUp(0.1)}
        >
          {FAMILY.map((item) => (
            <li key={item}>
              <a
                aria-label={
                  item === "sensory-ui" ? "sensory-ui (that's us)" : item
                }
                className="group relative inline-flex touch-manipulation items-center gap-1.5 border border-border bg-background px-3 py-1.5 font-mono text-xs transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                href={`https://github.com/shadcn-labs/${item}`}
                onClick={() =>
                  posthog.capture("labs_link_clicked", {
                    link: item.toLowerCase(),
                    placement: "family_list",
                  })
                }
                rel="noopener noreferrer"
                target="_blank"
              >
                {item === "sensory-ui" && (
                  <span
                    aria-hidden="true"
                    className="absolute -top-1.5 -left-1.5 flex size-2 items-center justify-center overflow-hidden rounded-full bg-primary font-medium text-[10px] text-transparent ring-2 ring-background transition-all group-hover:-top-2.5 group-hover:size-5 group-hover:text-foreground group-focus-visible:-top-2.5 group-focus-visible:size-5 group-focus-visible:text-foreground group-focus-visible:ring-ring"
                  >
                    us
                  </span>
                )}
                <div className="translate-x-2 transition-all group-hover:translate-x-0 group-focus-visible:translate-x-0">
                  {item}
                </div>
                <IconArrowUpRight
                  aria-hidden="true"
                  className="size-3 -translate-x-2 opacity-0 transition-opacity group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                />
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Directory: canonical Labs destinations */}
        <motion.nav
          aria-label="Shadcn Labs directory"
          className="pb-12 sm:pb-16"
          {...fadeUp()}
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs sm:text-sm">
            {DIRECTORY.map((link) => (
              <li key={link.href}>
                <a
                  className="group inline-flex items-center gap-0.5 text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  href={link.href}
                  onClick={() =>
                    posthog.capture("labs_link_clicked", {
                      link: link.label.toLowerCase(),
                      placement: "directory",
                    })
                  }
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                  <IconArrowUpRight
                    aria-hidden="true"
                    className="ml-0.5 inline size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </section>
  );
}
