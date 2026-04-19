import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { SPORTS_META, getListingsBySport, type Condition } from "../../data/listings";
// SPORTS_META used for generateStaticParams + meta only

const CONDITION_STYLES: Record<Condition, string> = {
  "LIKE NEW": "text-green-400 border-green-400/30 bg-green-400/10",
  GOOD: "text-white/70 border-white/20 bg-white/5",
  FAIR: "text-amber-400 border-amber-400/30 bg-amber-400/10",
};

export function generateStaticParams() {
  return Object.keys(SPORTS_META).map((slug) => ({ sport: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sport: string }>;
}) {
  const { sport } = await params;
  const meta = SPORTS_META[sport];
  if (!meta) return {};
  return {
    title: `${meta.label} — Red Card Thrift`,
    description: `Used ${meta.label.toLowerCase()} equipment. Cleaned, inspected, priced fair.`,
  };
}

export default async function SportPage({
  params,
}: {
  params: Promise<{ sport: string }>;
}) {
  const { sport } = await params;
  const meta = SPORTS_META[sport];
  if (!meta) notFound();

  const listings = getListingsBySport(sport);

  return (
    <>
      <Navbar />
      <main className="bg-navy min-h-screen">
        {/* Header */}
        <div className="border-b border-navy-border px-6 lg:px-16 py-14">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/shop"
              className="font-heading text-xs tracking-widest text-white/40 hover:text-white transition-colors inline-flex items-center gap-2 mb-6"
            >
              ← ALL SPORTS
            </Link>
            <div className="flex items-center gap-5">
              <span className="text-5xl">{meta.emoji}</span>
              <div>
                <h1 className="font-heading font-bold text-6xl uppercase">
                  {meta.label}
                </h1>
                <p className="text-white/40 text-sm mt-1">{meta.itemTypes}</p>
              </div>
            </div>
            <p className="text-white/55 mt-4 max-w-lg">
              {listings.length} item{listings.length !== 1 ? "s" : ""} available
              right now. All cleaned and inspected. Email or text to buy.
            </p>
          </div>
        </div>

        {/* Listings grid */}
        <div className="px-6 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="bg-navy-card border border-navy-border flex flex-col"
              >
                {/* Placeholder image */}
                <div className="aspect-square bg-navy-border/40 flex items-center justify-center border-b border-navy-border">
                  <span className="text-6xl opacity-30">{meta.emoji}</span>
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  {/* Condition + price row */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-heading text-[10px] tracking-widest border px-2 py-0.5 ${CONDITION_STYLES[listing.condition]}`}
                    >
                      {listing.condition}
                    </span>
                    <span className="font-heading font-bold text-xl">
                      ${listing.price}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="font-heading font-bold tracking-wide text-sm leading-snug">
                    {listing.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/45 text-xs leading-relaxed flex-1">
                    {listing.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={`mailto:hudsonashweiner@gmail.com?subject=Buying: ${encodeURIComponent(listing.name)}&body=Hi, I'd like to buy the ${encodeURIComponent(listing.name)} listed for $${listing.price}.`}
                    className="mt-2 border border-brand-red text-brand-red font-heading text-xs tracking-widest px-4 py-2.5 text-center hover:bg-brand-red hover:text-white transition-colors"
                  >
                    EMAIL TO BUY
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
