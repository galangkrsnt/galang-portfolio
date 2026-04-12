"use client";

import { useLang, type Lang } from "../hooks/useLang";
import { useTheme, type Theme } from "../hooks/useTheme";

const t = {
  en: {
    nav: { experience: "Experience", skills: "Skills", education: "Education" },
    heroTitle: "Software Engineer",
    heroSub: "Java · Spring Boot · Microservices",
    summary: "Software Engineer with 4+ years building backend systems at a bank. I work mostly with Java and Spring Boot, designing microservices that power mobile banking, payment systems, and open APIs. I like clean code, solving hard problems, and shipping things that actually work.",
    experienceTitle: "Experience",
    skillsTitle: "Skills",
    educationTitle: "Education",
    gpa: "GPA",
  },
  id: {
    nav: { experience: "Pengalaman", skills: "Keahlian", education: "Pendidikan" },
    heroTitle: "Software Engineer",
    heroSub: "Java · Spring Boot · Microservices",
    summary: "Software Engineer dengan 4+ tahun pengalaman membangun sistem backend di perbankan. Sehari-hari pakai Java dan Spring Boot, ngedesain microservices buat mobile banking, sistem pembayaran, dan open API. Suka kode yang bersih, senang problem solving, dan fokus bikin sesuatu yang beneran jalan.",
    experienceTitle: "Pengalaman",
    skillsTitle: "Keahlian",
    educationTitle: "Pendidikan",
    gpa: "IPK",
  },
};

const experiences = [
  {
    company: "PT Bank Sinarmas Indonesia",
    location: "Jakarta, Indonesia",
    roles: [
      {
        title: { en: "Software Engineer — IT E-Channel & Middleware Division", id: "Software Engineer — Divisi IT E-Channel & Middleware" },
        period: { en: "Dec 2021 – Present", id: "Des 2021 – Sekarang" },
        projects: "Bill Payment · Bulk Payment · Auto Debit · QR Manager · Virtual Account",
        bullets: {
          en: [
            "Building Java and Golang applications with Spring Boot and microservices architecture",
            "Integrating with partner systems and building APIs for external and internal services",
            "Providing REST API services for bank channels — mobile banking, internet banking",
            "Providing Open API for external partners",
            "Maintaining and revamping existing services",
            "Deploying services with GitLab CI/CD",
          ],
          id: [
            "Membangun aplikasi Java dan Golang dengan Spring Boot dan arsitektur microservices",
            "Integrasi dengan sistem mitra dan membangun API untuk layanan eksternal dan internal",
            "Menyediakan layanan REST API untuk channel bank — mobile banking, internet banking",
            "Menyediakan Open API untuk mitra eksternal",
            "Memelihara dan merevamp layanan yang sudah ada",
            "Deploy layanan menggunakan GitLab CI/CD",
          ],
        },
      },
      {
        title: { en: "IT Developer Graduate Camp", id: "IT Developer Graduate Camp" },
        period: { en: "Jun 2021 – Dec 2021", id: "Jun 2021 – Des 2021" },
        projects: "HCMS · RDN",
        bullets: {
          en: [
            "Learning banking domain knowledge",
            "Developing soft skills for professional environment",
            "On-the-job training in IT Middleware division",
          ],
          id: [
            "Mempelajari pengetahuan domain perbankan",
            "Mengembangkan soft skills untuk lingkungan profesional",
            "On-the-job training di divisi IT Middleware",
          ],
        },
      },
    ],
  },
  {
    company: "Dinas Kependudukan dan Pencatatan Sipil",
    location: "Yogyakarta, Indonesia",
    roles: [
      {
        title: { en: "Engineer Intern", id: "Magang Engineer" },
        period: { en: "Jun 2020 – Jul 2020", id: "Jun 2020 – Jul 2020" },
        projects: null,
        bullets: {
          en: [
            "Provided administrative services to the public",
            "Developed the official website of Dinas Kependudukan dan Pencatatan Sipil Kota Yogyakarta",
          ],
          id: [
            "Memberikan pelayanan administrasi kepada masyarakat",
            "Mengembangkan website resmi Dinas Kependudukan dan Pencatatan Sipil Kota Yogyakarta",
          ],
        },
      },
    ],
  },
  {
    company: "STMIK AKAKOM Yogyakarta",
    location: "Yogyakarta, Indonesia",
    roles: [
      {
        title: { en: "Lecturer Assistant — Numerical Methods & Mathematics", id: "Asisten Dosen — Metode Numerik & Matematika" },
        period: { en: "Sep 2020 – Jan 2021", id: "Sep 2020 – Jan 2021" },
        projects: null,
        bullets: {
          en: ["Assisted lecturer in teaching Numerical Methods and Mathematics courses"],
          id: ["Membantu dosen dalam mengajar mata kuliah Metode Numerik dan Matematika"],
        },
      },
    ],
  },
];

