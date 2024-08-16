import { treatments, treatmentsIntro } from "../../config/homeConfig.tsx";
import HeroButton from "./HeroButton.tsx";

export default function ServicesSection() {
  return (
    <div className="mx-auto mt-32 max-w-7xl sm:mt-56 lg:px-8 px-4">
      <HeroButton></HeroButton>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
          {treatmentsIntro.title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-700">
          {treatmentsIntro.description}
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {treatments.map((feature) => (
            <div key={feature.title} className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="flex items-center justify-between hover:animate-bounce-once">
                  <img src={"bowen1.jpg"} alt={feature.title}  className="aspect-[3/2] w-full rounded-2xl object-cover" />
                </div>
                <h3 className="mt-2 text-gray-800 text-center text-2xl lg:p-8 p-6">{feature.title}</h3>
              </dt>
              <dd className="mt-1 flex items-center flex-auto flex-col text-base leading-7 text-gray-700 ">
                <div className=' w-9/12 px-6 sm:w-full sm:px-0'>
                <p className="flex-auto">{feature.description}</p>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
