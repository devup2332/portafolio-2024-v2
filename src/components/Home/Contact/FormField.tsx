import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";
import { Textarea } from "@/components/UI/textarea";
import { cn } from "@/lib/utilities";
import { ContactSchemaType } from "@/schemas/contactSchema";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { useTranslation } from "react-i18next";

type FormFieldProps = {
  label: string;
  type: string;
  name: keyof ContactSchemaType;
  placeholder: string;
  required: boolean;
  error?: string;
  className?: string;
  register: UseFormRegister<ContactSchemaType>;
};

const FormField: React.FC<FormFieldProps> = (props) => {
  const { t } = useTranslation();
  const { register, className, label, type, name, placeholder, error } = props;
  return (
    <div
      className={cn("grid gap-3", type === "textarea" ? "lg:col-span-2" : "")}
    >
      <Label>{t(label)}</Label>
      {type !== "textarea" ? (
        <Input
          type={type}
          placeholder={t(placeholder)}
          className={cn(error && "border-red-500", className)}
          {...register(name, {
            required: {
              message: "required",
              value: true,
            },
          })}
        />
      ) : (
        <>
          <Textarea
            id={name}
            placeholder={t(placeholder)}
            className={cn("resize-none h-60", error && "border-red-500")}
            rows={10}
            {...register(name)}
          ></Textarea>
        </>
      )}
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default FormField;
