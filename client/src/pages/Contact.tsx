import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { content } from "@/config/content";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Navigation />

      {/* Header */}
      <section className="px-6 md:px-12 py-12 md:py-16 text-center">
        <h1 className="sketch-heading text-black mb-3">
          {content.contact.heading}
        </h1>
        <p className="font-['Patrick_Hand'] text-base text-ink-light max-w-2xl mx-auto">
          {content.contact.subtitle}
        </p>
      </section>

      {/* Contact Content */}
      <section className="px-6 md:px-12 pb-16 md:pb-20 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="fade-in" id="contact-form">
            <form
              onSubmit={handleSubmit}
              className="sketch-box p-8"
            >
              <div className="mb-6">
                <label className="font-['Patrick_Hand'] text-sm font-semibold text-black block mb-2">
                  {content.contact.form.nameLabel}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={content.contact.form.namePlaceholder}
                  required
                  className="w-full border-2 border-black px-4 py-2 font-['Patrick_Hand'] text-sm focus:outline-none focus:shadow-[0_0_0_3px_rgba(245,230,66,0.5)]"
                />
              </div>

              <div className="mb-6">
                <label className="font-['Patrick_Hand'] text-sm font-semibold text-black block mb-2">
                  {content.contact.form.emailLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={content.contact.form.emailPlaceholder}
                  required
                  className="w-full border-2 border-black px-4 py-2 font-['Patrick_Hand'] text-sm focus:outline-none focus:shadow-[0_0_0_3px_rgba(245,230,66,0.5)]"
                />
              </div>

              <div className="mb-8">
                <label className="font-['Patrick_Hand'] text-sm font-semibold text-black block mb-2">
                  {content.contact.form.messageLabel}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={content.contact.form.messagePlaceholder}
                  required
                  rows={5}
                  className="w-full border-2 border-black px-4 py-2 font-['Patrick_Hand'] text-sm focus:outline-none focus:shadow-[0_0_0_3px_rgba(245,230,66,0.5)] resize-none"
                />
              </div>

              <button
                type="submit"
                className="sketch-button w-full text-center"
              >
                {content.contact.form.submitButton}
              </button>

              {submitted && (
                <div className="mt-4 p-4 bg-[var(--yellow)] border-2 border-black font-['Patrick_Hand'] text-sm text-black text-center">
                  {content.contact.form.successMessage}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="fade-in" id="contact-info">
            <div className="space-y-6">
              <div className="sketch-box p-8">
                <h3 className="font-['Special_Elite'] text-lg font-bold text-black mb-3">
                  Email
                </h3>
                <a
                  href={`mailto:${content.contact.info.email}`}
                  className="font-['Patrick_Hand'] text-base text-ink-light hover:text-black transition-colors break-all"
                >
                  {content.contact.info.email}
                </a>
              </div>

              <div className="sketch-box p-8">
                <h3 className="font-['Special_Elite'] text-lg font-bold text-black mb-3">
                  Phone
                </h3>
                <a
                  href={`tel:${content.contact.info.phone.replace(/\s/g, "")}`}
                  className="font-['Patrick_Hand'] text-base text-ink-light hover:text-black transition-colors"
                >
                  {content.contact.info.phone}
                </a>
              </div>

              <div className="sketch-box p-8">
                <h3 className="font-['Special_Elite'] text-lg font-bold text-black mb-3">
                  Address
                </h3>
                <p className="font-['Patrick_Hand'] text-base text-ink-light leading-relaxed">
                  {content.contact.info.address}
                </p>
              </div>

              <div className="sketch-box p-8">
                <h3 className="font-['Special_Elite'] text-lg font-bold text-black mb-3">
                  Business Hours
                </h3>
                <p className="font-['Patrick_Hand'] text-base text-ink-light">
                  {content.contact.info.hours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
