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
      className="group relative inline-flex items-center justify-center rounded-md p-2 bg-transparent"
    >
      <span className="absolute -inset-0.5" />
      <span className="sr-only">{description}</span>
      {!isActive && <XMark />}
      {isActive && <Bars />}
    </button>
  );
}
