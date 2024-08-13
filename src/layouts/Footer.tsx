import {
  address,
  email,
  facebook,
  instagram,
  phone,
  copyright,
} from "../config.ts";

import BlueLink from "../components/ui/BlueLink.tsx";
import { Facebook, Instagram } from "../components/ui/Icons.tsx";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface FooterSectionProps {
  title: string;
  children: ReactNode;
}

function Slogan() {
  return (
    <div className="flex w-full items-center justify-center overflow-hidden">
      <img
        src="/slogan.png"
        alt="Ignite Life Slogan"
        className="h-96 w-96 object-cover"
        loading="lazy"
      />
    </div>
  );
}

function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className="flex w-full flex-col space-y-2 pl-8 text-xs">
      <h3 className="text-sm font-medium">{title}</h3>
      {children}
    </div>
  );
}

function Address() {
  return (
    <div className="sm:pt-24 xl:pl-8">
      <FooterSection title="Address">
        <div className="space-y-1">
          <p>{`${address.street},`}</p>
          <p>{`${address.city},`}</p>
          <p>{`${address.state}`}</p>
        </div>
        <BlueLink href={address.href} name={"Get Directions"} />
      </FooterSection>
    </div>
  );
}

function ContactDetails() {
  return (
    <div className="lg:pl-24 xl:pl-0 xl:pt-24">
      <FooterSection title="Contact details">
        <BlueLink name={phone.phone} href={phone.href} />
        <BlueLink name={email.email} href={email.href} />
        <div className="flex space-x-2">
          <Link to={facebook.href}>
            <Facebook />
          </Link>
          <Link to={instagram.href}>
            <Instagram />
          </Link>
        </div>
      </FooterSection>
    </div>
  );
}

function Newsletter() {
  return (
    <div className="xl:pt-24">
      <FooterSection title="Newsletter">
        <p>Coming Soon...</p>
      </FooterSection>
    </div>
  );
}

export default function Footer() {
  const sections = [
    { component: <Slogan />, key: "slogan" },
    { component: <Address />, key: "address" },
    { component: <ContactDetails />, key: "contact" },
    { component: <Newsletter />, key: "newsletter" },
  ];

  return (
    <footer
      className="flex w-full flex-col items-center justify-center bg-white"
      role="contentinfo"
    >
      <div className="lg:w-11/12">
        <div className="mx-auto grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-y-0 xl:grid-cols-4">
          {sections.map((section) => (
            <div key={section.key}>{section.component}</div>
          ))}
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
