import { constructMetadata } from "@/lib/metadata";
import ContactClient from "@/components/ContactClient";

export const metadata = constructMetadata({
  title: "Contact | Muthuvel",
  description: "Get in touch with Muthuvel for collaborations or job opportunities.",
});

export default function ContactPage() {
  return <ContactClient />;
}
