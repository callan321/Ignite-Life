import { address, email, hours, phone } from "../config.ts";
import { Link } from "react-router-dom";

function BlueLink({
  name,
  href,
  text,
}: {
  name: string;
  href: string;
  text?: string;
}) {
  return (
    <Link to={href} target="_blank" rel="noopener noreferrer">
      <span className="font-normal">
        {`${text}:   `}
        <span className="text-blue-500 hover:text-blue-600 hover:underline">
          {name}
        </span>
      </span>
    </Link>
  );
}

const DividingLine = () => (
  <div className="w-3/4 p-8">
    <hr className="border-b-0 border-gray-300" />
  </div>
);

const Slogan = () => (
  <div className="flex h-36 items-center justify-center overflow-hidden">
    <img
      src="/slogan.png"
      alt="Ignite Life Slogan"
      className="w-44 scale-150"
      loading="lazy"
    />
  </div>
);

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

const ContactDetails = () => (
  <div className="flex w-full flex-col pl-8 space-y-2 text-xs ">
      <h3 className="text-sm font-medium">Contact details</h3>
      <BlueLink name={phone.phone} href={phone.href} text={"P"} />
      <BlueLink name={email.email} href={email.href} text={"E"} />
      <div className="space-y-1">
        <p>{`${address.street}, ${address.city}`}</p>
        <p>{`${address.state}`}</p>
        <p>
          <BlueLink href={address.href} name={"Get Directions"} />
        </p>
      </div>
  </div>
);

const Newsletter = () => (
  <div className="flex w-full flex-col pl-8 space-y-2 text-xs">
      <h3 className="text-sm font-medium">Newsletter</h3>
      <p>Coming Soon...</p>
  </div>
);

export default function Footer() {
  return (
    <footer
      className="flex w-full flex-col items-center justify-center bg-white"
      role="contentinfo"
    >
      <DividingLine />
      <div className="lg:w-3/4">
        <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Slogan />
          <Hours />
          <ContactDetails />
          <Newsletter />
        </div>
      </div>
      <DividingLine />
      <div className="mb-16 w-full">
        <p className="text-center text-xs leading-5 text-gray-500">
          &copy; Ignite Life Bowen Therapy
        </p>
      </div>
    </footer>
  );
}
