"use client";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import MobileMenu from "@/components/MobileMenu";
import Background from "@/components/Background";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowDown, ChevronUp, MapPinned, Blocks } from "lucide-react";

const services = [
  {
    number: "01",
    title: "WordPress Websites",
    description:
      "Clear, responsive sites built around what visitors need and what you need to manage.",
    points: ["Block themes", "Content structure", "Responsive design"],
  },
  {
    number: "02",
    title: "Custom Functionality",
    description:
      "Purpose-built blocks, plugins, and fixes when a standard solution does not quite fit.",
    points: ["Custom blocks", "REST APIs", "Integrations"],
  },
  {
    number: "03",
    title: "WooCommerce",
    description:
      "Practical improvements to product content, store journeys, and back-end workflows.",
    points: ["Storefronts", "Product UX", "Workflows"],
  },
];

const work = [
  {
    number: "01 / WEB APP",
    name: "Mapper",
    description:
      "A location-based delivery calculator that turns distance into a clear quote.",
    stack: "Next.js · Maps · API integration",
    glyph: "mapper",
  },
  {
    number: "02 / WORDPRESS",
    name: "Blockader",
    description:
      "A collection of custom WordPress blocks, including related content and live search.",
    stack: "Block editor · REST API · JavaScript",
    glyph: "blockader",
  },
];

const projectIcons = {
  mapper: MapPinned,
  blockader: Blocks,
};

