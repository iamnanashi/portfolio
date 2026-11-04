import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shivang Chauhan | Forward Deployed Engineer, Web & App Developer, AEO & SEO",
  description:
    "Portfolio of Shivang Chauhan — Forward Deployed Engineer (FDE) and Web/App Developer with 12+ years building enterprise web architectures, cross-platform mobile apps, and high-visibility AEO & Technical SEO systems.",
  keywords: [
    "Shivang Chauhan",
    "Forward Deployed Engineer",
    "FDE",
    "Web Developer",
    "Mobile App Developer",
    "Full-Stack Architect",
    "React Native",
    "Next.js",
    "TypeScript",
    "FastAPI",
    "Answer Engine Optimization",
    "AEO Specialist",
    "Technical SEO",
    "Semantic Search",
    "Bangalore",
  ],
  authors: [{ name: "Shivang Chauhan" }],
  openGraph: {
    title: "Shivang Chauhan | Forward Deployed Engineer, Web & App Developer, AEO & SEO",
    description:
      "12+ years building high-scale web platforms, mobile apps, and search-optimized architectures. Forward Deployed Engineer specializing in field delivery, enterprise systems, and AEO/SEO discoverability.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivang Chauhan | Forward Deployed Engineer, Web & App Developer, AEO & SEO",
    description:
      "Forward Deployed Engineer (FDE) and Web/App Developer with 12+ years building enterprise web platforms, mobile apps, and AEO/SEO search visibility.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://shivangchauhan.com/#person",
      "name": "Shivang Chauhan",
      "jobTitle": "Forward Deployed Engineer & Web/App Developer",
      "description":
        "Forward Deployed Engineer (FDE), Full-Stack Web and Mobile App Developer, and Answer Engine Optimization (AEO) and SEO specialist with 12+ years of experience building scalable enterprise platforms.",
      "telephone": "+919176788879",
      "email": "chauhanshivang4@gmail.com",
      "url": "https://shivangchauhan.com",
      "sameAs": [
        "https://www.linkedin.com/in/shivang-chauhan/",
        "https://github.com/iporky",
        "https://www.instagram.com/nanashi.la_familia/"
      ],
      "knowsAbout": [
        "Forward Deployed Engineering",
        "Full-Stack Web Development",
        "Mobile App Development",
        "React Native",
        "Next.js",
        "TypeScript",
        "Python FastAPI",
        "Answer Engine Optimization (AEO)",
        "Technical SEO",
        "Structured Data & Schema.org Graphs",
        "Semantic Search & LLM Retrieval"
      ],
      "hasOccupation": [
        {
          "@type": "Occupation",
          "name": "Forward Deployed Engineer",
          "description":
            "Translates complex client business requirements into deployed, mission-critical web and mobile software systems in the field."
        },
        {
          "@type": "Occupation",
          "name": "Web and Mobile Application Developer",
          "description":
            "Architects and builds production web applications (Next.js, React) and cross-platform mobile apps (React Native, Expo) with native performance."
        },
        {
          "@type": "Occupation",
          "name": "AEO & Technical SEO Specialist",
          "description":
            "Engineers digital products and semantic data structures for high indexability and citation across generative answer engines and organic search."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://shivangchauhan.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is Shivang Chauhan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Shivang Chauhan is a Forward Deployed Engineer (FDE), Web and App Developer, and AEO/SEO specialist with 12+ years of experience delivering scalable enterprise software."
          }
        },
        {
          "@type": "Question",
          "name": "What is Shivang Chauhan's engineering focus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Shivang specializes in Forward Deployed Engineering, Full-Stack Web Development (Next.js, React, TypeScript), Mobile App Development (React Native, Expo), and Answer Engine Optimization (AEO & Technical SEO) for modern search engines."
          }
        },
        {
          "@type": "Question",
          "name": "Does Shivang Chauhan specialize in agentic AI research?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "No. Shivang is a hands-on Forward Deployed Engineer and Web/App Developer specializing in production systems, field deployments, and AEO/SEO search discovery, rather than agentic AI research."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`} suppressHydrationWarning>
      <body
        className="min-h-screen bg-[#050505] text-white/90 antialiased selection:bg-[#ffff00] selection:text-black"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
