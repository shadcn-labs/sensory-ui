"use client";

import { motion, useReducedMotion } from "motion/react";

const ease = [0.32, 0.72, 0, 1] as const;

// Keep copy in sync with the FAQPage JSON-LD in app/shadcn-labs/page.tsx.
const FAQ = [
  {
    q: "Does anything change for existing users?",
    a: "No. The CLI, the docs, the registry and every install command keep working exactly as before - same components, same sound.",
  },
  {
    q: "What is Shadcn Labs?",
    a: "An open-source group building registries, templates, ports and skills for the shadcn/ui ecosystem. sensory-ui joins as its sound layer.",
  },
  {
    q: "How do I install sensory-ui?",
    a: "Run npx shadcn@latest add shadcn-labs/sensory-ui/sensory-ui and wrap your app in the provider. The docs cover every sound role and pack.",
  },
] as const;

export function LabsFaq() {
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: prefersReduced ? 0 : 12 },
    transition: { duration: 0.25, ease, delay },
    viewport: { once: true, margin: "-80px" },
    whileInView: { opacity: 1, y: 0 },
  });

  return (
    <section
      aria-labelledby="labs-faq-heading"
      className="border-border border-t"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="pt-12 sm:pt-16" {...fadeUp()}>
          <span className="font-mono text-muted-foreground text-xs tracking-widest">
            faq
          </span>
          <h2
            className="mt-3 text-balance font-serif text-3xl tracking-tight sm:text-4xl"
            id="labs-faq-heading"
          >
            Questions, <span className="text-primary">answered.</span>
          </h2>
        </div>

        <dl className="my-12 flex flex-col gap-8 sm:my-16 sm:gap-10">
          {FAQ.map((entry, index) => (
            <motion.div key={entry.q} {...fadeUp(index * 0.05)}>
              <dt className="font-serif text-lg tracking-tight sm:text-xl">
                {entry.q}
              </dt>
              <dd className="mx-auto mt-2 max-w-[52ch] text-balance text-muted-foreground text-sm/relaxed">
                {entry.a}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
