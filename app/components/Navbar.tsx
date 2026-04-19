import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-navy border-b border-navy-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-heading font-bold text-brand-red text-lg tracking-wider uppercase">
            RED CARD
          </span>
          <span className="font-heading font-medium text-white text-xs tracking-[0.3em] uppercase">
            THRIFT
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "HOME", href: "/" },
            { label: "SHOP", href: "/shop" },
            { label: "ABOUT", href: "/about" },
            { label: "CONTACT", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-sm text-white/70 tracking-widest hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/shop"
          className="bg-brand-red text-white font-heading font-medium text-sm tracking-widest px-6 py-2.5 uppercase hover:bg-red-700 transition-colors"
        >
          BROWSE
        </Link>
      </div>
    </nav>
  );
}
