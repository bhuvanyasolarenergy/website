import { company } from "@/assets/data/company";

const WhatsAppFloating = () => {
  return (
    <a
      href={company.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-floating"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppFloating;
