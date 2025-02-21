import { Button, ButtonProps } from "@/components/UI/button";
import { twMerge } from "tailwind-merge";

const CustomButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      className={twMerge(
        "rounded-full w-fit py-6 px-6 text-sm transition-all",
        props.className,
      )}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
