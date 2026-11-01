"use client";

import {
  IconArrowRight,
  IconBrandGithub,
  IconFileText,
} from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import posthog from "posthog-js";
import { Button } from "@/components/ui/sensory-ui/button";
import { GITHUB_REGISTRY } from "@/lib/github-registry";

const ease = [0.32, 0.72, 0, 1] as const;

const INSTALL_COMMAND = `...${GITHUB_REGISTRY}/sensory-ui`;

// Action bars are all h-9 w-full and pinned with mt-auto so all three cards
// sit on exactly the same levels: kicker / h3 / copy tops aligned, actions
// bottom-aligned regardless of copy length.
function InstallCommand() {
  return (
    <div className="mt-auto w-full min-w-0 pt-5">
      <div className="flex h-9 w-full min-w-0 items-center overflow-hidden border border-primary/30 bg-card/40 px-3 sm:px-4">
        <code className="min-w-0 truncate text-left font-mono text-[11px] text-primary sm:text-xs">
          <span className="text-foreground">$</span> {INSTALL_COMMAND}
        </code>
      </div>
    </div>
  );
}

export function LabsCards() {
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: prefersReduced ? 0 : 12 },
    transition: { duration: 0.25, ease, delay },
    viewport: { once: true, margin: "-80px" },
    whileInView: { opacity: 1, y: 0 },
  });

  return (
    <section
      aria-labelledby="labs-same-heading"
      className="border-border border-t"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="pt-12 text-center sm:pt-16">
          <span className="font-mono text-muted-foreground text-xs tracking-widest">
            17 sound cues, 24 components, 9 packs - all unchanged
          </span>
          <h2
            className="mt-3 text-balance font-serif text-3xl tracking-tight sm:text-4xl"
            id="labs-same-heading"
          >
            Loud news, <span className="text-primary">quiet release.</span>
          </h2>
        </div>

        <div className="my-12 grid grid-cols-1 gap-px border border-border bg-border sm:my-16 sm:grid-cols-3">
          <motion.article
            className="flex min-w-0 flex-col bg-background p-6 text-center"
            {...fadeUp(0.05)}
          >
            <span className="font-mono text-[11px] text-muted-foreground leading-none tracking-widest">
              01 · cli
            </span>
            <h3 className="mt-3 font-serif text-xl leading-7 tracking-tight">
              Same CLI
            </h3>
            <p className="mt-2 text-balance text-muted-foreground text-sm/relaxed">
              All the same commands, now with a new home and a new name.
            </p>
            <InstallCommand />
          </motion.article>

          <motion.article
            className="flex min-w-0 flex-col bg-background p-6 text-center"
            {...fadeUp(0.1)}
          >
            <span className="font-mono text-[11px] text-muted-foreground leading-none tracking-widest">
              02 · docs
            </span>
            <h3 className="mt-3 font-serif text-xl leading-7 tracking-tight">
              Same docs
            </h3>
            <p className="mt-2 text-balance text-muted-foreground text-sm/relaxed">
              Every sound role, pack and accessibility switch, documented end to
              end.
            </p>
            <div className="mt-auto w-full pt-5">
              <Button
                asChild
                className="h-9 w-full justify-center gap-2"
                sound="navigation.forward"
              >
                <Link
                  href="/docs"
                  onClick={() =>
                    posthog.capture("labs_link_clicked", {
                      link: "docs",
                      placement: "same_cards",
                    })
                  }
                >
                  <IconFileText aria-hidden="true" className="size-4" />
                  Read the docs
                  <IconArrowRight aria-hidden="true" className="size-3.5" />
                </Link>
              </Button>
            </div>
          </motion.article>

          <motion.article
            className="flex min-w-0 flex-col bg-background p-6 text-center"
            {...fadeUp(0.15)}
          >
            <span className="font-mono text-[11px] text-muted-foreground leading-none tracking-widest">
              03 · source
            </span>
            <h3 className="mt-3 font-serif text-xl leading-7 tracking-tight">
              Same source
            </h3>
            <p className="mt-2 text-balance text-muted-foreground text-sm/relaxed">
              Open source under MIT, now living at{" "}
              <span className="font-mono">shadcn-labs/sensory-ui</span>.
            </p>
            <div className="mt-auto w-full pt-5">
              <Button
                asChild
                className="h-9 w-full justify-center gap-2"
                sound="interaction.tap"
                variant="outline"
              >
                <Link
                  href={`https://github.com/${GITHUB_REGISTRY}`}
                  onClick={() =>
                    posthog.capture("labs_link_clicked", {
                      link: "repo",
                      placement: "same_cards",
                    })
                  }
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IconBrandGithub aria-hidden="true" className="size-4" />
                  View on GitHub
                  <IconArrowRight aria-hidden="true" className="size-3.5" />
                </Link>
              </Button>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
