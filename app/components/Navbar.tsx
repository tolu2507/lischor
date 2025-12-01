/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, PhoneCall } from "lucide-react";
import Link from "next/link";
import { useLanguageStore } from "@/lib/langstore";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage } = useLanguageStore();

  useEffect(() => setMounted(true), []);

  // THIS IS THE MISSING FUNCTION — SCROLLING WORKS AGAIN
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-amber-600 dark:text-amber-500">
          Lyschor Real Estate
        </Link>

        {/* Desktop Menu — SCROLLING FIXED */}
        <div className="hidden lg:flex gap-10 text-foreground">
          {[
            { label: "RUB Payment", id: "rub-payment" },
            { label: "Services", id: "services" },
            { label: "Why Us", id: "why-us" },
            { label: "Properties", id: "properties" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-amber-500 font-medium transition">
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/971501234567"
            className="text-green-500 hover:scale-110 transition">
            <PhoneCall className="w-6 h-6" />
          </a>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 hover:scale-110 transition-all">
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Language Switcher */}
          <div className="flex items-center gap-3 text-foreground/80 font-medium">
            <button
              onClick={() => setLanguage("en")}
              className={
                language === "en"
                  ? "text-amber-500 font-bold"
                  : "hover:text-amber-500"
              }>
              EN
            </button>
            <span className="text-foreground/40">|</span>
            <button
              onClick={() => setLanguage("ru")}
              className={
                language === "ru"
                  ? "text-amber-500 font-bold"
                  : "hover:text-amber-500"
              }>
              RU
            </button>
          </div>

          <Link
            href="/freelance-brokers"
            className="bg-amber-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-amber-400 transition">
            Earn 100% Commission
          </Link>
        </div>
      </div>
    </nav>
  );
}
