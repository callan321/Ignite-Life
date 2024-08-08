import { useEffect } from "react";

export default function BookMeta() {
  useEffect(() => {
    document.title = "Ignite Life - Book a Session";

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Book a session with Ignite Life to experience the transformative benefits of Bowen Therapy. Our holistic treatments promote relaxation, alleviate pain, and enhance overall well-being.";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content = "Book Bowen Therapy, holistic healing sessions, pain relief appointment, relaxation therapy, Ignite Life booking";
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
