import { motion } from "motion/react";

const work = [
  { year: "2025-Now", role: "Software Engineer",org: "Cognizant", note: "Java Developer Intern, working on a project using Java, Spring Boot, and MySQL." },
  { year: "2025",role:"UI/UX Designer", org: "Moovicart", note: "Designed UI/UX for a mobile application using Figma." },
  { year: "2023",role:"UI/UX Design Intern", org: "Echo-day jobs", note: "Designed UI/UX for a mobile application using Figma." },
  { year: "2022",role:"UI/UX Design Intern", org: "NFC Solutions", note: "Designed UI/UX for a Website using Figma and Designed marketing materials for the clients." },
];

const education = [
  { year: "2021-2025", role: "B.tech in Computer Science and Engineering", org: "Institute of Aeronautical Engineering", note: "Specialization in programming, data structures, and algorithms"},
  { year: "2019-2021", role: "Intermediate", org: "Trividyaa junior college", note: "Focus Maths, Physics, and Chemistry" },
  { year: "2019", role: "Marticulation", org: "Kendriya Vidyalaya, AFS Begumpet", note: " Basic education, scored: 88.8%" },
];

const certificates = [
  // AI & Gen AI
  { year: "2026", name: "Microsoft Certified: Azure AI Engineer Associate", org: "Microsoft", note: "Expires Jun 2027", url: "https://learn.microsoft.com/en-gb/users/chilukuririkthareddy-5961/credentials/c147b3f38b99a10f" },
  { year: "2026", name: "Claude Certified Architect", org: "Anthropic", note: "Expires Dec 2026", url: "https://verify.skilljar.com/c/xdkm226c3prk" },
  { year: "2024", name: "Google AI Essentials", org: "Google", note: "", url: "https://www.coursera.org/account/accomplishments/verify/NG87PGP338NJ" },
  { year: "2024", name: "Microsoft Certified: Azure AI Fundamentals", org: "Microsoft", note: "", url: "https://learn.microsoft.com/en-us/users/rikthareddy-4329/credentials/b04c4348f63f181f" },
  // UI/UX
  { year: "2024", name: "Foundations of User Experience (UX) Design", org: "Google", note: "", url: "https://www.coursera.org/account/accomplishments/verify/4YBE5JNN16MG" },
  { year: "2024", name: "Start the UX Design Process: Empathize, Define, and Ideate", org: "Google", note: "", url: "https://www.coursera.org/account/accomplishments/verify/34P87HAHGVA5" },
  { year: "2024", name: "Build Wireframes and Low-Fidelity Prototypes", org: "Google", note: "", url: "https://www.coursera.org/account/accomplishments/verify/BU5W3YUZUDGY" },
  // Java
  { year: "2024", name: "Certificate for Java", org: "Coding Ninjas", note: "", url: "" },
  // Data
  { year: "2024", name: "Data Analysis with Python", org: "freeCodeCamp", note: "", url: "https://www.freecodecamp.org/certification/fcc4e956618-f9f5-4c3d-a066-de3573dd713d/data-analysis-with-python-v7" },
  // Infosys
  { year: "2024", name: "Pragati Path to Future, Cohort 1", org: "Infosys Springboard", note: "", url: "" },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 md:px-12 py-32 border-t border-border">
      <SectionHeader index="02" title="Experience" subtitle="A timeline of work and learning." />

      <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
        <Column heading="Work" items={work} accent />
        <Column heading="Education" items={education} />
        <CertificateColumn heading="Certificates" items={certificates} />
      </div>
    </section>
  );
}

function Column({
  heading,
  items,
  accent = false,
}: {
  heading: string;
  items: { year: string; role: string; org: string; note: string }[];
  accent?: boolean;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-3 mb-10">
        <h3 className="font-display text-2xl font-semibold">{heading}</h3>
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">
          {items.length} entries
        </span>
      </div>
      <ol className="relative border-l border-border pl-8 space-y-10">
        {items.map((it, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative"
          >
            <span
              className={`absolute -left-[37px] top-2 w-3 h-3 rounded-full ${
                accent ? "bg-primary ring-4 ring-primary/20" : "bg-[var(--cream)]"
              }`}
            />
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">
              {it.year}
            </div>
            <div className="mt-2 font-display text-xl md:text-2xl font-medium text-balance">
              {it.role}
            </div>
            <div className="text-sm text-primary mt-1">{it.org}</div>
            <p className="mt-2 text-sm text-foreground/65 text-pretty max-w-md">{it.note}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

function CertificateColumn({
  heading,
  items,
}: {
  heading: string;
  items: { year: string; name: string; org: string; note: string; url: string }[];
}) {
  return (
    <div>
      <div className="flex items-baseline gap-3 mb-10">
        <h3 className="font-display text-2xl font-semibold">{heading}</h3>
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">
          {items.length} entries
        </span>
      </div>
      <ol className="relative border-l border-border pl-8 space-y-10">
        {items.map((it, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative"
          >
            <span className="absolute -left-[37px] top-2 w-3 h-3 rounded-full bg-[var(--cream)]" />
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">
              {it.year}
            </div>
            <div className="mt-2 font-display text-lg md:text-xl font-medium text-balance">
              {it.url ? (
                <a
                  href={it.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {it.name}
                </a>
              ) : (
                it.name
              )}
            </div>
            <div className="text-sm text-primary mt-1">{it.org}</div>
            {it.note && <p className="mt-2 text-xs text-foreground/65">{it.note}</p>}
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

export function SectionHeader({ index, title, subtitle }: { index: string; title: string; subtitle: string }) {
  return (
    <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/50 mb-3">
          {index} / {title}
        </div>
        <h2 className="font-display text-5xl md:text-7xl font-semibold tracking-[-0.03em] text-balance">
          {title}.
        </h2>
      </div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/60 max-w-xs">
        {subtitle}
      </p>
    </div>
  );
}
