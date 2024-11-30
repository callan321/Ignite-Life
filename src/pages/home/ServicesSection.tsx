import { treatments, treatmentsIntro } from "../../config/homeConfig.tsx";

export default function ServicesSection() {
  return (
    <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 lg:px-8">
      <div className="mx-auto w-8/12 max-w-2xl text-center sm:w-10/12 md:w-full">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
          {treatmentsIntro.title}
        </h2>
        <p className="mt-6 text-left text-lg leading-8 text-gray-700 sm:text-center">
          {treatmentsIntro.description}
        </p>
      </div>
      <div className="mx-auto mt-16 flex max-w-2xl items-center justify-center sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid w-9/12 max-w-xl grid-cols-1 gap-x-8 gap-y-16 md:w-10/12 lg:max-w-none lg:grid-cols-3 xl:w-full">
          {treatments.map((feature) => (
            <div key={feature.title} className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="    flex items-center justify-between"
                >
                  <img
                    style={{
                      borderTopLeftRadius: "50%",
                      borderTopRightRadius: "50%",
                      borderBottomLeftRadius: "2%",
                      borderBottomRightRadius: "2%"
                    }}
                    src={"bowen1.jpg"}
                    alt={feature.title}
                    className=" object-cover subtle-hover-effect shadow-2xl md:aspect-[3/2]"
                  />
                </div>
                <h3 className="mt-2 p-6 text-center text-2xl text-gray-800 lg:p-8">
                  {feature.title}
                </h3>
              </dt>
              <dd className="mt-1 flex flex-auto flex-col items-center text-base leading-7 text-gray-700">
                <div className="px-6 sm:w-full sm:px-0">
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
