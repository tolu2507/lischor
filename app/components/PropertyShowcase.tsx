"use client";

import { useLanguageStore } from "@/lib/langstore";
import translations from "@/lib/translation";
import { motion } from "framer-motion";
import Image from "next/image";

const properties = Array(8)
  .fill(null)
  .map((_, i) => ({
    id: i + 1,
    price: `AED ${(2.5 + i * 0.7).toFixed(1)}M`,
    type:
      i % 3 === 0 ? "3BR Apartment" : i % 2 === 0 ? "2BR Apartment" : "Villa",
    location: [
      "Dubai Marina",
      "Palm Jumeirah",
      "Downtown Dubai",
      "Jumeirah Village Circle",
    ][i % 4],
    image: `/images/house-${i + 1}.jpg`,
  }));

export default function PropertyShowcase() {
  const { language } = useLanguageStore();
  const t = translations[language].PropertyShowcase;

  return (
    <section
      id="properties"
      className="section-padding bg-background text-foreground">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-center mb-20">
        {t.title}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {properties.map((property, i) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer">
            <div className="relative h-96 w-full">
              <Image
                src={property.image}
                alt={`${property.type} in ${property.location}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority={i < 4}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold mb-1">
                {property.price}
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg opacity-95">
                {property.type}
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-sm opacity-80 mt-1">
                {property.location}
              </motion.p>
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-center mt-20">
        <a
          href="#contact"
          className="btn-primary text-sm md:text-xl md:px-20 px-10 py-3 md:py-7 rounded-2xl shadow-2xl hover:shadow-amber-500/50 transition-all duration-300">
          {t.cta}
        </a>
      </motion.div>
    </section>
  );
}
