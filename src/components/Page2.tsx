import { ReactNode } from "react";

export default function Page2({children} : {children: ReactNode}) {
  return (
    <div className="relative z-10 mt-32 bg-[#745e4d] pb-20 sm:mt-56 sm:pb-24 xl:pb-0 pt-6">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#bd9479] to-[#dfe8de] opacity-25"
          />
        </div>
      </div>
      {children}
    </div>
  )
}