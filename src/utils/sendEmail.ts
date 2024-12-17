import { IContactSchema } from "@/schemas/contactSchema";
import { fetchAPI } from "./fetch";

export const sendMail = async (message: IContactSchema) => {
  return await fetchAPI("/api/contact/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
};
