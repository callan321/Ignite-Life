import { useEffect, useState } from "react";

export default function HeroButton({
  name,
  onClick,
}: {
  name: string;
  onClick: () => void;
}) {
  const [shine, setShine] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShine((prev) => !prev);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <button
      onClick={onClick}
      className="text-shadow shadow-button hover:shadow-button-xl relative overflow-hidden rounded-md border-2 border-white/75 bg-[#bd9479] px-6 py-3 font-bold uppercase tracking-wide text-white transition-all duration-500 ease-in-out hover:scale-105 hover:border-gray-100 hover:bg-[#b5896f] hover:text-gray-100"
    >
      {name}
      <span
        className={`pointer-events-none absolute left-0 top-0 h-full w-[150%] transform bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 ${
          shine ? "shine" : ""
        }`}
      ></span>
    </button>
  );
}
