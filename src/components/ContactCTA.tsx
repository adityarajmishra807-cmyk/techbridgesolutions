import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/contact";

interface ContactCTAProps {
  subject: string;
  message: string;
}

const ContactCTA = ({ subject, message }: ContactCTAProps) => (
  <section className="section-padding bg-secondary text-secondary-foreground">
    <div className="container-narrow">
      <div className="mx-auto max-w-3xl rounded-2xl border border-secondary-foreground/10 bg-secondary-foreground/[0.04] p-6 sm:p-10 text-center">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-primary">Discuss your project</span>
        <h2 className="mb-4 font-display text-2xl font-bold sm:text-3xl">Planning a {subject}?</h2>
        <p className="mx-auto mb-7 max-w-2xl font-body leading-relaxed text-secondary-foreground/65">
          Share your school name, location, classes, room details and approximate student capacity. TechBridge can help you scope the requirements and prepare a project-specific quotation.
        </p>
        <a
          href={getWhatsAppUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-body text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
        >
          <MessageCircle className="h-5 w-5" />
          Request a quotation on WhatsApp
        </a>
        <p className="mt-4 font-body text-xs text-secondary-foreground/45">No commitment. Start with your requirements and questions.</p>
      </div>
    </div>
  </section>
);

export default ContactCTA;
