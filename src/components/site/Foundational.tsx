import { motion } from "framer-motion";
import { BookOpen, Palette, Music, Shield, Sparkles, Blocks } from "lucide-react";
import img from "@/assets/foundational.jpg";

const items = [
  { icon: Blocks, title: "Montessori Lab", color: "from-rose-100 to-amber-100" },
  { icon: BookOpen, title: "Mini Library", color: "from-sky-100 to-emerald-100" },
  { icon: Palette, title: "Creative Arts", color: "from-amber-100 to-rose-100" },
  { icon: Music, title: "Music & Activity Zone", color: "from-violet-100 to-sky-100" },
  { icon: Shield, title: "Safe & Joyful Environment", color: "from-emerald-100 to-amber-100" },
  { icon: Sparkles, title: "Sensorial Discovery", color: "from-rose-100 to-violet-100" },
];

export function Foundational() {
  return (
    <section id="foundation" className="relative py-28 md:py-36 bg-beige overflow-hidden">
      <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 rounded-full gradient-navy opacity-10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">
        <div>
          <div className="inline-flex items-center gap-3 text-gold text-xs tracking-[0.35em] uppercase">
            <span className="h-px w-8 bg-gold/60" /> Foundational Hub
          </div>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.05]">
            A magical first chapter for <span className="italic text-gradient-gold">little learners.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            From Playgroup to UKG, our dedicated Foundational Hub blends Montessori wisdom with
            premium, sensorial spaces — the kind of beginning every child deserves.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className={`group p-5 rounded-2xl bg-gradient-to-br ${it.color} border border-white hover-lift`}
              >
                <div className="h-10 w-10 rounded-lg bg-white/80 backdrop-blur flex items-center justify-center text-navy mb-3 group-hover:rotate-6 transition-transform">
                  <it.icon className="size-5" />
                </div>
                <div className="font-serif text-lg text-navy">{it.title}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <img
            src={img}
            alt="Foundational learning space"
            loading="lazy"
            width={1280}
            height={896}
            className="rounded-3xl shadow-luxury w-full object-cover aspect-[5/4]"
          />
          <div className="absolute -top-6 -left-6 glass rounded-2xl p-5 shadow-luxury">
            <div className="font-serif text-3xl text-navy">Pre-K – UKG</div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
              Foundational Stage
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}