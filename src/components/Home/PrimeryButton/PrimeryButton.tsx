import { Button, ButtonProps } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";

const PrimaryButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      className={twMerge(
        "bg-primary-color rounded-full w-fit py-6 px-6 text-sm boxShadow text-white hover:bg-green-700",
        props.className
      )}
    >
      {props.children}
    </Button>
  );
};

export default PrimaryButton;
