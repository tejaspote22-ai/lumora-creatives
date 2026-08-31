"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-8">
        <a href="#" className="text-2xl font-bold tracking-tight">
          Lumora<span className="text-purple-400">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <a href="#services" className="transition hover:text-white">
            Services
          </a>
          <a href="#work" className="transition hover:text-white">
            Work
          </a>
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200 md:block"
        >
          Let&apos;s Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 px-3 py-2 text-xl md:hidden"
          aria-label="Open menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mx-6 mb-6 rounded-2xl border border-white/10 bg-white/[0.05] p-6 md:hidden">
          <div className="flex flex-col gap-5 text-gray-300">
            <a
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white"
            >
              Services
            </a>

            <a
              href="#work"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white"
            >
              Work
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-white px-5 py-3 text-center font-semibold text-black"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-purple-300">
            Creative Digital Agency
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            We turn ideas into
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
              powerful brands.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Lumora Creatives helps businesses and startups stand out through
            bold design, powerful branding, engaging content and modern
            digital experiences.
          </p>

          <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-white px-7 py-3.5 font-semibold text-black transition hover:scale-105"
            >
              Start a Project →
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-purple-300">
            What we do
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Creative solutions that
            <span className="text-gray-500"> move brands forward.</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              number: "01",
              title: "Graphic Design",
              text: "Modern and memorable visual designs for your brand.",
            },
            {
              number: "02",
              title: "Brand Identity",
              text: "Complete brand identities that build recognition and trust.",
            },
            {
              number: "03",
              title: "Video Editing",
              text: "High-quality video content designed to capture attention.",
            },
            {
              number: "04",
              title: "AI Content Creation",
              text: "Next-generation AI powered visuals and creative content.",
            },
            {
              number: "05",
              title: "Social Media Design",
              text: "Scroll-stopping content built for modern social platforms.",
            },
            {
              number: "06",
              title: "Digital Branding",
              text: "Creative digital solutions that make your business stand out.",
            },
          ].map((service) => (
            <div
              key={service.number}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/[0.06]"
            >
              <span className="text-sm text-purple-300">
                {service.number}
              </span>

              <h3 className="mt-8 text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section
        id="work"
        className="border-y border-white/10 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-purple-300">
            Selected work
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-4xl font-bold md:text-5xl">
              Ideas made
              <span className="text-gray-500"> visible.</span>
            </h2>

            <p className="max-w-md text-gray-400">
              A glimpse of the creative direction we bring to brands,
              businesses and startups.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <div className="flex min-h-72 items-end rounded-3xl bg-gradient-to-br from-purple-700 via-purple-500 to-pink-500 p-8">
              <div>
                <p className="text-sm text-white/70">Brand Identity</p>
                <h3 className="mt-2 text-3xl font-bold">Future Brands</h3>
              </div>
            </div>

            <div className="flex min-h-72 items-end rounded-3xl bg-gradient-to-br from-slate-800 to-slate-950 p-8">
              <div>
                <p className="text-sm text-white/60">Social Media</p>
                <h3 className="mt-2 text-3xl font-bold">Digital Stories</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-purple-300">
              About Lumora
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Creativity with
              <span className="text-gray-500"> purpose.</span>
            </h2>
          </div>

          <p className="text-lg leading-8 text-gray-400">
            We believe great design is more than looking beautiful. It should
            communicate, connect and create impact. Lumora Creatives combines
            design, technology and AI to help ambitious brands grow in the
            digital world.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-purple-700 to-pink-600 px-8 py-20 text-center md:px-16">
          <p className="text-sm uppercase tracking-[0.25em] text-white/70">
            Have a project in mind?
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold md:text-6xl">
            Let&apos;s create something remarkable.
          </h2>

          <a
            href="mailto:hello@lumoracreatives.com"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            hello@lumoracreatives.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>© 2026 Lumora Creatives. All rights reserved.</p>
          <p>Creative. Innovative. Digital.</p>
        </div>
      </footer>
    </main>
  );
}