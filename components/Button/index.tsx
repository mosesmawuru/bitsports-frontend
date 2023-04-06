export enum butonTypes {
  button = "button",
  submit = "submit",
  reset = "reset",
}

export enum variantTypes {
  primary = "primary",
  secondary = "secondary",
  outline = "outline",
}

export enum volumeTypes {
  sm = "sm",
  md = "md",
  lg = "lg",
}

interface IPNSButton {
  text: string;
  variant?: variantTypes | string;
  type?: butonTypes;
  onClick?: () => void;
  disabled?: boolean;
  px?: string;
  textVol?: volumeTypes;
  isWavy?: boolean;
}
const Button = ({
  text,
  variant = variantTypes.primary,
  type = butonTypes.button,
  onClick,
  disabled,
  px = "px-6",
  textVol = volumeTypes.md,
  isWavy,
}: IPNSButton) => {
  return (
    <>
      <button
        disabled={disabled}
        type={type}
        className={`flex rounded justify-center hover:opacity-70 duration-500 items-center py-2.5 ${
          isWavy && "wavy"
        } ${px} ${
          variant === "primary"
            ? "bg-secondary-50 border-secondary-50"
            : variant === "secondary"
            ? "bg-secondary-150 border-secondary-150"
            : variant === "outline"
            ? "bg-black border border-secondary-50"
            : ""
        }`}
        onClick={onClick}
      >
        <div
          className={`text-white font-semibold ${
            textVol === "sm"
              ? "text-sm"
              : textVol === "md"
              ? "lg:text-lg text-base"
              : "text-3xl"
          }`}
        >
          {text}
        </div>
      </button>
    </>
  );
};

export default Button;
