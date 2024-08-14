import {
  Email,
  Facebook,
  Instagram,
  Location,
  Phone,
} from "../components/ui/Icons.tsx";
import { phone, email, address, facebook, instagram } from "./config.ts";

export const contactDetails = [
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
    type: "Location",
    icon: <Location />,
    href: address.href,
    value: (
      <>
        {address.city}, {address.state}
      </>
    ),
  },
  {
    type: "Facebook",
    icon: <Facebook />,
    href: facebook.href,
    value: <>{facebook.name}</>,
  },
  {
    type: "Instagram",
    icon: <Instagram />,
    href: instagram.href,
    value: <>{instagram.name}</>,
  },
];
