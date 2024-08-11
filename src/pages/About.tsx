import Meta from "../utils/Meta.tsx";

export default function About() {
  return (
    <>
      <Meta
        description={
          "Learn more about Ignite Life and our dedication to holistic care and wellbeing through Bowen Therapy. Discover how our treatments can improve your quality of life."
        }
        keywords={
          "About Ignite Life, Bowen Therapy, holistic care, wellbeing, health improvement, Heather, holistic healing"
        }
        title={"Ignite Life - About Us"}
      />
      <div className="flex w-full flex-col">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Ignite Life Bowen Therapy
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Transforming lives with holistic healing and natural
                    wellness.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        alt=""
                        src="/slogan.png"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt=""
                        src="/slogan.png"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src="/slogan.png"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        alt=""
                        src="/slogan.png"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src="/slogan.png"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
          <div
            aria-hidden="true"
            className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
          >
            <div
              style={{
                clipPath:
                  "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
              }}
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How Bowen Works
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Bowen Therapy is a gentle, holistic treatment that works on the
                soft connective tissue of the body. This technique uses subtle
                inputs, known as "moves," which stimulate the body to initiate
                its self-healing process. Unlike other forms of manipulation,
                Bowen Therapy is non-invasive and allows the body to reset and
                heal naturally.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
              <div className="relative space-y-36 lg:order-last lg:col-span-5">
                <figure className="border-l border-indigo-600 pl-8 hover:scale-110 hover:cursor-pointer">
                  <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                    <p>“This is where our favourite testimonial will go.”</p>
                  </blockquote>
                  <figcaption className="mt-8 flex gap-x-4">
                    <img
                      alt=""
                      src="/slogan.png"
                      className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <div className="font-semibold text-gray-900">Evvone</div>
                      <div className="text-gray-600">Nurse</div>
                    </div>
                  </figcaption>
                </figure>
                <figure className="border-l border-indigo-600 pl-8 hover:scale-110 hover:cursor-pointer">
                  <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                    <p>
                      “And we will have another one that will follow as we
                      scroll down.”
                    </p>
                  </blockquote>
                  <figcaption className="mt-8 flex gap-x-4">
                    <img
                      alt=""
                      src="/slogan.png"
                      className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <div className="font-semibold text-gray-900">Evvone</div>
                      <div className="text-gray-600">Nurse</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  How Bowen Works
                </h2>
                <p>
                  Bowen Therapy involves small, precise movements over muscles,
                  tendons, and ligaments. These moves are designed to
                  communicate with the nervous system, encouraging the body to
                  relax, reset muscle tension, improve range of motion, and
                  enhance lymphatic drainage and detoxification. The technique
                  is performed in sequences with breaks in between, allowing the
                  body to respond and integrate the treatment effectively
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Benefits of Bowen Therapy
                </h2>
                <p className="mt-8">
                  Bowen Therapy can provide relief for a variety of conditions,
                  both acute and chronic. Some of the key benefits include:
                </p>
                <ul className="ml-4 mt-4 list-inside list-disc">
                  <li>
                    <strong>Pain Relief</strong>: Effective for musculoskeletal
                    issues, including back, neck, and shoulder pain.
                  </li>
                  <li>
                    <strong>Increased Mobility</strong>: Improves joint function
                    and reduces stiffness.
                  </li>
                  <li>
                    <strong>Stress Reduction</strong>: Promotes relaxation and
                    reduces emotional and mental stress.
                  </li>
                  <li>
                    <strong>Enhanced Healing</strong>: Assists in the recovery
                    from injuries and surgeries by supporting the body's natural
                    healing mechanism.
                  </li>
                </ul>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Who can Benefit
                </h2>
                <p className="mt-6">
                  Bowen Therapy is suitable for people of all ages, from
                  newborns to the elderly. It is beneficial for a wide range of
                  conditions, such as:
                </p>
                <ul className="ml-4 mt-4 list-inside list-disc">
                  <li>Back and skeletal issues</li>
                  <li>Digestive problems</li>
                  <li>Respiratory conditions</li>
                  <li>Sports injuries</li>
                  <li>Chronic pain</li>
                  <li>Stress and anxiety</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              aria-hidden="true"
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            >
              <defs>
                <pattern
                  x="50%"
                  y={-1}
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                width="100%"
                height="100%"
                strokeWidth={0}
              />
            </svg>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    About Me
                  </h1>
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                    I have a lifelong obsession in caring for the mind, body and
                    soul. So, no surprises there that my chosen profession is to
                    help people improve their quality of life. After all in my
                    view holistic care and wellbeing is the key to living your
                    best life!
                  </p>
                </div>
              </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="/slogan.png"
                className="w-[36rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                  <p>
                    The intriguing healing modality of Bowen Therapy was
                    introduced to me on weekend away with friends which became a
                    pivotal turning point in my life. One friend was enduring a
                    painful flare up from a reoccurring and debilitating back
                    problem. As stories often happen, series of fortuitous
                    events led to a Bowen Therapist joining us, who kindly
                    offered our friend a treatment - her healing response was
                    beyond amazing, enabling her to join all the planned
                    activities completely pain free.
                  </p>
                  <p className="mt-8">
                    Fast forward several years of study and the pursuit to
                    become Specialised Bowen Therapist with a practice is well
                    and truly actualised. To have people seek me out for help is
                    an honour and to observe their quality of life improve is
                    pure joy. It is the most rewarding and important work I have
                    ever experienced. While my work is fulfilling, I ensure to
                    also maintain my own life harmony by spending time in
                    natural environments, connecting with loved ones or hanging
                    with my dog. Of course, these activities are accompanied
                    with body balance from my Bowen Therapist from time to time.
                  </p>
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    Still not convinced?
                  </h2>
                  <p className="mt-6">
                    Take a look at the testimonials below to see firsthand
                    accounts of how Bowen Therapy has transformed lives. These
                    powerful stories of healing and relief may inspire you to
                    experience the benefits of Bowen Therapy for yourself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-36 sm:flex-row sm:flex-wrap sm:justify-center">
          <div className="h- flex w-full items-center justify-center overflow-hidden p-8 sm:w-1/2 md:w-1/3">
            <div className="rounded-3xl border-4 p-4">
              <p>
                What can I say, Heather fixed my knee! I damaged my arcuate
                ligament 10yrs ago and had it operated on. Since then I had a
                limp and pain ranging from mild to chronic. From the very first
                treatment I had relief, so decided to commit to more visits.
                Several sessions later.. pain free! I now continue to see
                Heather to stay well. Heather is caring and a professional Bowen
                Therapist, I would recommend her in a heartbeat to anyone in
                pain or looking for a holistic way to maintain their health.
              </p>
              <p>EVONNE</p>
              <p>NURSE</p>
            </div>
          </div>
          <div className="flex h-96 w-full items-center justify-center p-8 sm:w-1/2 md:w-1/3">
            <div className="rounded-3xl border-4 p-4">
              <h3>What my clients say!</h3>
            </div>
          </div>
          <div className="flex h-96 w-full items-center justify-center overflow-hidden p-8 sm:w-1/2 md:w-1/3">
            <div className="rounded-3xl border-4 p-4">
              <p>
                Bowen Therapy was recommended to me for my Chronic Sinusitis. I
                was sceptical but hopeful. WOW, my healing was truly amazing and
                I am eternally grateful for Heather’s work. I endured Chronic
                Sinusitis for 7yrs, nothing helped. Breathing was difficult and
                after 5pm every day was really distressing. Within days of my
                first session there was a huge improvement in my breathing, I
                was feeling 75% better. Each session continued to improve my
                health. I actually don’t even suffer from Sinusitis anymore but
                I go to Bowen once a month now to stay well.
              </p>
              <p>ROSIE</p>
              <p>ARCHITECT</p>
            </div>
          </div>
          <div className="flex h-96 w-full items-center justify-center overflow-hidden bg-pink-200 p-8 sm:w-1/2 md:w-1/3">
            <div className="rounded-3xl border-4 p-4">
              <p>
                I am so grateful to find Bowen Therapy with Heather. I decided
                to try it for my Multiple Sclerosis because I read an article
                saying that Bowen Therapy can help relieve MS symptoms. Also my
                sister see’s Heather for her back. Turns out, Bowen Therapy does
                help, a lot! My Bowen sessions with Heather definitely
                contributes to feeling pain relief, leg strength, energy,
                improved sleep and other forms of relief. I feel very relaxed
                and safe during my treatments with Heather. I highly recommend
                her.
              </p>
              <p>CINDY</p>
              <p>ARTIST</p>
            </div>
          </div>
          <div className="flex h-96 w-full items-center justify-center overflow-hidden bg-blue-200 p-8 sm:w-1/2 md:w-1/3">
            <div className="rounded-3xl border-4 p-4">
              <p>
                I have been seeing Heather on and off for a few years. Bowen has
                really helped my neck tension and pain I get from stress and
                work. I have found Bowen Therapy has also helped with my overall
                physical and mental well-being. Heather’s treatments are so good
                that I only go 2 to 3 times then I don’t need to go back for
                months.
              </p>
              <p>JEN</p>
              <p>CHEF</p>
            </div>
          </div>
          <div className="flex h-96 w-full items-center justify-center overflow-hidden bg-gray-400 p-8 sm:w-1/2 md:w-1/3">
            <div className="rounded-3xl border-4 p-4">
              <p>
                Bowen Therapy was recommended to me for my Chronic Sinusitis. I
                was sceptical but hopeful. WOW, my healing was truly amazing and
                I am eternally grateful for Heather’s work. I endured Chronic
                Sinusitis for 7yrs, nothing helped. Breathing was difficult and
                after 5pm every day was really distressing. Within days of my
                first session there was a huge improvement in my breathing, I
                was feeling 75% better. Each session continued to improve my
                health. I actually don’t even suffer from Sinusitis anymore but
                I go to Bowen once a month now to stay well.
              </p>
              <p>ROSIE</p>
              <p>ARCHITECT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
