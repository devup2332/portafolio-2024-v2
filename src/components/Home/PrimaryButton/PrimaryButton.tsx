import { Button, ButtonProps } from "@/components/UI/button";
import { twMerge } from "tailwind-merge";

const PrimaryButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      className={twMerge(
        "bg-primary-color rounded-full w-fit py-6 px-6 text-sm text-white boxShadow transition-all",
        props.className
      )}
    >
      {props.children}
    </Button>
  );
};

export default PrimaryButton;
