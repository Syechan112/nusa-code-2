export const pricingLabel = "PRICING";

export const pricingHeadline = "3 Paket Utama + Custom.";

export const pricingDescription =
  "Harga di bawah merupakan harga awal untuk project dengan scope sederhana. Setiap project dapat disesuaikan dengan kebutuhan, fitur, dan tingkat kompleksitas.";

export const pricingNote =
  "Harga di atas merupakan harga awal dan belum final. Deployment, domain, hosting, dan fitur tambahan dapat dikenakan biaya terpisah sesuai kebutuhan project.";

export const pricingPlans = [
  {
    id: "starter",
    slug: "starter",
    tier: "01",
    name: "Starter",
    price: "Mulai dari Rp200.000",
    period: "one-time",
    description: "Untuk website sederhana dan kebutuhan promosi.",
    fullDescription:
      "Paket entry-level untuk landing page sederhana, personal profile, atau kebutuhan promosi dasar. Cocok untuk project dengan struktur dan fitur yang tidak terlalu kompleks.",
    highlighted: false,
    ctaText: "Pilih Starter",

    features: [
      "1 halaman / landing page",
      "Responsive design",
      "Custom layout",
      "WhatsApp CTA",
      "Contact section",
      "Basic animation",
      "Source code",
      "1x revisi",
    ],

    details: {
      idealFor:
        "Personal brand, UMKM kecil, promosi produk, event, atau landing page sederhana.",

      timeline: "2 - 4 Hari Kerja",

      support: "7 Hari Support",

      whatIncluded: [
        "Struktur halaman sesuai kebutuhan",
        "Responsive untuk desktop & mobile",
        "Tombol WhatsApp / CTA",
        "Basic interaction & animation",
        "Optimasi struktur frontend",
      ],

      deliverables: [
        "Source code project",
        "Asset yang digunakan dalam project",
        "File build siap deployment",
      ],

      addons: [
        "Deployment Vercel / Netlify: +Rp100.000",
        "Custom domain: menyesuaikan harga domain",
        "Hosting lain: menyesuaikan kebutuhan",
        "Halaman tambahan: menyesuaikan scope",
      ],
    },
  },

  {
    id: "business",
    slug: "business",
    tier: "02",
    name: "Business",
    price: "Mulai dari Rp500.000",
    period: "one-time",
    description: "Untuk website bisnis yang lebih lengkap.",
    fullDescription:
      "Paket untuk bisnis yang membutuhkan website lebih lengkap dengan beberapa halaman, struktur konten yang lebih jelas, serta integrasi dasar untuk membantu pengunjung menghubungi bisnis.",
    highlighted: true,
    badge: "MOST REQUESTED",
    ctaText: "Pilih Business",

    features: [
      "Hingga 5 halaman",
      "Responsive design",
      "Custom UI layout",
      "WhatsApp integration",
      "Contact form",
      "Service / product section",
      "Basic animation",
      "Basic SEO",
      "Source code",
      "2x revisi",
    ],

    details: {
      idealFor:
        "UMKM, bisnis lokal, personal brand, sekolah, organisasi, atau usaha yang membutuhkan website profesional.",

      timeline: "5 - 7 Hari Kerja",

      support: "14 Hari Support",

      whatIncluded: [
        "Home / landing page",
        "About / profile",
        "Services / product",
        "Contact",
        "WhatsApp integration",
        "Responsive design",
        "Basic SEO structure",
      ],

      deliverables: [
        "Source code lengkap",
        "Asset project",
        "Production build",
        "Struktur project yang siap dikembangkan",
      ],

      addons: [
        "Deployment Vercel / Netlify: +Rp100.000",
        "Custom domain: menyesuaikan harga domain",
        "Hosting lain: menyesuaikan kebutuhan",
        "Halaman tambahan: mulai dari Rp75.000 / halaman",
        "Fitur custom: berdasarkan scope",
      ],
    },
  },

  {
    id: "custom",
    slug: "custom",
    tier: "03",
    name: "Custom",
    price: "Diskusikan Project",
    period: "project-based",
    description: "Untuk kebutuhan website atau sistem yang lebih spesifik.",
    fullDescription:
      "Project custom untuk kebutuhan yang tidak dapat ditangani oleh paket Starter atau Business. Scope, fitur, teknologi, timeline, dan harga akan ditentukan setelah kebutuhan project dibahas.",
    highlighted: false,
    ctaText: "Diskusikan Project",

    features: [
      "Custom UI",
      "React / Vue",
      "Laravel",
      "REST API",
      "Database",
      "Authentication",
      "Admin dashboard",
      "CMS",
      "POS",
      "Inventory",
      "API integration",
      "Custom business logic",
    ],

    details: {
      idealFor:
        "Website custom, dashboard, POS, sistem internal, aplikasi berbasis Laravel, atau kebutuhan dengan workflow khusus.",

      timeline: "Menyesuaikan scope project",

      support: "Menyesuaikan project",

      whatIncluded: [
        "Diskusi dan analisis kebutuhan",
        "Perancangan struktur aplikasi",
        "Custom frontend",
        "Backend Laravel jika dibutuhkan",
        "REST API jika dibutuhkan",
        "Database integration",
        "Authentication & role management",
        "Custom business logic",
      ],

      deliverables: [
        "Source code project",
        "Production build",
        "Database structure jika diperlukan",
        "API documentation jika diperlukan",
        "Deployment assistance",
      ],

      addons: [
        "Deployment: mulai dari Rp100.000",
        "Domain: menyesuaikan harga domain",
        "Hosting / VPS: menyesuaikan kebutuhan",
        "Maintenance: berdasarkan kebutuhan",
      ],
    },
  },
];
