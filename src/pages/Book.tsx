import { treatments } from "../config/config.ts";
import Meta from "../utils/Meta.tsx";

export default function Book() {
  return (
    <>
      <Meta
        title={"Ignite Life - Book a Session"}
        description={
          "Book a session with Ignite Life to experience the transformative benefits of Bowen Therapy. Our holistic treatments promote relaxation, alleviate pain, and enhance overall well-being."
        }
        keywords={
          "Book Bowen Therapy, holistic healing sessions, pain relief appointment, relaxation therapy, Ignite Life booking"
        }
      />
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mx-auto mt-2 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-center sm:text-5xl">
            Bowen Therapy for Everyone
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">
            Experience the healing benefits of Bowen therapy, tailored for all
            ages. Whether it's gentle care for your baby, soothing sessions for
            your child, or comprehensive therapy for adults.
          </p>
          <div className="mt-20 flow-root">
            <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
              {treatments.map((tier) => (
                <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                  <h3
                    id={tier.id}
                    className="text-base font-semibold leading-7 text-gray-900"
                  >
                    {tier.name}
                  </h3>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      {tier.price}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      {tier.duration}
                    </span>
                  </p>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Book now
                  </a>
                  <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">
                    {tier.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <h3 className="mx-auto mt-2 max-w-4xl pt-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-center sm:text-4xl">
            Group Sessions
          </h3>
          <p className="bg-ig mx-auto mt-6 max-w-2xl text-lg leading-10 text-gray-600 sm:text-center">
            <b>Wednesday 9.30am</b>
            <br />
            <i>Specialised Stress and Anxiety Group.</i>
            <br />
            Please contact us to attend a group session
            <br />
            More coming soon...
          </p>
        </div>
      </div>
    </>
  );
}
