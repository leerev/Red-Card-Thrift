import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "About Us — Red Card Thrift",
  description: "Three 10-year-olds from Aurora, Colorado who turned a class project into a real business.",
};

const founders = [
  {
    photo: "/Hudson.jpg",
    name: "HUDSON WEINER",
    role: "ADVERTISING & BRANDING",
    emoji: "⚽",
    bio: "Hudson is the face of Red Card Thrift. He handles everything you see — the brand, the marketing, the message. A soccer player at heart, Hudson doesn't see any of it as work. It's just fun. He came up with the idea and hasn't slowed down since.",
    fact: "Loves soccer · Work is fun, not work",
  },
  {
    photo: "/Roque.jpg",
    name: "ROQUE HENDRICKSON",
    role: "OPERATIONS & SALES",
    emoji: "🏆",
    bio: "Roque keeps the business moving. He's a natural at ops and sales, and a sports lover through and through. That's what makes him the kind of teammate and business partner you actually want in your corner.",
    fact: "Loves all sports · Great supporter on and off the field",
  },
  {
    photo: "/Henry.jpg",
    name: "HENRY LOEWEN",
    role: "FINANCE",
    emoji: "🏈",
    bio: "Henry handles the money. Every dollar that comes in or goes out goes through him, and he wouldn't have it any other way. Gifted in math, Henry makes sure Red Card Thrift stays profitable and priced right. Off the books, he's a football guy.",
    fact: "Gifted in math · Football fan",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-navy min-h-screen">
        {/* Header */}
        <div className="border-b border-navy-border px-6 lg:px-16 py-16">
          <div className="max-w-5xl mx-auto">
            <p className="font-heading text-xs tracking-[0.3em] text-brand-red font-medium mb-2">
              ABOUT US
            </p>
            <h1 className="font-heading font-bold text-6xl lg:text-7xl uppercase leading-tight mb-6">
              THREE 10-YEAR-OLDS WHO MEAN BUSINESS
            </h1>
            <blockquote className="border-l-4 border-brand-red pl-6 max-w-2xl">
              <p className="font-heading font-medium text-2xl leading-snug italic">
                "If we're doing this now, just imagine where we'll be in a few years."
              </p>
              <cite className="block mt-3 font-heading text-xs tracking-widest text-brand-red not-italic">
                — HUDSON WEINER
              </cite>
            </blockquote>
          </div>
        </div>

        {/* Origin story */}
        <div className="border-b border-navy-border px-6 lg:px-16 py-14">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-heading text-xs tracking-[0.3em] text-brand-red font-medium mb-3">
                HOW IT STARTED
              </p>
              <h2 className="font-heading font-bold text-4xl uppercase mb-5 leading-tight">
                A CLASS PROJECT THAT GOT REAL
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                Red Card Thrift started as a school project. Three friends looked around and noticed the same problem — sports equipment is expensive, and a lot of good gear just sits in garages collecting dust after one season.
              </p>
              <p className="text-white/60 leading-relaxed">
                So they built a solution. They find used gear, clean it up, inspect it personally, and sell it at prices that actually make sense. Every kid should be able to play, no matter what their parents make. That's the whole point.
              </p>
            </div>
            <div className="bg-navy-card border border-navy-border p-8">
              <div className="font-heading font-bold text-7xl text-brand-red leading-none mb-2">
                3
              </div>
              <p className="font-heading text-sm tracking-widest text-white/50 mb-6">
                FOUNDERS · AURORA, COLORADO
              </p>
              <div className="space-y-2">
                {["Every item personally inspected", "Cleaned before it's listed", "Priced lower than anywhere else", "Ships UPS to your door"].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                    <span className="text-white/60 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Founder bios */}
        <div className="px-6 lg:px-16 py-16">
          <div className="max-w-5xl mx-auto">
            <p className="font-heading text-xs tracking-[0.3em] text-brand-red font-medium mb-2">
              MEET THE TEAM
            </p>
            <h2 className="font-heading font-bold text-4xl uppercase mb-10">
              THE FOUNDERS
            </h2>

            <div className="space-y-5">
              {founders.map((founder) => (
                <div
                  key={founder.name}
                  className="bg-navy-card border border-navy-border p-8 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start"
                >
                  {/* Photo + name */}
                  <div className="flex md:flex-col items-center md:items-start gap-5 md:gap-3 md:w-44">
                    <div className="relative w-28 h-32 md:w-44 md:h-52 shrink-0 overflow-hidden border-2 border-brand-red">
                      <Image
                        src={founder.photo}
                        alt={founder.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 112px, 176px"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold tracking-widest text-sm">
                        {founder.name}
                      </h3>
                      <p className="font-heading text-[10px] tracking-widest text-brand-red mt-0.5">
                        {founder.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="space-y-4">
                    <p className="text-white/70 leading-relaxed">
                      {founder.bio}
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-base">{founder.emoji}</span>
                      <span className="font-heading text-[10px] tracking-widest text-white/30">
                        {founder.fact}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-red px-6 lg:px-16 py-16 text-center">
          <h2 className="font-heading font-bold text-4xl uppercase mb-4">
            WANT TO WORK WITH US?
          </h2>
          <p className="text-white/80 mb-8">
            Have gear to donate, sell, or trade? We're always looking for good stuff.
          </p>
          <a
            href="mailto:hudsonashweiner@gmail.com"
            className="inline-block bg-navy border border-white/20 text-white font-heading text-sm tracking-widest px-8 py-4 hover:bg-navy-card transition-colors"
          >
            hudsonashweiner@gmail.com
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
