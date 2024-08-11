import { Email, Facebook, Instagram, Phone } from "../components/Icons.tsx";
import { email, facebook, hours, instagram, phone } from "../config.ts";
import Meta from "../utils/Meta.tsx";
import IconList from "../components/IconList.tsx";
import DoubleList from "../components/DoubleList.tsx";
import ContactForm from "../components/ContactForm.tsx";
import Container from "../components/Container.tsx";

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
    icon: <Instagram />,
    href: instagram.href,
    value: <>{instagram.name}</>,
  },
];

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
          <Container>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Get in touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have a question about bowen therapy or a general inquiry? Leave us
              a message or contact us on social media.
            </p>
            <div className="pt-8">
              <IconList items={contactDetails} />
            </div>
          </Container>
          <Container>
            <ContactForm />
          </Container>
          <Container>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Open Hours
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Curious about our open hours? Check our schedule below, and reach
              out if you need any additional information.
            </p>
            <div className="pt-8">
              <DoubleList items={hours.map(({ day, hours }) => [day, hours])} />
            </div>
          </Container>
          <Container>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.863749618485!2d153.5940622!3d-28.813133900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b907e173f2167ab%3A0xf57717e990379006!2s10%20Granite%20St%2C%20Lennox%20Head%20NSW%202478!5e0!3m2!1sen!2sau!4v1723341407364!5m2!1sen!2sau"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Container>
        </div>
      </div>
    </>
  );
}
