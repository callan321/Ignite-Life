import { useEffect, useState } from "react";

export default function HeroButton({name, onClick}: { name: string; onClick: () => void }) {
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
      className="relative overflow-hidden bg-[#bd9479] text-shadow shadow-button text-white hover:text-gray-100 py-3 px-6 rounded-md border-2 hover:border-gray-100 border-white/75 uppercase font-bold tracking-wide transition-all ease-in-out duration-500 hover:bg-[#b5896f] hover:shadow-button-xl hover:scale-105"
    >
      {name}
      <span
        className={`absolute top-0 left-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 pointer-events-none transform ${
          shine ? "shine" : ""
        }`}
      ></span>
    </button>
  );
}
