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
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[number] | null>(null);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-2xl font-bold">
            Lumora<span className="text-purple-400">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm text-gray-300 hover:text-white">
              Services
            </a>
            <a href="#work" className="text-sm text-gray-300 hover:text-white">
              Work
            </a>
            <a href="#about" className="text-sm text-gray-300 hover:text-white">
              About
            </a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-white">
              Contact
            </a>
            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
            >
              Let's Talk
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 px-6 py-6 md:hidden">
            <div className="flex flex-col gap-5">
              <a href="#services" onClick={() => setMenuOpen(false)}>
                Services
              </a>
              <a href="#work" onClick={() => setMenuOpen(false)}>
                Work
              </a>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="relative mx-auto flex min-h-[720px] max-w-6xl flex-col items-center justify-center px-6 text-center">
          <p className="mb-6 text-sm tracking-[0.4em] text-purple-300">
            CREATIVE DIGITAL AGENCY
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight sm:text-6xl md:text-8xl">
            We turn ideas into{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
              powerful brands.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Lumora Creatives helps businesses and startups stand out through
            bold design, powerful branding, engaging content and modern digital
            experiences.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-white px-7 py-4 font-semibold text-black"
            >
              Start a Project →
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/20 px-7 py-4 font-semibold"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-white/10 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm tracking-[0.35em] text-purple-300">
            WHAT WE DO
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-bold md:text-6xl">
            Creative solutions that{" "}
            <span className="text-gray-500">move brands forward.</span>
          </h2>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["01", "Graphic Design", "Visuals that communicate clearly and make brands memorable."],
              ["02", "Brand Identity", "Complete visual identities built for modern businesses."],
              ["03", "Video Editing", "Engaging edits designed for social media and digital campaigns."],
              ["04", "AI Content Creation", "Modern AI-powered creative content for brands."],
              ["05", "Social Media Design", "Scroll-stopping creative systems for social platforms."],
              ["06", "Digital Branding", "Creative digital solutions that help businesses grow."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-purple-400/40"
              >
                <span className="text-sm text-purple-300">{number}</span>
                <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" className="border-t border-white/10 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm tracking-[0.35em] text-purple-300">
                SELECTED WORK
              </p>

              <h2 className="mt-5 text-4xl font-bold md:text-6xl">
                Ideas made <span className="text-gray-500">visible.</span>
              </h2>
            </div>

            <p className="max-w-md leading-7 text-gray-400">
              A glimpse of the creative direction we bring to brands,
              businesses and startups.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <button
                key={project.name}
                onClick={() => setSelectedProject(project)}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] text-left transition hover:-translate-y-1 hover:border-purple-400/40"
              >
                <div className="aspect-[16/10] overflow-hidden bg-white/5">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <p className="text-sm text-purple-300">{project.category}</p>

                  <div className="mt-3 flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold">
                      {project.name} — {project.title}
                    </h3>

                    <span className="text-2xl text-gray-400 transition group-hover:text-white">
                      →
                    </span>
                  </div>

                  <p className="mt-3 leading-7 text-gray-400">
                    {project.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/10 py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm tracking-[0.35em] text-purple-300">
              ABOUT LUMORA
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-6xl">
              Creativity with <span className="text-gray-500">purpose.</span>
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

      {/* CONTACT */}
      <section id="contact" className="px-6 py-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-950/60 via-black to-pink-950/40 p-10 text-center md:p-20">
          <p className="text-sm tracking-[0.35em] text-purple-300">
            LET'S CREATE
          </p>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            Have an idea?
            <br />
            Let's make it real.
          </h2>

            <a
  href="https://wa.me/918857072103?text=Hi%20Lumora%20Creatives%2C%20I%20would%20like%20to%20discuss%20a%20project."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-semibold text-black"
>
  Start a Conversation →
</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Lumora Creatives. All rights reserved.
          </p>
          <p>Design · Brand · Digital · AI</p>
        </div>
      </footer>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="mx-auto my-10 max-w-5xl rounded-3xl border border-white/10 bg-[#0b0b0b] p-5 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm text-purple-300">
                  {selectedProject.category}
                </p>

                <h2 className="mt-2 text-3xl font-bold md:text-5xl">
                  {selectedProject.name}
                </h2>

                <p className="mt-2 text-gray-400">
                  {selectedProject.title}
                </p>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-full border border-white/10 px-4 py-2 text-xl text-gray-300 hover:text-white"
              >
                ×
              </button>
            </div>

            <p className="mt-6 max-w-3xl leading-7 text-gray-400">
              {selectedProject.description}
            </p>

            <div className="mt-8 grid gap-5">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full rounded-2xl"
              />

              {selectedProject.images.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt={`${selectedProject.name} project`}
                  className="w-full rounded-2xl"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}