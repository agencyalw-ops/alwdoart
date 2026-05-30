import { useEffect, useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { content } from "@/config/content";

export default function Home() {
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

    // Trigger immediately visible elements
    setTimeout(() => {
      document.querySelectorAll(".fade-in").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setVisibleElements((prev) => new Set(prev).add(el.id));
        }
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  const toggleVisible = (id: string) => {
    if (visibleElements.has(id)) {
      document.getElementById(id)?.classList.add("visible");
    }
  };

  useEffect(() => {
    visibleElements.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.classList.add("visible");
    });
  }, [visibleElements]);

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto items-center">
        <div className="fade-in" id="hero-text">
          <h1 className="sketch-heading text-black mb-5">
            Discover Exceptional
            <br />
            <span className="bg-[var(--yellow)] px-1 inline">Artistry</span>
          </h1>
          <p className="font-['Patrick_Hand'] text-base text-ink-light leading-relaxed max-w-sm mb-8">
            {content.home.hero.subtitle}
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href={content.home.hero.cta.primary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-button"
            >
              {content.home.hero.cta.primary.label}
            </a>
            <Link href={content.home.hero.cta.secondary.href}>
              <a className="sketch-outline">
                {content.home.hero.cta.secondary.label}
              </a>
            </Link>
          </div>
        </div>

        <div className="fade-in" id="hero-image">
          <div className="bg-white border-2 border-black p-2 shadow-[6px_6px_0px_rgba(0,0,0,0.12)] transform rotate-1">
            <img
              src={content.home.hero.image.src}
              alt={content.home.hero.image.alt}
              className="w-full h-64 md:h-80 object-cover border border-gray-300"
            />
            <div className="font-['Caveat'] text-base text-ink-light text-center pt-2">
              Art Collection ✨
            </div>
            {/* Tape strip */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 w-12 h-5 bg-[var(--yellow)]-100 border border-[rgba(245,230,66,0.6)] opacity-70 rounded-sm"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-paper-dark border-t-2 border-b-2 border-dashed border-gray-300 px-6 md:px-12 py-16 md:py-20">
        <h2 className="sketch-heading text-center text-black mb-2">
          {content.home.features.heading}
        </h2>
        <p className="font-['Patrick_Hand'] text-center  text-sm mb-12">
          {content.home.features.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {content.home.features.items.map((item, idx) => (
            <div
              key={idx}
              className="fade-in sketch-box p-7"
              id={`feature-${idx}`}
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              <div className="flex h-9 w-9 items-center justify-center border-2 border-black rounded-full text-lg mb-4">
                {item.icon}
              </div>
              <h3 className="font-['Special_Elite'] text-base font-semibold text-black mb-2">
                {item.title}
              </h3>
              <p className="font-['Patrick_Hand'] text-sm text-ink-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Works Section */}
      <section className="px-6 md:px-12 py-16 md:py-20 max-w-6xl mx-auto">
        <div className="flex items-baseline gap-3 mb-2">
          <h2 className="sketch-heading text-black">
            {content.home.recentWorks.heading}
          </h2>
          <div className="h-1 w-12 bg-[var(--yellow)] border border-black"></div>
        </div>
        <Link href="/gallery">
          <a className="font-['Caveat'] text-base text-ink-light underline cursor-pointer block mb-8">
            {content.home.recentWorks.viewAll}
          </a>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.home.recentWorks.items.map((item, idx) => (
            <div
              key={idx}
              className="fade-in sketch-box p-2 cursor-pointer transform hover:-rotate-1"
              id={`work-${idx}`}
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover border border-gray-300"
              />
              <div className="pt-3 px-3 pb-4 flex justify-between items-center">
                <div>
                  <div className="font-['Caveat'] text-base text-black">
                    {item.title}
                  </div>
                  <div className="font-['Patrick_Hand'] text-xs ">
                    {item.category}
                  </div>
                </div>
                <span className="text-lg cursor-pointer hover:text-red-500 transition-colors">
                  ♡
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inspiration Gallery Section */}
      <section className="bg-paper-dark border-t-2 border-b-2 border-dashed border-gray-300 px-6 md:px-12 py-16 md:py-20 relative overflow-hidden">
        <div className="text-center mb-2">
          <span className="text-2xl animate-spin inline-block">↻</span>
        </div>
        <h2 className="sketch-heading text-center text-black mb-2">
          {content.home.inspiration.heading}
          <br />
          <span className="bg-[var(--yellow)] px-1 inline">
            {content.home.inspiration.highlightText}
          </span>
        </h2>
        <p className="font-['Patrick_Hand'] text-center  text-sm mb-12">
          {content.home.inspiration.subtitle}
        </p>

        <div className="absolute bottom-0 right-0 text-9xl text-black opacity-5 pointer-events-none font-['Permanent_Marker']">
          ART
        </div>

        <div className="flex gap-5 justify-center flex-wrap max-w-4xl mx-auto relative z-10">
          {content.home.inspiration.categories.map((cat, idx) => (
            <div
              key={idx}
              className="fade-in sketch-box p-2 w-32 cursor-pointer"
              id={`inspo-${idx}`}
              style={{
                transform: `rotate(${[-3, 1.5, -1, 2.5][idx]}deg)`,
                transitionDelay: `${idx * 70}ms`,
              }}
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-24 object-cover border border-gray-300"
              />
              <div className="font-['Caveat'] text-sm text-ink-light text-center pt-2">
                {cat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-12 py-16 md:py-20 max-w-6xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="sketch-heading text-black mb-2">
              {content.home.services.heading}
            </h2>
            <p className="font-['Patrick_Hand'] text-sm ">
              {content.home.services.subtitle}
            </p>
          </div>
          <button className="hidden md:block border-2 border-black bg-transparent px-5 py-2 font-['Patrick_Hand'] text-sm cursor-pointer shadow-[3px_3px_0px_rgba(0,0,0,0.15)] hover:shadow-[4px_4px_0px_rgba(0,0,0,0.15)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all rounded-full whitespace-nowrap">
            View All Services
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {content.home.services.items.map((service, idx) => (
            <div
              key={idx}
              className="fade-in sketch-box p-6"
              id={`service-${idx}`}
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center bg-[var(--yellow)] border-2 border-black text-lg flex-shrink-0">
                  {service.icon}
                </div>
                <h3 className="font-['Special_Elite'] text-base font-semibold text-black">
                  {service.title}
                </h3>
              </div>
              <p className="font-['Patrick_Hand'] text-sm text-ink-light leading-relaxed mb-3">
                {service.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-black px-3 py-1 font-['Patrick_Hand'] text-xs bg-paper cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-16 md:py-20 flex justify-center">
        <div className="fade-in sketch-box max-w-xl w-full p-12 text-center relative" id="cta-box">
          <div className="absolute top-4 left-5 text-2xl text-yellow-dark">✦</div>
          <div className="absolute bottom-4 right-5 text-2xl text-yellow-dark">✦</div>

          <h2 className="sketch-heading text-black mb-4">
            {content.home.cta.heading}
          </h2>
          <p className="font-['Patrick_Hand'] text-base text-ink-light leading-relaxed mb-8">
            {content.home.cta.subtitle}
          </p>
          <a
            href={content.home.cta.button.href}
            target="_blank"
            rel="noopener noreferrer"
            className="sketch-button inline-block"
          >
            {content.home.cta.button.label}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
