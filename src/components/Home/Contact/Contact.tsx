import { useTranslation } from "react-i18next";
import CustomButton from "@/components/Home/CustomButton/CustomButton";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, ContactSchemaType } from "@/schemas/contactSchema";
import { toast } from "sonner";
import { useState } from "react";
import { LoaderIcon } from "@/components/Icons";
import { motion } from "motion/react";
import { goToSection, sendMail } from "@/utils/methods";
import FormField from "./FormField";

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
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(ContactSchema),
  });
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = async (message) => {
    try {
      setLoading(true);
      await sendMail(message as ContactSchemaType);
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
      reset();
      toast.custom(() => (
        <div className="px-5 py-3 rounded-md bg-primary-bg border-border border-2">
          <h1 className="text-base font-bold text-red-500">
            {t("home.contact.toast.error.title")}
          </h1>
          <p className="text-sm">
            {(err as Error).message || t("home.contact.toast.error.body")}
          </p>
        </div>
      ));
    }
  };

  const onError = () => {
    const val = getValues();
    console.log({ val });
    console.log({ errors });
  };
  console.log({ errors });

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
        ease: "easeOut",
      }}
      viewport={{
        once: true,
      }}
    >
      <h1 className="text-primary-color text-4xl font-bold text-center lg:text-6xl">
        {t("home.contact.title")}
      </h1>
      <form
        className="grid gap-5 mt-14 lg:grid-cols-2 max-w-2xl m-auto lg:gap-10"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        {inputs.map((input, index) => (
          <FormField
            label={input.label}
            type={input.type}
            name={input.name}
            register={register}
            error={errors[input.name] && errors[input.name]?.message}
            placeholder={input.placeholder}
            className="h-10"
            required={input.required}
            key={index}
          />
        ))}
        <CustomButton
          type="submit"
          className="w-full lg:w-56 lg:col-start-1 lg:col-end-3 lg:justify-self-center gap-2"
          disabled={loading}
        >
          {loading && <LoaderIcon className="animate-spin h-6 w-6" />}
          {t("home.contact.form.button")}
        </CustomButton>
      </form>
      <h2 className="text-base text-center mt-10 lg:mt-32">
        <span className="text-text-color-2">{t("home.footer.text")}</span>{" "}
        <button
          onClick={() => goToSection("banner")}
          className="font-bold cursor-pointer hover:text-primary-color transition-colors outline-none"
        >
          {t("home.footer.name")}
        </button>
      </h2>
    </motion.div>
  );
};

export default ContactHome;
