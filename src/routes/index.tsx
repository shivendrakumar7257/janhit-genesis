import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Foundational } from "@/components/site/Foundational";
import { Sports } from "@/components/site/Sports";
import { Admissions } from "@/components/site/Admissions";
import { FounderBatch } from "@/components/site/FounderBatch";
import { Campus } from "@/components/site/Campus";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Janhit World School — Greater Noida | Admissions 2026-27" },
      {
        name: "description",
        content:
          "Premium CBSE-affiliated school in Knowledge Park-5, Greater Noida. Foundational Stage to Class 8. Admissions open for the founding batch 2026-27.",
      },
      { property: "og:title", content: "Janhit World School — Greater Noida" },
      {
        property: "og:description",
        content: "Where Global Foundations Meet Elite Excellence. Admissions Open 2026-27.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChoose />
        <Foundational />
        <Sports />
        <Admissions />
        <FounderBatch />
        <Campus />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
