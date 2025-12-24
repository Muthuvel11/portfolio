import { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title = "Muthuvel - Full Stack Developer",
  description = "Full Stack Developer specializing in Angular, NestJS, and SQL. Building scalable, high-performance web applications.",
  image = "/og-image.png",
  noIndex = false,
}: MetadataProps = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      "Full Stack Developer",
      "Angular", "NestJS", "TypeScript", "Next.js", "Portfolio",
      "Muthuvel", "Software Engineer", "Web Development"
    ],
    authors: [{ name: "Muthuvel" }],
    creator: "Muthuvel",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://muthuvel.dev",
      title,
      description,
      siteName: "Muthuvel Portfolio",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@muthuvel",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    metadataBase: new URL("https://muthuvel.dev"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