const skills = [
  { category: { en: "Programming Language", id: "Bahasa Pemrograman" }, items: ["Java", "Golang", "PHP"] },
  { category: { en: "Frameworks", id: "Framework" }, items: ["Spring Boot", "Laravel", "Echo"] },
  { category: { en: "Databases", id: "Database" }, items: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"] },
  { category: { en: "Messaging Queue", id: "Messaging Queue" }, items: ["Apache Kafka"] },
  { category: { en: "DevOps & Tools", id: "DevOps & Tools" }, items: ["Git", "Docker", "Kubernetes", "CI/CD", "GitLab"] },
];

function LangToggle({ lang, onToggle, theme }: { lang: Lang; onToggle: () => void; theme: Theme }) {
  const border = theme === "dark" ? "border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-white" : "border-zinc-200 text-zinc-500 hover:bg-zinc-100 hover:text-black";
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${border}`}
    >
      <span>{lang === "en" ? "🇬🇧" : "🇮🇩"}</span>
      <span>{lang === "en" ? "EN" : "ID"}</span>
      <span className="opacity-40">⇄</span>
      <span>{lang === "en" ? "ID" : "EN"}</span>
    </button>
  );
}

function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  const border = theme === "dark" ? "border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-white" : "border-zinc-200 text-zinc-500 hover:bg-zinc-100 hover:text-black";
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${border}`}
      aria-label="Toggle theme"
    >
      <span>{theme === "dark" ? "○" : "●"}</span>
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}

