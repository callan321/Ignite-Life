import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeroButton() {
  const [shine, setShine] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShine((prev) => !prev);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <button
      onClick={handleClick}
      className="relative overflow-hidden bg-[#bd9479] text-shadow shadow-button text-white hover:text-gray-100 py-3 px-6 rounded-md border-2 hover:border-gray-100 border-white/75 uppercase font-bold tracking-wide transition-all ease-in-out duration-500 hover:bg-[#b5896f] hover:shadow-button-xl hover:scale-105"
    >
      <span className="relative z-10">Button</span>
      <span
        className={`absolute top-0 left-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 pointer-events-none transform ${
          shine ? "shine" : ""
        }`}
      ></span>
    </button>
  );
}
