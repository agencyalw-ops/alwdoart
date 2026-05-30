import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { content } from "@/config/content";

export default function Pricing() {
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
          {content.pricing.heading}
        </h1>
        <p className="font-['Patrick_Hand'] text-base text-ink-light max-w-2xl mx-auto">
          {content.pricing.subtitle}
        </p>
      </section>

      {/* Pricing Plans */}
      <section className="px-6 md:px-12 pb-16 md:pb-20 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.pricing.plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`fade-in sketch-box p-8 relative ${
                plan.popular ? "md:scale-105 shadow-[6px_6px_0px_rgba(0,0,0,0.2)]" : ""
              }`}
              id={`plan-${idx}`}
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[var(--yellow)] border-2 border-black px-4 py-1 font-['Special_Elite'] text-xs font-bold tracking-wide">
                  POPULAR
                </div>
              )}

              <h3 className="font-['Special_Elite'] text-2xl font-bold text-black mb-2">
                {plan.name}
              </h3>
              <p className="font-['Patrick_Hand'] text-sm text-muted mb-6">
                {plan.description}
              </p>

              <div className="mb-8">
                <div className="font-['Permanent_Marker'] text-4xl text-black">
                  {plan.price}
                </div>
                <div className="font-['Patrick_Hand'] text-sm text-muted">
                  {plan.period}
                </div>
              </div>

              <a
                href={plan.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-button w-full text-center block mb-8"
              >
                {plan.cta.label}
              </a>

              <div className="border-t-2 border-black pt-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="font-['Patrick_Hand'] text-sm text-ink-light flex items-start gap-2"
                    >
                      <span className="text-black font-bold mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-paper-dark border-t-2 border-b-2 border-dashed border-gray-300 px-6 md:px-12 py-16 md:py-20">
        <h2 className="sketch-heading text-center text-black mb-12">
          Frequently Asked Questions
        </h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {[
            {
              q: "Can I change my plan anytime?",
              a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
            },
            {
              q: "What payment methods do you accept?",
              a: "We accept all major credit cards, PayPal, and bank transfers for enterprise plans.",
            },
            {
              q: "Is there a free trial?",
              a: "Yes, we offer a 7-day free trial for all plans. No credit card required.",
            },
            {
              q: "What if I'm not satisfied?",
              a: "We offer a 30-day money-back guarantee on all plans. No questions asked.",
            },
          ].map((faq, idx) => (
            <div key={idx} className="fade-in sketch-box p-6" id={`faq-${idx}`}>
              <h3 className="font-['Special_Elite'] text-base font-bold text-black mb-2">
                {faq.q}
              </h3>
              <p className="font-['Patrick_Hand'] text-sm text-ink-light leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
