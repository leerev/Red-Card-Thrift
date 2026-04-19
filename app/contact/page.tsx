import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ContactForm } from "./ContactForms";

export const metadata = {
  title: "Contact — Red Card Thrift",
  description: "Get in touch with Red Card Thrift. We answer all inquiries within 24 hours of receipt.",
};

const EMAIL = "hudsonashweiner@gmail.com";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-navy min-h-screen">
        {/* Header */}
        <div className="border-b border-navy-border px-6 lg:px-16 py-16">
          <div className="max-w-5xl mx-auto">
            <p className="font-heading text-xs tracking-[0.3em] text-brand-red font-medium mb-2">
              GET IN TOUCH
            </p>
            <h1 className="font-heading font-bold text-6xl lg:text-7xl uppercase leading-tight mb-4">
              CONTACT US
            </h1>
            <p className="text-white/55 max-w-lg">
              We answer all inquiries within 24 hours of receipt.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="px-6 lg:px-16 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-navy-card border border-navy-border p-8 md:p-10">
              <ContactForm />
            </div>

            {/* Direct email */}
            <div className="mt-10 border-t border-navy-border pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-heading text-xs tracking-[0.3em] text-white/30 mb-1">
                  OR EMAIL US DIRECTLY
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-heading font-medium text-white hover:text-brand-red transition-colors"
                >
                  {EMAIL}
                </a>
              </div>
              <p className="text-white/30 text-sm">Aurora, Colorado</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
