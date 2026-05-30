import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { content } from "@/config/content";

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState("All");
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

  const filteredArtworks =
    selectedFilter === "All"
      ? content.gallery.artworks
      : content.gallery.artworks.filter(
          (art) => art.category === selectedFilter
        );

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Navigation />

      {/* Header */}
      <section className="px-6 md:px-12 py-12 md:py-16 text-center">
        <h1 className="sketch-heading text-black mb-3">
          {content.gallery.heading}
        </h1>
        <p className="font-['Patrick_Hand'] text-base text-ink-light max-w-2xl mx-auto">
          {content.gallery.subtitle}
        </p>
      </section>

      {/* Filters */}
      <section className="px-6 md:px-12 mb-8 flex justify-center flex-wrap gap-3">
        {content.gallery.filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`border-2 border-black px-5 py-2 font-['Patrick_Hand'] text-sm cursor-pointer transition-all ${
              selectedFilter === filter
                ? "bg-[var(--yellow)] shadow-[3px_3px_0px_rgba(0,0,0,0.15)]"
                : "bg-white hover:shadow-[3px_3px_0px_rgba(0,0,0,0.15)]"
            }`}
          >
            {filter}
          </button>
        ))}
      </section>

      {/* Gallery Grid */}
      <section className="px-6 md:px-12 pb-16 md:pb-20 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((art, idx) => (
            <div
              key={art.id}
              className="fade-in sketch-box p-3 cursor-pointer transform hover:-rotate-1 hover:shadow-[8px_8px_0px_rgba(0,0,0,0.15)]"
              id={`artwork-${art.id}`}
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-56 object-cover border border-gray-300"
              />
              <div className="pt-4 px-3 pb-4">
                <h3 className="font-['Special_Elite'] text-base font-semibold text-black mb-1">
                  {art.title}
                </h3>
                <p className="font-['Patrick_Hand'] text-xs text-muted mb-2">
                  by {art.artist}
                </p>
                <p className="font-['Patrick_Hand'] text-sm text-ink-light leading-relaxed mb-3">
                  {art.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-['Special_Elite'] text-base font-bold text-black">
                    {art.price}
                  </span>
                  <a
                    href={content.nav.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sketch-button text-xs py-1 px-3"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredArtworks.length === 0 && (
          <div className="text-center py-12">
            <p className="font-['Patrick_Hand'] text-base text-muted">
              No artworks found in this category.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
