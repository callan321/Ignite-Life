import Meta from "../utils/Meta.tsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Meta
        title={"Ignite Life - Transformative Bowen Therapy"}
        description={
          "Discover the transformative benefits of Bowen Therapy at Ignite Life. Our holistic approach promotes relaxation, alleviates pain, and enhances overall well-being. Join us to experience a natural path to health and vitality."
        }
        keywords={
          "Bowen Therapy, holistic healing, pain relief, relaxation, overall well-being, natural health, Ignite Life"
        }
      />

      <div className="flex w-full flex-col">
        <div className="bg-gray-200">
          <div className="relative isolate overflow-hidden pt-14">
            <img
              alt=""
              src="/slogan.png"
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-800 ring-1 ring-black/10 hover:ring-black/20">
                  Be sure to check out our upcoming events.{" "}
                  <Link
                    to="/retreats-groups"
                    className="font-semibold text-black"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    See More <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
                  Ignite Life
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-900">
                  Discover the transformative benefits of Bowen Therapy at
                  Ignite Life. Our holistic approach promotes relaxation,
                  alleviates pain, and enhances overall well-being. Join us to
                  experience a natural path to health and vitality.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="https://ignite-life-bowen-therapy.square.site"
                    className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              />
            </div>
          </div>
        </div>

        <div className="overflow-hidden bg-white py-32">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Bowen Therapy
                </h2>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  Bowen Therapy is a gentle non-invasive holistic treatment that
                  treats the whole person and aims to treat the cause of
                  problems, rather than the symptoms, relieve pain and dis-ease
                  of the body. Bowen Therapy is gentle and relaxing and does not
                  use forceful manipulation and is safe to use on anyone, from
                  newborns to the elderly.
                </p>
                <blockquote className="mt-6 border-l-4 border-gray-300 bg-gray-50 p-4 text-base leading-7 text-gray-600">
                  I have a lifelong obsession in caring for the mind, body and
                  soul. So, no surprises there that my chosen profession is to
                  help people improve their quality of life. After all in my
                  view holistic care and wellbeing is the key to living your
                  best life!
                </blockquote>
                <div className="mt-6 flex">
                  <Link
                    to="/about"
                    className="text-sm font-semibold leading-6 text-gray-600"
                  >
                    Learn More <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    alt=""
                    src="/slogan.png"
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                      alt=""
                      src="/slogan.png"
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      alt=""
                      src="/slogan.png"
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      alt=""
                      src="/slogan.png"
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
