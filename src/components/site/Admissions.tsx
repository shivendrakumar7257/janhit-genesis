import { motion } from "framer-motion";
import { ClipboardList, MapPin, MessagesSquare, UserCheck, Gift, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const steps = [
  { icon: ClipboardList, title: "Inquiry & Registration", desc: "Submit the enquiry form to begin." },
  { icon: MapPin, title: "Campus Experience", desc: "A guided tour of our spaces and ethos." },
  { icon: MessagesSquare, title: "Student Interaction", desc: "A friendly, age-appropriate session." },
  { icon: UserCheck, title: "Principal Interaction", desc: "A meaningful conversation with the family." },
  { icon: Gift, title: "Enrollment & Welcome Kit", desc: "Welcome to the Janhit family." },
];

export function Admissions() {
  return (
    <section id="admissions" className="relative py-28 md:py-36 bg-beige">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Admissions 2026-27"
          title={<>A thoughtful, <span className="italic text-gradient-gold">five-step journey</span>.</>}
          description="We get to know every family personally. Here is what the path to Janhit looks like."
        />

        <div className="mt-20 relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative"
              >
                <div className="relative bg-white rounded-2xl p-6 border border-border hover:border-gold/50 hover-lift">
                  <div className="absolute -top-5 left-6 h-10 w-10 rounded-full gradient-gold flex items-center justify-center font-serif text-navy-deep text-lg font-bold shadow-gold">
                    {i + 1}
                  </div>
                  <s.icon className="size-7 text-navy mt-3" />
                  <h3 className="mt-4 font-serif text-xl text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 relative rounded-3xl overflow-hidden gradient-navy p-10 md:p-14 shadow-luxury"
        >
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <div className="text-gold text-xs tracking-[0.35em] uppercase">Limited · Invite-Only</div>
              <h3 className="mt-3 font-serif text-3xl md:text-5xl text-white max-w-xl leading-tight">
                Founding Batch <span className="italic text-gradient-gold">Admissions Open.</span>
              </h3>
              <p className="mt-3 text-white/70 max-w-lg">
                Be part of the inaugural cohort and enjoy exclusive founder's benefits.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 h-14 rounded-md gradient-gold text-navy-deep font-semibold tracking-wide shadow-gold hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              Reserve a Seat <ArrowRight className="size-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}