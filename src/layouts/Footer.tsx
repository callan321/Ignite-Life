import { address, email, hours, phone } from "../config.ts";
import BlueLink from "../components/BlueLink.tsx";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-white">
      <div className="lg:w-3/4">
        <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex h-56 w-56 items-center justify-center overflow-hidden">
            <img
              src="/slogan.png"
              alt="Ignite Life Slogan"
              style={{
                transform: "scale(1.5)",
              }}
            />
          </div>
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
          <div className="flex w-full flex-col pl-8">
            <div className="flex flex-col space-y-2 text-xs">
              <h3 className="text-sm font-medium">Contact details</h3>
              <BlueLink name={phone.phone} href={phone.href} text={"P"} />
              <BlueLink name={email.email} href={email.href} text={"E"} />

              <div className="space-y-1">
                <p>{address.street}</p>
                <p>{`${address.city}, ${address.state}`}</p>
                <p>
                  <BlueLink href={address.href} name={"Get Directions"} />
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col pl-8">
            <div className="flex flex-col space-y-2 text-xs">
              <h3 className="text-sm font-medium">Newsletter</h3>
              <p>Coming Soon...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16 w-full">
        <p className="text-center text-xs leading-5 text-gray-500">
          &copy; Ignite Life Bowen Therapy
        </p>
      </div>
    </footer>
  );
}
