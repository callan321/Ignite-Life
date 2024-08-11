import { address, email, facebook, instagram, phone, copyright } from "../config.ts";
import { Slogan } from "../components/Slogan.tsx";
import BlueLink from "../components/BlueLink.tsx";
import { Facebook, Instagram } from "../components/Icons.tsx";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface FooterSectionProps {
  title: string;
  children: ReactNode;
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
    <FooterSection title="Address">
      <div className="space-y-1">
        <p>{`${address.street},`}</p>
        <p>{`${address.city},`}</p>
        <p>{`${address.state}`}</p>
      </div>
      <BlueLink href={address.href} name={"Get Directions"} />
    </FooterSection>
  );
}

function ContactDetails() {
  return (
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
  );
}

function Newsletter() {
  return (
    <FooterSection title="Newsletter">
      <p>Coming Soon...</p>
    </FooterSection>
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
      <div className="lg:w-3/4">
        <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
