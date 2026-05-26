import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import hero from "@/assets/hero-campus.jpg";

const stats = [
  { label: "Smart Classrooms", value: "100%" },
  { label: "Robotics & STEM Labs", value: "Yes" },
  { label: "Indoor Shooting Range", value: "Unique" },
  { label: "Montessori Foundation", value: "Pre-K – UKG" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={hero}
        alt="Janhit World School campus"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,oklch(0.12_0.05_264/.6)_100%)]" />

      {/* Floating admission badge */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden md:flex absolute right-8 top-28 z-20 items-center gap-3 px-5 py-3 rounded-full glass-dark"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold" />
        </span>
        <span className="text-white text-sm tracking-widest uppercase">Admissions Open · 2026-27</span>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 text-gold text-xs tracking-[0.3em] uppercase w-fit"
        >
          <Sparkles className="size-3.5" /> Where Global Foundations Meet Elite Excellence
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="mt-8 font-serif text-white text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl"
        >
          Building Future <span className="text-gradient-gold italic">Leaders</span>
          <br /> From Day One.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 max-w-2xl text-lg text-white/80 leading-relaxed"
        >
          A next-generation school blending academics, innovation, sports, creativity, and life skills —
          designed for the founding cohort of 2026-27 in Greater Noida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 h-14 rounded-md gradient-gold text-navy-deep font-semibold tracking-wide shadow-gold hover:-translate-y-0.5 transition-all"
          >
            <Calendar className="size-4" /> Book Campus Tour
          </a>
          <a
            href="#admissions"
            className="inline-flex items-center gap-2 px-8 h-14 rounded-md border border-gold/50 text-white hover:bg-white/5 transition-all tracking-wide"
          >
            Apply for Admission <ArrowRight className="size-4" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/20 rounded-2xl overflow-hidden glass-dark"
        >
          {stats.map((s) => (
            <div key={s.label} className="p-6 md:p-8 bg-navy-deep/40">
              <div className="font-serif text-gold text-3xl md:text-4xl">{s.value}</div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-[0.2em] text-white/70">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}