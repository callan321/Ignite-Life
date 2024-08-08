import { useEffect } from "react";

export default function HomeMeta() {
  useEffect(() => {
    document.title = "Ignite Life - Transformative Bowen Therapy";

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Discover the transformative benefits of Bowen Therapy at Ignite Life. Our holistic approach promotes relaxation, alleviates pain, and enhances overall well-being. Join us to experience a natural path to health and vitality.";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content = "Bowen Therapy, holistic healing, pain relief, relaxation, overall well-being, natural health, Ignite Life";
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
