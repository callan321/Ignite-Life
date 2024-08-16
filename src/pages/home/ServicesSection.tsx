import { treatments, treatmentsIntro } from "../../config/homeConfig.tsx";

export default function ServicesSection() {
  return (
    <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center md:w-full sm:w-10/12 w-8/12">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
          {treatmentsIntro.title}
        </h2>
        <p className="mt-6 text-lg text-left sm:text-center leading-8 text-gray-700">
          {treatmentsIntro.description}
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none flex items-center justify-center  ">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none w-9/12 md:w-10/12 xl:w-full lg:grid-cols-3 ">
          {treatments.map((feature) => (
            <div key={feature.title} className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className=" flex items-center justify-between ">
                  <img
                    src={"bowen1.jpg"}
                    alt={feature.title}
                    className="md:aspect-[3/2] rounded sm:rounded-2xl object-cover"
                  />
                </div>
                <h3 className="mt-2 p-6 text-center text-2xl text-gray-800 lg:p-8">
                  {feature.title}
                </h3>
              </dt>
              <dd className="mt-1 flex flex-auto flex-col items-center text-base leading-7 text-gray-700">
                <div className=" px-6 sm:w-full sm:px-0">
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
