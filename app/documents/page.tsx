"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/langstore";
import translations from "@/lib/translation";
import Link from "next/link";

export default function Documents() {
  const { language } = useLanguageStore();
  const t = translations[language].Documents;

  const docs = [
    { name: t.list.buyingSelling, id: "RERA ORN: 12345" },
    { name: t.list.leasing, id: "RERA ORN: 12345" },
    { name: t.list.tradeLicense, id: "No. 987654" },
    { name: t.list.escrowTemplate, id: t.list.availableOnRequest },
    { name: t.list.certificate, id: t.list.dubaiRegistry },
    { name: t.list.affiliation, id: t.list.officialDocument },
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background text-foreground">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {docs.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-white/10 rounded-3xl p-8 text-center hover:border-amber-500/50 transition-all duration-500 shadow-xl group">
              <div className="bg-gray-200 dark:bg-gray-800 border-2 border-dashed border-gray-400 dark:border-gray-700 rounded-2xl w-full h-56 mb-6 flex items-center justify-center">
                <span className="text-5xl">Document</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{doc.name}</h3>
              <p className="text-sm text-gray-500 mb-6">{doc.id}</p>
              <button className="text-amber-500 font-semibold hover:underline text-lg group-hover:text-amber-400 transition">
                {t.viewPdf}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20">
          <p className="text-lg mb-8">{t.cta.text}</p>
          <Link
            href="/#contact"
            className="btn-primary text-xl px-16 py-6 inline-block">
            {t.cta.button}
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
