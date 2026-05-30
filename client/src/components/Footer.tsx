import { content } from "@/config/content";

export default function Footer() {
  return (
    <footer className="border-t-2 border-black bg-paper px-6 md:px-12 py-8 md:py-7 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      {/* Left Section */}
      <div>
        <div className="font-['Special_Elite'] text-sm font-semibold text-black">
          {content.nav.logo}
        </div>
        <div className="font-['Patrick_Hand'] text-xs text-muted mt-1">
          {content.footer.tagline}
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4">
        {content.footer.social.map((social) => (
          <a
            key={social.platform}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            title={social.platform}
            className="flex h-8 w-8 items-center justify-center border-2 border-black rounded-full text-xs cursor-pointer transition-all hover:bg-yellow hover:shadow-[2px_2px_0px_rgba(0,0,0,0.12)]"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Footer Links */}
      <div className="flex gap-6 text-xs font-['Patrick_Hand']">
        {content.footer.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-black hover:text-gray-600 transition-colors no-underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
