import { Email, Facebook, Instagram, Location, Phone } from "../components/Icons.tsx";
import { address, email, facebook, hours, instagram, phone } from "../config.ts";
import { Link } from "react-router-dom";
import Meta from "../utils/Meta.tsx";

const contactDetails = [
  {
    type: "Phone",
    icon: <Phone />,
    href: phone.href,
    value: <>{phone.phone}</>,
  },
  {
    type: "Email",
    icon: <Email />,
    href: email.href,
    value: <>{email.email}</>,
  },
  {
    type: "Facebook",
    icon: <Facebook />,
    href: facebook.href,
    value: <>{facebook.name}</>,
  },
  {
    type: "Instagram",
    icon: < Instagram />,
    href: instagram.href,
    value: <>{instagram.name}</>,
  },
];

const Hours = () => (
  <div className="flex w-full flex-col pl-8">
    <div className="space-y-0.5">
      {hours.map((item) => (
        <div key={item.day} className="text-left text-xs">
          <div className="font-medium">{item.day}</div>
          <div>{item.hours}</div>
        </div>
      ))}
    </div>
  </div>
);

const ContactInfo = () => {
  return (
    <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
      {contactDetails.map((detail, index) => (
        <div key={index} className="flex gap-x-4">
          <dt className="flex-none">
            <Link to={detail.href}>
            <span className="sr-only">{detail.type}</span>
            {detail.icon}
            </Link>
          </dt>
          <dd>
            <Link className="hover:text-gray-900" to={detail.href}>
              {" "}
              {detail.value}
            </Link>
          </dd>
        </div>
      ))}
    </dl>
  );
};

const ContactForm = () => (
  <form
    action="#"
    method="POST"
    className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
  >
    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Name
          </label>
          <div className="mt-2.5">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="phone-number"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Phone Number
          </label>
          <div className="mt-2.5">
            <input
              id="phone-number"
              name="phone-number"
              type="tel"
              autoComplete="tel"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Message
          </label>
          <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send message
        </button>
      </div>
    </div>
  </form>
)

export default function Contact() {
  return (
    <>
      <Meta
        title={"Ignite Life - Contact Us"}
        description={
          "Get in touch with Ignite Life for inquiries about Bowen Therapy or general questions. Contact us through our form, phone, email, or social media."
        }
        keywords={
          "Contact Ignite Life, Bowen Therapy inquiries, get in touch, contact form, phone, email, social media"
        }
      />
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Get in touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have a question about bowen therapy or a general inquiry? Leave us
              a message or contact us on social media.
            </p>
            <ContactInfo />
          </div>
        </div>
        <ContactForm />
        <Hours/>
        <div>

          <Location/>
          <br/>
          {address.street},
          <br />
          {address.city}, {address.postcode},
          <br />
          {address.state}
        </div>
      </div>
    </div>
    </>
  );
}
