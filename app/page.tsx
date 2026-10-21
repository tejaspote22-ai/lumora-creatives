"use client";

import { useState } from "react";

const projects = [
  {
    name: "AURA",
    title: "Coffee House",
    category: "Brand Identity · Social Media",
    description:
      "A warm and sophisticated visual identity created for a modern coffee house.",
    image: "/portfolio/aura/brand-presentation.png",
    images: [
      "/portfolio/aura/aura-instagram.png",
      "/portfolio/aura/logo-board.png",
      "/portfolio/aura/logo.png",
    ],
  },
  {
    name: "VYBE",
    title: "Move Different",
    category: "Streetwear · Sneaker Campaign",
    description:
      "A bold streetwear campaign built around movement, attitude and individuality.",
    image: "/portfolio/vybe/hero-poster.png",
    images: ["/portfolio/vybe/instagram-campaign.png"],
  },
  {
    name: "NEXA",
    title: "Build What's Next",
    category: "Technology · AI Branding",
    description:
      "A futuristic identity system designed for a next-generation technology brand.",
    image: "/portfolio/nexa/brand-identity.png",
    images: [],
  },
  {
    name: "FUEL",
    title: "Nutrition for Performance",
    category: "Fitness · Sports Nutrition",
    description:
      "A powerful fitness identity focused on energy, performance and determination.",
    image: "/portfolio/fuel/brand-identity.png",
    images: [],
  },
  {
    name: "NOVA",
    title: "Pure Care. Natural Glow.",
    category: "Beauty · Skincare Branding",
    description:
      "A premium skincare identity built around purity, confidence and natural beauty.",
    image: "/portfolio/nova/brand-identity.png",
    images: [],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-xl font-bold tracking-tight">
            Lumora<span className="text-purple-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#services"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              Services
            </a>
            <a
              href="#work"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              Contact
            </a>

            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-105"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
            aria-label="Open menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
            <div className="flex flex-col gap-5">
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300"
              >
                Services
              </a>

              <a
                href="#work"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300"
              >
                Work
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300"
              >
                Contact
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="w-fit rounded-full bg-white px-5 py-3 font-semibold text-black"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />

        <div className="relative mx-auto w-full max-w-7xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            Creative Digital Agency
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-8xl">
            We turn ideas into
            <span className="block bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent">
              powerful brands.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Lumora Creatives helps ambitious brands stand out through
            strategic design, compelling visuals and digital experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:scale-105"
            >
              Explore Our Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-4 font-semibold transition hover:bg-white hover:text-black"
            >
              Start a Project
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.25em] text-purple-400">
            What we do
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Creative solutions
            <br />
            built to move brands.
          </h2>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["01", "Graphic Design", "Visuals that communicate clearly and look unforgettable."],
              ["02", "Brand Identity", "Complete visual systems that give brands a distinct personality."],
              ["03", "Video Editing", "Engaging video content designed for modern digital platforms."],
              ["04", "AI Content Creation", "AI-powered visuals and creative content for faster production."],
              ["05", "Social Media Design", "Scroll-stopping content designed for social platforms."],
              ["06", "Digital Branding", "Creative digital experiences that connect brands with audiences."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-white/[0.06]"
              >
                <span className="text-sm text-purple-400">{number}</span>

                <h3 className="mt-12 text-2xl font-semibold">{title}</h3>

                <p className="mt-4 leading-7 text-gray-400">{text}</p>

                <div className="mt-8 text-purple-400 transition group-hover:translate-x-2">
                  →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-purple-400">
                Selected Work
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-6xl">
                Brands we imagined.
              </h2>
            </div>

            <p className="max-w-md text-gray-400">
              A selection of self-initiated creative projects created to
              explore different industries, visual styles and brand worlds.
            </p>
          </div>

          {/* PROJECTS */}
          <div className="mt-20 space-y-24">
            {projects.map((project, index) => (
              <article key={project.name} className="group">
                {/* Main Project Image */}
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
                  <img
                    src={project.image}
                    alt={`${project.name} ${project.title}`}
                    className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Project Info */}
                <div className="mt-8 grid gap-6 md:grid-cols-[1fr_2fr]">
                  <div>
                    <p className="text-sm text-purple-400">
                      0{index + 1} / {project.category}
                    </p>

                    <h3 className="mt-3 text-4xl font-bold md:text-5xl">
                      {project.name}
                    </h3>

                    <p className="mt-2 text-xl text-gray-300">
                      {project.title}
                    </p>
                  </div>

                  <div className="max-w-xl md:ml-auto">
                    <p className="leading-7 text-gray-400">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Additional Project Images */}
                {project.images.length > 0 && (
                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    {project.images.map((image) => (
                      <div
                        key={image}
                        className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
                      >
                        <img
                          src={image}
                          alt={`${project.name} project`}
                          className="h-auto w-full object-cover transition duration-500 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-purple-400">
                About Lumora
              </p>

              <h2 className="mt-5 text-4xl font-bold md:text-6xl">
                Creativity with
                <span className="text-purple-400"> purpose.</span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-gray-400">
                Lumora Creatives is a modern creative agency focused on
                building memorable visual identities and digital content for
                ambitious businesses, startups and brands.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                From brand identity and social media design to video editing
                and AI-powered content creation, we bring strategy and
                creativity together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-purple-700/40 via-purple-900/20 to-white/[0.03] px-8 py-20 text-center md:px-16">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-500/20 blur-[100px]" />

          <div className="relative">
            <p className="text-sm uppercase tracking-[0.25em] text-purple-300">
              Let&apos;s work together
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold md:text-6xl">
              Let&apos;s create something remarkable.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-gray-400">
              Have a brand, campaign or creative project in mind? Let&apos;s
              turn your idea into something people remember.
            </p>

            <a
              href="mailto:hello@lumoracreatives.com"
              className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              hello@lumoracreatives.com
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Lumora Creatives. All rights
            reserved.
          </p>

          <p>
            Designed with creativity<span className="text-purple-400">.</span>
          </p>
        </div>
      </footer>
    </main>
  );
}