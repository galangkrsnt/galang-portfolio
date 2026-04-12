"use client";

import { useState, useEffect } from "react";

export type Lang = "id" | "en";

export function useLang() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("galang-lang");
    if (stored === "en" || stored === "id") setLang(stored);
  }, []);

  function toggleLang() {
    const next: Lang = lang === "en" ? "id" : "en";
    localStorage.setItem("galang-lang", next);
    setLang(next);
  }

  return { lang, toggleLang };
}
