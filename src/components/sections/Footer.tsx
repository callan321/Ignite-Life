import { copyright } from "../../config/config.ts";
import IconList from "../ui/IconList.tsx";
import { contactDetails } from "../../config/contactConfig.tsx";

export default function Footer() {
  return (
    <footer
      className="flex w-full flex-col items-center justify-center"
      role="contentinfo"
    >
      <div className="flex w-full items-center justify-center sm:w-11/12 xl:w-10/12">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-x-16">
          <div className="flex w-full items-center justify-center">
            <img
              src="/slogan.png"
              alt="Ignite Life Slogan"
              className="h-96 w-96 object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-center lg:pt-20">
            <div className="w-48 space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
                Newsletter
              </h3>
              <IconList items={contactDetails} />
            </div>
          </div>
          <div className="flex flex-col items-center pt-12 lg:pt-20">
            <div className="w-48 space-y-2">
              <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
                Newsletter
              </h3>
              <p className="">Coming soon...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-16 w-full">
        <span className="flex items-center justify-center text-xs leading-5 text-gray-500">
          {copyright}
        </span>
      </div>
    </footer>
  );
}
