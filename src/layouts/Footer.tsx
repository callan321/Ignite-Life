import { address, email, hours, phone } from "../config.ts";
import { Slogan } from "../components/Slogan.tsx";
import BlueLink from "../components/BlueLink.tsx";

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
  <div className="flex w-full flex-col space-y-2 pl-8 text-xs">
    <h3 className="text-sm font-medium">Contact details</h3>
    <BlueLink name={phone.phone} href={phone.href} />
    <BlueLink name={email.email} href={email.href} />
    <h3 className="text-sm font-medium">Address</h3>
    <div className="space-y-1">
      <p>{`${address.street},`}</p>
      <p>{`${address.city},`}</p>
      <p>{`${address.state}`}</p>
    </div>
    <BlueLink href={address.href} name={"Get Directions"} />
  </div>
);

const Newsletter = () => (
  <div className="flex w-full flex-col space-y-2 pl-8 text-xs">
    <h3 className="text-sm font-medium">Newsletter</h3>
    <p>Coming Soon...</p>
  </div>
);

function Copyright({ className }: { className: string }) {
  return (
    <div className={className}>
      <span className="flex items-center justify-center text-xs leading-5 text-gray-500">
        &copy; Ignite Life Bowen Therapy
      </span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="flex w-full flex-col items-center justify-center bg-white"
      role="contentinfo"
    >
      <div className="lg:w-3/4">
        <div className="mx-auto grid grid-cols-1 gap-4 divide-x divide-gray-100 sm:grid-cols-2 lg:grid-cols-4">
          <Slogan />
          <Hours />
          <ContactDetails />
          <Newsletter />
        </div>
      </div>

      <Copyright className="mb-16 w-full" />
    </footer>
  );
}
