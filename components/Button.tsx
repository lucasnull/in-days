import { ButtonHTMLAttributes } from "react";
import style from "../styles/Button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
}

export const Button: React.FC<Props> = (props) => {
  const { children, variant, ...otherProps } = props;
  const buttonVariant = variant || "primary";

  return (
    <button className={style[`button__${buttonVariant}`]} type="button" {...otherProps}>
      {children}
    </button>
  );
};
