import { Bars, XMark } from "./Icons.tsx";

export default function ToggleButton({
  isActive,
  onClick,
  description,
}: {
  isActive: boolean;
  onClick: () => void;
  description: string;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    >
      <span className="absolute -inset-0.5" />
      <span className="sr-only">{description}</span>
      {!isActive && <XMark />}
      {isActive && <Bars />}
    </button>
  );
}
