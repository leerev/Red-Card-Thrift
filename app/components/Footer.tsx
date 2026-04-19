import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-navy-border px-6 lg:px-16 py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-3 text-center">
        <div className="flex items-baseline gap-2">
          <span className="font-heading font-bold text-brand-red text-lg tracking-wider uppercase">
            RED CARD
          </span>
          <span className="font-heading font-medium text-white text-sm tracking-widest uppercase">
            THRIFT SPORTS EQUIPMENT
          </span>
        </div>
        <p className="text-white/40 text-sm font-heading tracking-wider">
          Get back in the game — for less.
        </p>
        <div className="flex gap-6 mt-2 text-white/40 text-xs font-heading tracking-widest">
          <Link href="/shop" className="hover:text-white transition-colors">
            SHOP
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            ABOUT
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            CONTACT
          </Link>
        </div>
        <p className="text-white/25 text-xs mt-4">
          © 2025 Red Card Thrift Sports Equipment · Aurora, Colorado · All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
