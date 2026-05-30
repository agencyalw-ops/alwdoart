import { Link } from "wouter";
import { content } from "@/config/content";

export default function Navigation() {
  return (
    <nav className="sticky top-3 z-50 mx-6 md:mx-6 flex items-center justify-between border-2 border-black bg-white p-4 md:p-5 shadow-[3px_3px_0px_rgba(0,0,0,0.12)] rounded-sm">
      {/* Logo */}
      <Link href="/">
        <a className="flex items-center gap-2 text-black no-underline hover:opacity-80 transition-opacity">
          <div className="flex h-6 w-6 items-center justify-center border-2 border-black rounded-full text-xs font-bold">
            ✏
          </div>
          <span className="font-['Special_Elite'] text-base font-semibold tracking-wide">
            {content.nav.logo}
          </span>
        </a>
      </Link>

      {/* Links */}
      <ul className="hidden md:flex gap-7 list-none">
        {content.nav.links.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>
              <a className="font-['Patrick_Hand'] text-sm text-black no-underline hover:text-gray-600 transition-colors">
                {link.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href={content.nav.cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className="sketch-button hidden md:inline-block"
      >
        {content.nav.cta.label}
      </a>

      {/* Mobile Menu Toggle (placeholder) */}
      <button className="md:hidden text-black text-xl">☰</button>
    </nav>
  );
}
