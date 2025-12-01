"use client";

import { useLanguageStore } from "@/lib/langstore";
import translations from "@/lib/translation";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const { language } = useLanguageStore();
  const t = translations[language].PrivacyPolicy;

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background text-foreground">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max Diver max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-12">
            {t.title}
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-foreground/90">
            <p className="text-center text-gray-600 dark:text-gray-400">
              {t.lastUpdated}
            </p>

            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}>
              <h2 className="text-3xl font-bold mb-4">{t.section1.title}</h2>
              <p>{t.section1.content}</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}>
              <h2 className="text-3xl font-bold mb-4">{t.section2.title}</h2>
              <ul className="space-y-2">
                {t.section2.list.map((item: string, i: number) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}>
              <h2 className="text-3xl font-bold mb-4">{t.section3.title}</h2>
              <p>{t.section3.intro}</p>
              <ul className="space-y-2">
                {t.section3.list.map((item: string, i: number) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}>
              <h2 className="text-3xl font-bold mb-4">{t.section4.title}</h2>
              <p>{t.section4.content}</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center pt-10">
              <p className="text-lg">{t.contact.question}</p>
              <a
                href="mailto:info@lyschorrealestate.ae"
                className="text-2xl font-bold text-amber-500 hover:text-amber-400 transition">
                info@lyschorrealestate.ae
              </a>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
