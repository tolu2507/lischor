"use client";

import Link from "next/link";
import { Phone, MessageCircle, Mail, Linkedin, MapPin } from "lucide-react";
import { useLanguageStore } from "@/lib/langstore";
import translations from "@/lib/translation";

export default function Footer() {
  const { language } = useLanguageStore();
  const t = translations[language].Footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/10 dark:border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/">
              <h3 className="text-2xl font-bold text-amber-500 mb-4">
                Lyschor Real Estate LLC
              </h3>
            </Link>
            <p className="text-foreground/70 leading-relaxed">
              {t.description.line1}
              <br />
              {t.description.line2}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">
              {t.quickLinks.title}
            </h4>
            <ul className="space-y-3 text-foreground/70">
              <li>
                <Link
                  href="/freelance"
                  className="hover:text-amber-500 transition">
                  {t.quickLinks.freelance}
                </Link>
              </li>
              <li>
                <Link
                  href="#properties"
                  className="hover:text-amber-500 transition">
                  {t.quickLinks.properties}
                </Link>
              </li>
              <li>
                <Link
                  href="#rub-payment"
                  className="hover:text-amber-500 transition">
                  {t.quickLinks.rub}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-amber-500 transition">
                  {t.quickLinks.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">
              {t.contact.title}
            </h4>
            <div className="space-y-4 text-foreground/70">
              <a
                href="tel:+971..."
                className="flex items-center gap-3 hover:text-amber-500 transition">
                <Phone className="w-5 h-5" />
                <span>+971 ...</span>
              </a>
              <a
                href="https://t.me/..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-amber-500 transition">
                <MessageCircle className="w-5 h-5" />
                <span>Telegram</span>
              </a>
              <a
                href="mailto:info@lyschorrealestate.ae"
                className="flex items-center gap-3 hover:text-amber-500 transition">
                <Mail className="w-5 h-5" />
                <span>info@lyschorrealestate.ae</span>
              </a>
              <a
                href="https://linkedin.com/company/..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-amber-500 transition">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">
              {t.offices.title}
            </h4>
            <div className="space-y-6 text-foreground/70">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">{t.offices.dubai.city}</p>
                  <p className="text-sm">{t.offices.dubai.address}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">{t.offices.russia.cities}</p>
                  <p className="text-sm">{t.offices.russia.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-foreground/60">
          <p>
            © {currentYear} Lyschor Real Estate LLC. {t.copyright}
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <Link
              href="/privacy-policy"
              className="hover:text-amber-500 transition">
              {t.legal.privacy}
            </Link>
            <Link
              href="/terms-of-use"
              className="hover:text-amber-500 transition">
              {t.legal.terms}
            </Link>
            <Link href="/documents" className="hover:text-amber-500 transition">
              {t.legal.documents}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