export default function PortfolioClient() {
  const { lang, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const tx = t[lang];

  const d = theme === "dark";

  const bg          = d ? "bg-black text-white"            : "bg-white text-black";
  const headerBg    = d ? "bg-black/90 border-zinc-900"    : "bg-white/90 border-zinc-100";
  const navText     = d ? "text-zinc-500"                  : "text-zinc-400";
  const navHover    = d ? "hover:text-white"               : "hover:text-black";
  const hr          = d ? "border-zinc-900"                : "border-zinc-100";
  const h2          = d ? "text-zinc-600"                  : "text-zinc-400";
  const bodyText    = d ? "text-zinc-400"                  : "text-zinc-600";
  const monoText    = d ? "text-zinc-500"                  : "text-zinc-400";
  const companyText = d ? "text-white"                     : "text-black";
  const roleText    = d ? "text-zinc-200"                  : "text-zinc-800";
  const dash        = d ? "text-zinc-700"                  : "text-zinc-300";
  const timeline    = d ? "border-zinc-800"                : "border-zinc-200";
  const dotRing     = d ? "border-white bg-black"          : "border-black bg-white";
  const dotFill     = d ? "bg-white"                       : "bg-black";
  const skillBg     = d ? "bg-zinc-900 text-zinc-300 border-zinc-800 hover:bg-white hover:text-black hover:border-white" : "bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-black hover:text-white hover:border-black";
  const contactLink = d ? "text-zinc-400 hover:text-black hover:bg-white border-zinc-800 hover:border-white" : "text-zinc-500 hover:text-white hover:bg-black border-zinc-200 hover:border-black";
  const footer      = d ? "border-zinc-900 text-zinc-700"  : "border-zinc-100 text-zinc-400";
  const headingText = d ? "text-white"                     : "text-black";
  const badgeBg     = d ? "bg-white text-black"            : "bg-black text-white";

  return (
    <div className={`min-h-screen transition-colors duration-300 ${bg}`}>

      {/* Header */}
      <header className={`sticky top-0 z-10 backdrop-blur-sm border-b ${headerBg}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold tracking-tight ${badgeBg}`}>GK</span>
          <div className="flex items-center gap-2 sm:gap-4">
            <nav className={`hidden sm:flex items-center gap-6 text-sm ${navText}`}>
              <a href="#experience" className={`transition-colors ${navHover}`}>{tx.nav.experience}</a>
              <a href="#skills" className={`transition-colors ${navHover}`}>{tx.nav.skills}</a>
              <a href="#education" className={`transition-colors ${navHover}`}>{tx.nav.education}</a>
            </nav>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <LangToggle lang={lang} onToggle={toggleLang} theme={theme} />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pb-24 space-y-16 sm:space-y-20">

        {/* Hero */}
        <section className="space-y-6">
          <div className="space-y-3">
            <p className={`text-xs font-mono uppercase tracking-widest ${monoText}`}>
              {tx.heroSub}
            </p>
            <h1 className={`text-5xl sm:text-7xl font-bold tracking-tighter leading-none ${headingText}`}>
              Galang<br />Krisnanto
            </h1>
            {/* Inverted badge */}
            <div className="pt-1">
              <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide ${badgeBg}`}>
                {tx.heroTitle}
              </span>
            </div>
          </div>

          <p className={`leading-relaxed text-sm sm:text-base max-w-xl ${bodyText}`}>
            {tx.summary}
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              { label: "galangkrsnt@gmail.com", href: "mailto:galangkrsnt@gmail.com" },
              { label: "LinkedIn", href: "https://linkedin.com/in/galang-krisnanto" },
              { label: "081252156651", href: "tel:081252156651" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`text-xs sm:text-sm border rounded-full px-3 py-1.5 transition-all ${contactLink}`}
              >
                {c.label}
              </a>
            ))}
          </div>
        </section>

        <hr className={hr} />

        {/* Experience */}
        <section id="experience">
          <h2 className={`text-xs font-semibold uppercase tracking-widest mb-8 flex items-center gap-2 ${h2}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${dotFill}`} />
            {tx.experienceTitle}
          </h2>
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.company}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 mb-5">
                  <h3 className={`font-semibold text-sm sm:text-base ${companyText}`}>{exp.company}</h3>
                  <p className={`text-xs ${h2}`}>{exp.location}</p>
                </div>

                <div className={`space-y-7 pl-4 border-l ${timeline}`}>
                  {exp.roles.map((role, i) => (
                    <div key={i} className="relative">
                      <div className={`absolute -left-[19px] top-1.5 w-3 h-3 rounded-full border-2 flex items-center justify-center ${dotRing}`}>
                        <div className={`w-1 h-1 rounded-full ${dotFill}`} />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                        <p className={`font-medium text-sm leading-snug ${roleText}`}>
                          {role.title[lang]}
                        </p>
                        <span className={`text-xs whitespace-nowrap shrink-0 ${h2}`}>
                          {role.period[lang]}
                        </span>
                      </div>
                      {role.projects && (
                        <p className={`text-xs font-mono mb-3 leading-relaxed ${monoText}`}>
                          {role.projects}
                        </p>
                      )}
                      <ul className="space-y-1.5">
                        {role.bullets[lang].map((b, j) => (
                          <li key={j} className={`text-sm flex gap-2 leading-relaxed ${bodyText}`}>
                            <span className={`shrink-0 mt-0.5 ${dash}`}>–</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className={hr} />

        {/* Skills */}
        <section id="skills">
          <h2 className={`text-xs font-semibold uppercase tracking-widest mb-8 ${h2}`}>
            {tx.skillsTitle}
          </h2>
          <div className="space-y-4">
            {skills.map((group) => (
              <div key={group.category.en} className="flex flex-col sm:flex-row gap-2 sm:gap-6 sm:items-start">
                <p className={`text-xs sm:w-36 shrink-0 pt-1 uppercase tracking-wide ${h2}`}>
                  {group.category[lang]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 text-xs sm:text-sm font-medium rounded-full border transition-all ${skillBg}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className={hr} />

        {/* Education */}
        <section id="education">
          <h2 className={`text-xs font-semibold uppercase tracking-widest mb-8 ${h2}`}>
            {tx.educationTitle}
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
            <div>
              <h3 className={`font-semibold ${headingText}`}>STMIK AKAKOM Yogyakarta</h3>
              <p className={`text-sm mt-0.5 ${bodyText}`}>
                {lang === "en" ? "Bachelor's Degree, Informatics" : "S1 Informatika"}
              </p>
              <p className={`text-sm mt-0.5 ${h2}`}>{tx.gpa}: 3.79 / 4.00</p>
            </div>
            <span className={`text-sm shrink-0 ${h2}`}>2017 – 2021</span>
          </div>
        </section>

      </main>

      <footer className={`border-t py-6 text-center text-xs ${footer}`}>
        <p>© 2026 Galang Krisnanto</p>
      </footer>
    </div>
  );
}
