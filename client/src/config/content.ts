export const content = {
  nav: {
    logo: "ALWDOART",
    links: [
      { label: "Home", href: "/" },
      { label: "Gallery", href: "/gallery" },
      { label: "Pricing", href: "/pricing" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ],
    cta: {
      label: "Commission",
      href: "https://www.instagram.com/alwdoart/"
    }
  },
  home: {
    hero: {
      subtitle:
        "Stylized character illustrations, OC designs, and fanart commissions. Bringing your imagination to life through unique digital artistry.",
      cta: {
        primary: {
          label: "Order Commission",
          href: "https://www.instagram.com/alwdoart/"
        },
        secondary: {
          label: "View Gallery",
          href: "/gallery"
        }
      },
      image: {
        src: "/img/img (6).webp",
        alt: "Alwdoart Digital Illustration"
      }
    },
    features: {
      heading: "Why Choose Alwdoart?",
      subtitle: "Dedicated to quality and unique character expressions",
      items: [
        {
          icon: "🎨",
          title: "Unique Style",
          description:
            "Distinctive stylized character illustrations that stand out with personality."
        },
        {
          icon: "✨",
          title: "High Quality",
          description:
            "Meticulous attention to detail in every stroke and color choice."
        },
        {
          icon: "💬",
          title: "Fast Response",
          description:
            "Open communication throughout the entire creative process."
        }
      ]
    },
    recentWorks: {
      heading: "Recent Creations",
      viewAll: "Explore the full gallery →",
      items: [
        {
          title: "knight",
          category: "Commission",
          image:
            "/img/img(1).jpg"
        },
        {
          title: "DANDADAN",
          category: "Personal Project",
          image:
            "/img/img (2).webp"
        },
        {
          title: "Sasha AOT",
          category: "Fanart",
          image:
            "/img/img (1).webp"
        }
      ]
    },
    inspiration: {
      heading: "Artistic",
      highlightText: "Inspiration",
      subtitle: "Exploring various themes from fantasy to daily life",
      categories: [
        {
          label: "Characters",
          image:
            "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=500&auto=format&fit=crop"
        },
        {
          label: "Animals",
          image:
            "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=500&auto=format&fit=crop"
        },
        {
          label: "Fantasy",
          image:
            "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=500&auto=format&fit=crop"
        },
        {
          label: "Sketches",
          image:
            "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=500&auto=format&fit=crop"
        }
      ]
    },
    services: {
      heading: "Creative Services",
      subtitle: "Specialized in digital character art and design",
      items: [
        {
          icon: "👤",
          title: "Character Design",
          description:
            "Custom OC (Original Character) creation from your descriptions or sketches.",
          tags: ["Stylized", "Full Body", "Concept Art"]
        },
        {
          icon: "🖼️",
          title: "Fanart Illustrations",
          description:
            "High-quality illustrations of your favorite characters from anime, games, or movies.",
          tags: ["Anime", "Digital Paint", "High Res"]
        }
      ]
    },
    cta: {
      heading: "Ready for a Commission?",
      subtitle:
        "Let's turn your ideas into beautiful digital art. DM on Instagram to start!",
      button: {
        label: "DM for Order",
        href: "https://www.instagram.com/alwdoart/"
      }
    }
  },
  pricing: {
    heading: "Commission Price List",
    subtitle:
      "Transparent pricing for high-quality stylized illustrations. All prices are starting rates.",
    plans: [
      {
        name: "Headshot / Icon",
        description:
          "Detailed headshot illustration, perfect for profile pictures.",
        price: "$10",
        period: "per character",
        popular: false,
        cta: {
          label: "Order Now",
          href: "https://www.instagram.com/alwdoart/"
        },
        features: [
          "High-resolution file",
          "Simple background",
          "2 Revisions",
          "3-5 Days delivery"
        ]
      },
      {
        name: "Half Body",
        description:
          "Waist-up character illustration with full coloring and shading.",
        price: "$15",
        period: "per character",
        popular: true,
        cta: {
          label: "Order Now",
          href: "https://www.instagram.com/alwdoart/"
        },
        features: [
          "High-resolution file",
          "Complex shading",
          "Simple background",
          "3 Revisions",
          "5-7 Days delivery"
        ]
      },
      {
        name: "Full Body",
        description:
          "Complete character design from head to toe with dynamic posing.",
        price: "$25",
        period: "per character",
        popular: false,
        cta: {
          label: "Order Now",
          href: "https://www.instagram.com/alwdoart/"
        },
        features: [
          "High-resolution file",
          "Full detailing",
          "Simple/Transparent BG",
          "Unlimited Revisions",
          "7-10 Days delivery"
        ]
      }
    ]
  },
  about: {
    heading: "About Alwdoart",
    subtitle: "The artist behind the stylized characters",
    mission:
      "To bring imagination to life through unique and expressive stylized character illustrations.",
    story:
      "Starting as a passion for digital art, Alwdoart has grown into a dedicated space for character design and fanart. With a focus on personality and style, every piece is crafted with care to ensure it resonates with the viewer.",
    values: [
      {
        title: "Creativity",
        description:
          "Pushing boundaries in character design and artistic expression."
      },
      {
        title: "Quality",
        description:
          "Ensuring every illustration meets high standards of digital craftsmanship."
      }
    ],
    team: {
      heading: "The Artist",
      description: "Meet the creator behind Alwdoart."
    }
  },
  contact: {
    heading: "Get in Touch",
    subtitle:
      "Have questions? Feel free to reach out through any of these channels.",
    form: {
      nameLabel: "Your Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email Address",
      emailPlaceholder: "Enter your email",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project...",
      submitButton: "Send Message",
      successMessage: "Thank you! Your message has been sent successfully."
    },
    info: {
      email: "agencyalw@gmail.com",
      phone: "+62 812 3456 7890",
      address: "Digital Studio, Indonesia",
      hours: "Mon - Fri: 9am - 5pm"
    }
  },
  gallery: {
    heading: "Art Gallery",
    subtitle: "A collection of stylized illustrations and character designs.",
    // ✅ FIX: renamed from "categories" → "filters" (matches Gallery.tsx)
    filters: ["All", "Commission", "Fanart", "Personal"],
    // ✅ FIX: renamed from "items" → "artworks", added id/artist/description/price fields
    artworks: [
      {
        id: "1",
        title: "Wizcat",
        artist: "Alwdoart",
        description: "A whimsical wizard cat character commission.",
        price: "$25",
        category: "Commission",
        image:
          "/img/img (6).webp"
      },
      {
        id: "2",
        title: "Knight",
        artist: "Alwdoart",
        description: "A brave knight ready for adventure.",
        price: "$30",
        category: "Personal",
        image:
          "/img/img(1).jpg"
      },
      {
        id: "3",
        title: "Sasha AOT",
        artist: "Alwdoart",
        description: "Fan tribute to Sasha from Attack on Titan.",
        price: "$20",
        category: "Fanart",
        image:
          "/img/img (1).webp"
      },
      {
        id: "4",
        title: " OC",
        artist: "Alwdoart",
        description: "Original character design with full color.",
        price: "$35",
        category: "Commission",
        image:
          "/img/img (4).webp"
      },
      {
        id: "5",
        title: "okarun ",
        artist: "Alwdoart",
        description: "okarun from dandadan",
        price: "$5",
        category: "commision",
        image:
          "/img/img (2).webp"
      },
      {
        id: "6",
        title: "roxy grayrat",
        artist: "Alwdoart",
        description: "Fanart of roxy .",
        price: "$22",
        category: "Fanart",
        image:
          "/img/img (3).webp"
      }
    ]
  },
  footer: {
    tagline:
      "Creating unique digital experiences through stylized character art.",
    social: [
      {
        platform: "Instagram",
        icon: "📸",
        href: "https://www.instagram.com/alwdoart/"
      },
      { platform: "Twitter", icon: "🐦", href: "https://twitter.com/alwdoart" },
      { platform: "Email", icon: "✉", href: "mailto:agencyalw@gmail.com" }
    ],
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" }
    ]
  }
};