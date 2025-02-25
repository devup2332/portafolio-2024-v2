import { z } from "zod";

export const ContactSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name is required",
  }),
  lastName: z.string().min(1, {
    message: "Last name is required",
  }),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  phone: z
    .string()
    .min(1, {
      message: "Phone is required",
    })
    .transform((val) => parseInt(val)),

  message: z.string().min(1, {
    message: "Message is required",
  }),
});

export type ContactSchemaType = z.infer<typeof ContactSchema>;