const steps = [
  {
    number: "01",
    title: "Tell me the problem",
    description:
      "What are you trying to achieve, and what is getting in the way?",
  },
  {
    number: "02",
    title: "Find the right approach",
    description: "We agree on a useful scope before anything is built.",
  },
  {
    number: "03",
    title: "Build it properly",
    description:
      "I make the change, check the details, and explain what comes next.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-zinc-950 antialiased">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full bg-white/90 shadow-xs backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="flex items-center gap-2 text-base font-bold tracking-tighter text-zinc-950"
          >
            <Image
              src="/logo.png"
              alt="DBWP Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
              priority
            />
            <span>dbwp.pro</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
            <a
              className="transition-colors hover:text-zinc-950"
              href="#services"
            >
              Services
            </a>
            <a className="transition-colors hover:text-zinc-950" href="#work">
              Work
            </a>
            <a
              className="transition-colors hover:text-zinc-950"
              href="#approach"
            >
              Approach
            </a>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#contact"
              className="inline-flex h-8 items-center justify-center gap-2 rounded-lg bg-zinc-950 px-2 text-sm font-semibold text-white shadow transition hover:bg-zinc-800"
            >
              Let&apos;s talk <ArrowUpRight className="size-4" />
            </a>
          </div>
          <MobileMenu />
        </div>
      </header>

      {/* Main Page Content */}
      <main id="top" className="w-full">
        {/* Hero Section */}
        <section className="relative isolate flex min-h-[calc(100dvh-56px)] items-center justify-center overflow-hidden bg-[url('/fire.png')] bg-cover bg-center px-5 py-16 shadow-sm">
          <div className="hero-text relative z-10 shadow-lg mx-auto w-full max-w-5xl bg-white/50 rounded-2xl p-7 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-700 shadow-sm">
              <span className="size-2 rounded-full bg-emerald-600" />
              Independent web design &amp; development
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/wp-logo.png"
                  alt="WordPress logo"
                  width={64}
                  height={64}
                  className="mb-2 h-16 w-auto"
                  priority
                />
                <h1 className="mx-auto max-w-4xl text-4xl font-extrabold text-zinc-800 tracking-tight sm:text-6xl md:text-7xl">
                  Your Website <br />
                  <span className="text-zinc-50">built with flair.</span>
                </h1>
              </div>

              <p className="mx-auto mt-6 max-w-lg text-sm font-base text-zinc-800 sm:text-lg">
                Thoughtful WordPress and WooCommerce sites, custom features, and
                straightforward help when something isn&apos;t working.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-950 px-6 text-sm font-semibold text-white shadow transition hover:bg-zinc-800 sm:w-auto"
                  href="#contact"
                >
                  Tell me what you need <ArrowUpRight className="size-4" />
                </a>
                <a
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-6 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 sm:w-auto"
                  href="#work"
                >
                  Explore my work <ArrowDown className="size-4" />
                </a>
              </div>
            </motion.div>
            <p className="mt-12 text-xs font-medium text-zinc-200">
              Independent thinking · Useful code · No agency theatre
            </p>
          </div>
        </section>

        {/* Tech Stack Banner */}
        <section className="w-full border-y border-zinc-200 bg-zinc-50/80 py-8">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-center">
             
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-bold text-zinc-700 sm:gap-10">
                <span>WordPress</span>
                <span>WooCommerce</span>
                <span>Custom blocks</span>
                <span>React &amp; Next.js</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="w-full scroll-mt-20 bg-zinc-950 py-20 text-white sm:py-28"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <div className="mb-14 max-w-2xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
                  What I do
                </p>

                <h2 className="text-white text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl">
                  Whatever the brief, make it useful.
                </h2>

                <p className="mt-4 text-base leading-7 text-zinc-300">
                  From a whole new site to one stubborn issue, the goal is
                  clear: make the experience better for visitors and easier for
                  you to run.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {services.map((service) => (
                  <div
                    key={service.number}
                    className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-7 transition-colors hover:border-zinc-600"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold tracking-wider text-zinc-400">
                        <span>{service.number}</span>
                        <ArrowUpRight className="size-4 text-zinc-300" />
                      </div>

                      <h3 className="mt-5 text-xl font-bold tracking-tight text-white">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-zinc-300">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {service.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-xs font-semibold text-white"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Work Section */}
        <section className="relative isolate overflow-hidden bg-white">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <Background />

            <div className="relative z-10">
              <section
                id="work"
                className="w-full scroll-mt-20 border-t border-zinc-200 bg-zinc-50/60 py-20 sm:py-28"
              >
                <div className="mx-auto max-w-5xl px-5 sm:px-8">
                  <div className="mb-14 max-w-2xl">
                    <p className="mb-2 text-xs font-bold tracking-wider text-zinc-700 uppercase">
                      Selected Work
                    </p>
                    <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl">
                      Built to solve real problems.
                    </h2>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {work.map((project) => {
                      const Icon = projectIcons[project.glyph];
                      return (
                      <div
                        key={project.name}
                        className="rounded-2xl border border-zinc-200 bg-white/50 p-7 shadow-sm transition-shadow hover:shadow-md"
                      >
                        <div className="flex items-center justify-between text-xs font-bold tracking-wider text-zinc-400">
                          <span>{project.number}</span>
                          <Icon aria-hidden="true" className="size-5 text-zinc-500" strokeWidth={1.8} />
                        </div>
                        <h3 className="mt-5 text-2xl font-bold tracking-tight text-zinc-950">
                          {project.name}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-zinc-600">
                          {project.description}
                        </p>
                        <div className="mt-8 border-t border-zinc-100 pt-4 text-xs font-semibold text-slate-800">
                          {project.stack}
                        </div>
                      </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </section>

        {/* Approach Section */}
        <section
          id="approach"
          className="w-full scroll-mt-20 py-20 sm:py-28 bg-[#70a8c1] bg-gradient-to-r from-red-500 to-orange-500"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <p className="mb-2 text-xs font-bold tracking-wider text-white uppercase">
                    How I Work
                  </p>
                  <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl">
                    Clear thinking. <br />
                    Then good code.
                  </h2>
                </div>
                <div className="space-y-6">
                  {steps.map((step) => (
                    <div
                      key={step.number}
                      className="flex gap-4 border-b border-zinc-200 pb-6 last:border-b-0"
                    >
                      <span className="text-sm font-bold text-white">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-zinc-950">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm text-white">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full scroll-mt-20 bg-slate-200 bg-[url('/rocket.png')] bg-cover bg-center bg-no-repeat px-5 py-16 sm:py-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto max-w-4xl rounded-2xl bg-white/50 p-7 shadow-lg sm:p-10">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-zinc-700">
                Start a conversation
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl">
                What can I help you make?
              </h2>

              <p className="mb-8 mt-4 text-base leading-7 text-zinc-600">
                Tell me what you&apos;re trying to achieve, what isn&apos;t
                working, or where you&apos;re stuck. You don&apos;t need a
                technical brief.
              </p>

              <ContactForm Icon={ArrowUpRight}/>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-200 bg-white py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 text-sm text-zinc-500 sm:px-8">
          <div className="flex items-center gap-2 font-bold text-zinc-950">
            dbwp.pro
          </div>
          <p className="text-xs">Websites with a reason to exist.</p>
          <a
            href="#top"
            className="flex items-center gap-1 font-medium transition-colors hover:text-zinc-950"
          >
            Back to top <ChevronUp className="size-4" />
          </a>
        </div>
      </footer>
    </div>
  );
}
