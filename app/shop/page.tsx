import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getSportsBySeason } from "../data/listings";

export const metadata = {
  title: "Shop — Red Card Thrift",
  description: "Browse used sports equipment by sport.",
};

export default function ShopPage() {
  const summerSports = getSportsBySeason("summer");
  const winterSports = getSportsBySeason("winter");

  return (
    <>
      <Navbar />
      <main className="bg-navy min-h-screen px-6 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="font-heading text-xs tracking-[0.3em] text-brand-red font-medium mb-2">
            BROWSE THE SHOP
          </p>
          <h1 className="font-heading font-bold text-6xl uppercase mb-12">
            PICK A SPORT
          </h1>

          {/* Summer */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span>☀️</span>
              <span className="font-heading text-xs tracking-[0.3em] text-white/40">
                SUMMER SPORTS
              </span>
              <div className="flex-1 h-px bg-navy-border" />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
              {summerSports.map(([slug, sport]) => (
                <Link
                  key={slug}
                  href={`/shop/${slug}`}
                  className="group flex flex-col items-center gap-2 border border-navy-border bg-navy-card p-4 hover:border-brand-red transition-colors"
                >
                  <span className="text-3xl">{sport.emoji}</span>
                  <span className="font-heading text-[10px] tracking-widest text-white/50 text-center group-hover:text-white transition-colors leading-tight">
                    {sport.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Winter */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span>❄️</span>
              <span className="font-heading text-xs tracking-[0.3em] text-white/40">
                WINTER SPORTS
              </span>
              <div className="flex-1 h-px bg-navy-border" />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
              {winterSports.map(([slug, sport]) => (
                <Link
                  key={slug}
                  href={`/shop/${slug}`}
                  className="group flex flex-col items-center gap-2 border border-navy-border bg-navy-card p-4 hover:border-brand-red transition-colors"
                >
                  <span className="text-3xl">{sport.emoji}</span>
                  <span className="font-heading text-[10px] tracking-widest text-white/50 text-center group-hover:text-white transition-colors leading-tight">
                    {sport.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
