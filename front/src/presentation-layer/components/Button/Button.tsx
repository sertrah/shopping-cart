import { FC } from "react";
import "./style.scss";

const Button: FC<{
  className?: string;
  children: any;
  onClick?: () => void;
  isDisabled?: boolean;
}> = ({ className = "", children, onClick, isDisabled }) => {
  return (
    <button
      className={`${className} button--large`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
