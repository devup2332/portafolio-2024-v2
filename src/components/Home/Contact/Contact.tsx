import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";
import { Textarea } from "@/components/UI/textarea";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../PrimeryButton/PrimeryButton";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, ContactSchemaType } from "@/schemas/contactSchema";
import { toast } from "sonner";
import { sleep } from "@/utils/sleep";
import { useState } from "react";
import { LoaderIcon } from "@/components/Icons";
import { motion } from "motion/react";
import { sendEmail } from "@/utils/sendEmail";

interface InputType {
  label: string;
  type: string;
  name: "firstName" | "lastName" | "phone" | "email" | "message";
  placeholder: string;
  required: boolean;
}

const inputs: InputType[] = [
  {
    label: "home.contact.form.firstName.label",
    type: "text",
    name: "firstName",
    placeholder: "home.contact.form.firstName.placeholder",
    required: true,
  },
  {
    label: "home.contact.form.lastName.label",
    type: "text",
    name: "lastName",
    placeholder: "home.contact.form.lastName.placeholder",
    required: true,
  },
  {
    label: "home.contact.form.phone.label",
    type: "number",
    name: "phone",
    placeholder: "home.contact.form.phone.placeholder",
    required: true,
  },
  {
    label: "home.contact.form.email.label",
    type: "text",
    name: "email",
    placeholder: "home.contact.form.email.placeholder",
    required: true,
  },
  {
    label: "home.contact.form.message.label",
    type: "textarea",
    name: "message",
    placeholder: "home.contact.form.message.placeholder",
    required: false,
  },
];

const ContactHome = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, reset } = useForm<ContactSchemaType>({
    resolver: zodResolver(ContactSchema),
  });
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = async (message) => {
    try {
      setLoading(true);
      const data = await sendEmail(message as any);
      console.log({ data });
      const random = Math.floor(Math.random() * 2000);
      await sleep(random);
      setLoading(false);
      reset();
      toast.custom(() => (
        <div className="px-5 py-3 rounded-md bg-primary-bg border-border border-2">
          <h1 className="text-base font-bold text-primary-color">
            {t("home.contact.toast.success.title")}
          </h1>
          <p className="text-sm">{t("home.contact.toast.success.body")}</p>
        </div>
      ));
    } catch (err) {
      setLoading(false);
      console.log({ err });
    }
  };

  const onError = () => {};

  return (
    <motion.div
      id="contact"
      initial={{
        translateX: "200px",
        opacity: 0,
      }}
      whileInView={{
        translateX: "0px",
        opacity: 1,
      }}
      transition={{
        delay: 0.5,
        duration: 0.5,
      }}
      viewport={{
        once: true,
        margin: "-200px",
      }}
    >
      <h1 className="text-primary-color text-4xl font-bold text-center lg:text-6xl">
        {t("home.contact.title")}
      </h1>
      <form
        action=""
        className="grid gap-5 mt-14 lg:grid-cols-2 max-w-2xl m-auto lg:gap-10"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        {inputs.map((input, index) =>
          input.type !== "textarea" ? (
            <div key={index} className="grid gap-5">
              <Label className="font-bold" htmlFor={input.name}>
                {t(input.label)}
              </Label>
              <Input
                type={input.type}
                id={input.name}
                placeholder={t(input.placeholder)}
                className="h-12"
                required={input.required}
                {...register(input.name, { required: input.required })}
              />
            </div>
          ) : (
            <div key={index} className="grid gap-5 lg:col-start-1 lg:col-end-3">
              <Label className="font-bold" htmlFor={input.name}>
                {t(input.label)}
              </Label>
              <Textarea
                id={input.name}
                placeholder={t(input.placeholder)}
                rows={10}
                {...register(input.name)}
              ></Textarea>
            </div>
          ),
        )}
        <PrimaryButton
          type="submit"
          className="w-full lg:w-56 lg:col-start-1 lg:col-end-3 lg:justify-self-center gap-2"
        >
          {loading && <LoaderIcon className="animate-spin" />}
          {t("home.contact.form.button")}
        </PrimaryButton>
      </form>
      <h2 className="text-base text-center mt-10 lg:mt-32">
        <span className="text-secondary-text-color">
          {t("home.footer.text")}
        </span>{" "}
        <span className="font-bold cursor-pointer hover:text-primary-color transition-colors">
          {t("home.footer.name")}
        </span>
      </h2>
    </motion.div>
  );
};

export default ContactHome;
