import { z } from "zod";

export const ContactSchema = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  message: z.string(),
});

export type ContactSchemaType = z.infer<typeof ContactSchema>;
