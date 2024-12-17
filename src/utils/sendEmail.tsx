import { IContactSchema } from "@/schemas/contactSchema";

const apikey = import.meta.env.VITE_MAILER_API_KEY || "";
const templateId = import.meta.env.VITE_TEMPLATE_ID || "";
export const sendEmail = async (message: IContactSchema) => {
  console.log({
    apikey,
    templateId,
    message,
  });
  const res = await fetch("https://api.mailersend.com/v1/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apikey}`,
      "X-Requested-With": "XMLHttpRequest",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      template_id: templateId,
      from: {
        email: "info@domain.com",
      },
      to: [
        {
          email: "devup2332@gmail.com",
        },
      ],
      personalization: [
        {
          email: "devup2332@gmail.com",
          data: {
            full_name: `${message.firstName} ${message.lastName}`,
            message_body: message.message,
            message_email: message.email,
            message_phone: message.phone,
          },
        },
      ],
    }),
  });

  return await res.json();
};
