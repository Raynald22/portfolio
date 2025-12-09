import { useEffect } from "react";

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

export function SEO({
  title = "Reynaldi Fikri Hidayat - Frontend Engineer | React, Angular, TypeScript",
  description = "Frontend Engineer with 4+ years of experience building scalable web applications for banking and government sectors. Specialized in React, Angular, and TypeScript.",
  image = "/og-image.png",
  url = "https://reynaldifikri.dev",
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("author", "Reynaldi Fikri Hidayat");
    updateMetaTag(
      "keywords",
      "Frontend Engineer, React Developer, Angular Developer, TypeScript, Web Development, Jakarta, Indonesia, SAKTI, Permata Bank"
    );

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", "website", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);

    // Additional meta tags
    updateMetaTag("viewport", "width=device-width, initial-scale=1.0");
    updateMetaTag("theme-color", "#14b8a6");
  }, [title, description, image, url]);

  return null;
}
