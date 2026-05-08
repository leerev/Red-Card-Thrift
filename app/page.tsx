import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SPORTS_META, LISTINGS, getSportsBySeason } from "./data/listings";

const summerSports = getSportsBySeason("summer");
const winterSports = getSportsBySeason("winter");

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="bg-navy px-6 lg:px-16 py-20 min-h-[calc(100vh-64px)] flex items-center">
          <div className="max-w-7xl mx-auto w-full space-y-10">
            {/* Top row: heading + logo */}
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">
              <div className="space-y-8">
                <h1 className="font-heading font-bold text-7xl md:text-8xl lg:text-9xl uppercase leading-none tracking-tight">
                  GET BACK
                  <br />
                  IN THE <span className="text-brand-red">GAME</span>
                </h1>
                <p className="text-white/65 text-lg max-w-md leading-relaxed">
                  We find used sports equipment, clean it up, and sell it at
                  fair prices — so every kid can play, no matter what.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/shop"
                    className="border border-white/40 text-white font-heading font-medium text-sm tracking-widest px-8 py-3 uppercase hover:bg-white hover:text-navy transition-colors"
                  >
                    SHOP NOW
                  </Link>
                </div>
              </div>

              {/* Logo */}
              <div className="relative w-full aspect-[4/3] lg:pl-8">
                <Image
                  src="/logo.png"
                  alt="Red Card Thrift"
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Bottom row: icons + quote — naturally aligned */}
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-start">
              {/* Icons */}
              <div className="space-y-3">
                <p className="font-heading text-[10px] tracking-[0.3em] text-white/30">
                  ☀️ SUMMER
                </p>
                <div className="flex flex-wrap gap-3">
                  {summerSports.map(([slug, sport]) => (
                    <Link
                      key={slug}
                      href={`/shop/${slug}`}
                      className="flex flex-col items-center gap-1 group"
                    >
                      <div className="w-11 h-11 border border-white/20 bg-white/5 flex items-center justify-center text-xl group-hover:border-brand-red transition-colors">
                        {sport.emoji}
                      </div>
                      <span className="font-heading text-[9px] text-white/35 tracking-widest group-hover:text-white transition-colors">
                        {sport.label.split(" ")[0]}
                      </span>
                    </Link>
                  ))}
                </div>
                <p className="font-heading text-[10px] tracking-[0.3em] text-white/30 pt-1">
                  ❄️ WINTER
                </p>
                <div className="flex flex-wrap gap-3">
                  {winterSports.map(([slug, sport]) => (
                    <Link
                      key={slug}
                      href={`/shop/${slug}`}
                      className="flex flex-col items-center gap-1 group"
                    >
                      <div className="w-11 h-11 border border-white/20 bg-white/5 flex items-center justify-center text-xl group-hover:border-brand-red transition-colors">
                        {sport.emoji}
                      </div>
                      <span className="font-heading text-[9px] text-white/35 tracking-widest group-hover:text-white transition-colors">
                        {sport.label.split(" ")[0]}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="bg-navy-card border border-navy-border p-6 lg:ml-8 mt-5">
                <p className="font-heading text-xs tracking-[0.25em] text-brand-red font-medium mb-3">
                  PELÉ SAID IT BEST
                </p>
                <blockquote className="font-heading font-medium text-xl leading-snug text-white">
                  &ldquo;Success is no accident.&rdquo;
                </blockquote>
                <cite className="block mt-3 font-heading text-sm tracking-widest text-brand-red not-italic">
                  — PELÉ
                </cite>
              </div>
            </div>
          </div>
        </section>

        {/* ── Shop by Sport ────────────────────────────────────── */}
        <section className="bg-navy px-6 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="font-heading text-xs tracking-[0.3em] text-brand-red font-medium mb-2">
                BROWSE THE SHOP
              </p>
              <h2 className="font-heading font-bold text-5xl uppercase">
                SHOP BY SPORT
              </h2>
              <p className="text-white/55 mt-3 max-w-lg">
                {Object.keys(SPORTS_META).length} sports. All cleaned up and
                priced right. Filter by sport to find exactly what you need.
              </p>
            </div>

            {/* Summer */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-lg">☀️</span>
                <span className="font-heading font-bold text-sm tracking-widest text-white/50">
                  SUMMER SPORTS
                </span>
                <div className="flex-1 h-px bg-navy-border" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {summerSports.map(([slug, sport]) => {
                  const count = LISTINGS.filter((l) => l.sport === slug).length;
                  return (
                    <Link
                      key={slug}
                      href={`/shop/${slug}`}
                      className="group bg-navy-card border border-navy-border p-4 flex flex-col gap-3 hover:border-brand-red transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-2xl">{sport.emoji}</span>
                        <span className="font-heading text-xs text-white/20 group-hover:text-brand-red transition-colors">
                          {count}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-sm tracking-widest">
                          {sport.label}
                        </h3>
                        <p className="text-white/35 text-xs mt-0.5">
                          {sport.itemTypes}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Winter */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-lg">❄️</span>
                <span className="font-heading font-bold text-sm tracking-widest text-white/50">
                  WINTER SPORTS
                </span>
                <div className="flex-1 h-px bg-navy-border" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {winterSports.map(([slug, sport]) => {
                  const count = LISTINGS.filter((l) => l.sport === slug).length;
                  return (
                    <Link
                      key={slug}
                      href={`/shop/${slug}`}
                      className="group bg-navy-card border border-navy-border p-4 flex flex-col gap-3 hover:border-brand-red transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-2xl">{sport.emoji}</span>
                        <span className="font-heading text-xs text-white/20 group-hover:text-brand-red transition-colors">
                          {count}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-sm tracking-widest">
                          {sport.label}
                        </h3>
                        <p className="text-white/35 text-xs mt-0.5">
                          {sport.itemTypes}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="bg-brand-red px-6 lg:px-16 py-20 text-center">
          <h2 className="font-heading font-bold text-5xl uppercase mb-4">
            READY TO GET BACK IN THE GAME?
          </h2>
          <p className="text-white/80 mb-8">
            Email us and Hudson will get back to you within 24 hours.
          </p>
          <a
            href="mailto:hudsonashweiner@gmail.com"
            className="inline-block bg-navy border border-white/20 text-white font-heading text-sm tracking-widest px-8 py-4 hover:bg-navy-card transition-colors"
          >
            hudsonashweiner@gmail.com
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
