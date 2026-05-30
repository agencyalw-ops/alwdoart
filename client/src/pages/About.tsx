import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { content } from "@/config/content";

export default function About() {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    visibleElements.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.classList.add("visible");
    });
  }, [visibleElements]);

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Navigation />

      {/* Header */}
      <section className="px-6 md:px-12 py-12 md:py-16 text-center">
        <h1 className="sketch-heading text-black mb-3">
          {content.about.heading}
        </h1>
        <p className="font-['Patrick_Hand'] text-base text-ink-light max-w-2xl mx-auto">
          {content.about.subtitle}
        </p>
      </section>

      {/* Mission */}
      <section className="px-6 md:px-12 py-12 md:py-16 bg-paper-dark border-t-2 border-b-2 border-dashed border-gray-300">
        <div className="max-w-3xl mx-auto">
          <h2 className="sketch-heading text-black mb-6">Our Mission</h2>
          <p className="font-['Patrick_Hand'] text-base text-ink-light leading-relaxed mb-8">
            {content.about.mission}
          </p>
          <p className="font-['Patrick_Hand'] text-base text-ink-light leading-relaxed">
            {content.about.story}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-12 py-12 md:py-16">
        <h2 className="sketch-heading text-center text-black mb-12">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {content.about.values.map((value, idx) => (
            <div
              key={idx}
              className="fade-in sketch-box p-8"
              id={`value-${idx}`}
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              <h3 className="font-['Special_Elite'] text-xl font-bold text-black mb-3">
                {value.title}
              </h3>
              <p className="font-['Patrick_Hand'] text-base text-ink-light leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-paper-dark border-t-2 border-b-2 border-dashed border-gray-300 px-6 md:px-12 py-12 md:py-16">
        <h2 className="sketch-heading text-center text-black mb-3">
          {content.about.team.heading}
        </h2>
        <p className="font-['Patrick_Hand'] text-center  text-base mb-12">
          {content.about.team.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              name: "ALI",
              role: "ilsutrator",
              bio: "just ilustrator ",
            },
        
          ].map((member, idx) => (
            <div
              key={idx}
              className="fade-in sketch-box p-6 text-center"
              id={`member-${idx}`}
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              <div className="w-24 h-24 mx-auto mb-4 bg-[var(--yellow)] border-2 border-black rounded-full flex items-center justify-center text-4xl">
                👤
              </div>
              <h3 className="font-['Special_Elite'] text-lg font-bold text-black mb-1">
                {member.name}
              </h3>
              <p className="font-['Patrick_Hand'] text-sm font-semibold text-ink-light mb-2">
                {member.role}
              </p>
              <p className="font-['Patrick_Hand'] text-sm ">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { number: "5000+", label: "Artworks" },
            { number: "500+", label: "Artists" },
            { number: "10K+", label: "Collectors" },
            { number: "50+", label: "Countries" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="fade-in sketch-box p-8 text-center"
              id={`stat-${idx}`}
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              <div className="font-['Permanent_Marker'] text-4xl text-black mb-2">
                {stat.number}
              </div>
              <p className="font-['Patrick_Hand'] text-base text-ink-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
