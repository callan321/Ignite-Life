const tiers = [
  {
    name: 'Baby Bowen',
    id: 'under 3s',
    href: 'https://book.squareup.com/appointments/occ9h4nxjya007/location/LAD6P3NX6CZA4/services/HNVJ3IH4QUG3JOU2DQTO2ENF',
    price: '$40',
    duration: '20 mins',
    description: 'Gentle therapy tailored for infants to address common discomforts.',
  },
  {
    name: 'Children',
    id: 'ages 3-12',
    href: 'https://book.squareup.com/appointments/occ9h4nxjya007/location/LAD6P3NX6CZA4/services/DNIKMNGGLBTZ4TEVVKOYGAHQ',
    price: '$65',
    duration: '30 mins',
    description: 'Therapeutic sessions for children, promoting relaxation and healing.',
  },
  {
    name: 'Adult',
    id: '',
    href: 'https://book.squareup.com/appointments/occ9h4nxjya007/location/LAD6P3NX6CZA4/services/G4GQM7NM5C2CYHKDBJBBJOWO',
    price: '$85',
    duration: '1 hr',
    description: 'Comprehensive Bowen therapy for adults to relieve pain and stress.',
  },
];


export default function Book() {
  return (
    <div className="bg-white pt-16 sm:pt-24 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Bowen Therapy for Everyone
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">
          Experience the healing benefits of Bowen therapy, tailored for all ages. Whether it's gentle care
          for your baby, soothing sessions for your child, or comprehensive therapy for adults.
        </p>
        <div className="mt-20 flow-root">
          <div
            className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
            {tiers.map((tier) => (
              <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <h3 id={tier.id} className="text-base font-semibold leading-7 text-gray-900">
                  {tier.name}
                </h3>
                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span
                                      className="text-5xl font-bold tracking-tight text-gray-900">{tier.price}</span>
                  <span
                    className="text-sm font-semibold leading-6 text-gray-600">{tier.duration}</span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Book now
                </a>
                <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">{tier.description}</p>

              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Group Sessions
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Wednesday 9.30am
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Specialised Stress and Anxiety Group.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Please contact us to attend a group session<br/>More coming soon...
        </p>
      </div>
    </div>
    </div>
  )
}