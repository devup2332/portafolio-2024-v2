import { z } from "zod";

export interface IContactSchema {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  message: string;
}

export const ContactSchema: z.ZodType<IContactSchema> = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  message: z.string(),
});

export type ContactSchemaType = z.infer<typeof ContactSchema>;
