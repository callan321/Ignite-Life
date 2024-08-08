import { useEffect } from "react";

export default function AboutMeta() {
  useEffect(() => {
    document.title = "Ignite Life - About Us";

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Learn more about Ignite Life and our dedication to holistic care and wellbeing through Bowen Therapy. Discover how our treatments can improve your quality of life.";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content = "About Ignite Life, Bowen Therapy, holistic care, wellbeing, health improvement, Heather, holistic healing";
    document.head.appendChild(metaKeywords);

    const metaRobots = document.createElement("meta");
    metaRobots.name = "robots";
    metaRobots.content = "index, follow";
    document.head.appendChild(metaRobots);

    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
      document.head.removeChild(metaRobots);
    };
  }, []);

  return null;
}
