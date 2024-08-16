import { ReactNode } from "react";

export default function Page2({ children, bg, bottomColor, topColor  }: { children: ReactNode ; bg: string; bottomColor: string, topColor: string }) {
  return (
    <div
      className="relative z-10"
      style={{ backgroundColor: bg }}
    >
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden ">
        <div className="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              background: `linear-gradient(to right, ${bottomColor}, ${topColor})`,
              opacity: 0.25,
              width: "68.5625rem",
              aspectRatio: "1097 / 1023",
            }}
          />
        </div>
      </div>
      {children}
    </div>
  );
}
