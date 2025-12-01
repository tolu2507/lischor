"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/langstore";
import translations from "@/lib/translation";

export default function TermsOfUse() {
  const { language } = useLanguageStore();
  // const t = translations[language].TermsOfUse || translations.en.TermsOfUse; // fallback

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background text-foreground">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-12">
            Terms of Use
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-foreground/90">
            <p className="text-center text-gray-600 dark:text-gray-400">
              Effective: December 2025
            </p>
            <p>By using this website, you agree to these terms...</p>
            {/* Add full terms later */}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
