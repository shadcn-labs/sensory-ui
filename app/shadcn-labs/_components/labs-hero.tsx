"use client";

import { IconArrowUpRight } from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import posthog from "posthog-js";

const ease = [0.32, 0.72, 0, 1] as const;

const HERO_LINKS = [
  { label: "shadcn-labs.com", href: "https://www.shadcn-labs.com/" },
  { label: "github.com/shadcn-labs", href: "https://github.com/shadcn-labs" },
  { label: "@shadcnlabs", href: "https://x.com/shadcnlabs" },
] as const;

export function LabsHero() {
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: prefersReduced ? 0 : 12 },
    transition: { duration: 0.25, ease, delay },
    viewport: { once: true, margin: "-80px" },
    whileInView: { opacity: 1, y: 0 },
  });

  return (
    <section aria-labelledby="labs-heading" className="relative">
      {/* Logotype band: the announcement moment, dithered like the hero */}
      <div className="relative border-border border-b">
        <Image
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10"
          fill
          src="/dither/cta-dither.png"
        />
        <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 py-10 sm:px-6 sm:py-14">
          <motion.div {...fadeUp()}>
            <a
              aria-label="Shadcn Labs - opens shadcn-labs.com"
              className="inline-flex items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
              href="https://www.shadcn-labs.com/"
              onClick={() =>
                posthog.capture("labs_link_clicked", {
                  link: "labs_site",
                  placement: "hero",
                })
              }
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                alt=""
                aria-hidden="true"
                className="h-7 w-auto sm:h-10 dark:invert"
                height={60}
                priority
                src="/shadcn-labs-logotype.svg"
                width={554}
              />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 py-12 text-center sm:py-16">
          {/* Kicker */}
          <motion.span
            className="inline-flex items-center gap-1.5 border border-primary/30 bg-primary/5 px-2.5 py-1 font-mono text-primary text-xs"
            {...fadeUp(0)}
          >
            announcement
          </motion.span>

          {/* Headline */}
          <motion.h1
            className="max-w-[20ch] text-balance font-serif text-4xl leading-tight tracking-tight sm:text-5xl sm:leading-[1.1] md:text-6xl lg:text-7xl"
            id="labs-heading"
            {...fadeUp(0.05)}
          >
            sensory-ui is now part of{" "}
            <span className="text-primary">Shadcn Labs.</span>
          </motion.h1>

          {/* Body */}
          <div className="flex flex-col gap-4">
            <motion.p
              className="mx-auto max-w-[56ch] text-balance text-foreground/85 text-sm/relaxed sm:text-base/relaxed"
              {...fadeUp(0.1)}
            >
              Shadcn Labs is an open-source group building registries, templates
              and tools for the shadcn/ui ecosystem. sensory-ui joins as its
              sound layer, turning static components into interfaces you can
              hear.
            </motion.p>
            <motion.p
              className="mx-auto max-w-[56ch] text-balance text-foreground/85 text-sm/relaxed sm:text-base/relaxed"
              {...fadeUp(0.15)}
            >
              Nothing changes for you: same CLI, same components, same sound.
              The docs, the registry and every install command keep working
              exactly as before.
            </motion.p>
            <motion.p
              className="mx-auto max-w-[56ch] text-balance text-muted-foreground text-sm/relaxed"
              {...fadeUp(0.2)}
            >
              Shadcn Labs isn&apos;t affiliated with or endorsed by{" "}
              <a
                className="underline underline-offset-2 transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                href="https://github.com/shadcn"
                onClick={() =>
                  posthog.capture("labs_link_clicked", {
                    link: "shadcn",
                    placement: "hero",
                  })
                }
                rel="noopener noreferrer"
                target="_blank"
              >
                shadcn
              </a>
              .
            </motion.p>
          </div>

          {/* Canonical links row */}
          <motion.nav aria-label="Shadcn Labs links" {...fadeUp(0.25)}>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-xs sm:text-sm">
              {HERO_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    className="group inline-flex items-center gap-0.5 text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    href={link.href}
                    onClick={() =>
                      posthog.capture("labs_link_clicked", {
                        link: link.label.toLowerCase(),
                        placement: "hero",
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
      </div>
    </section>
  );
}
