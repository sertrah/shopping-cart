import { FC } from "react";
import "./style.scss";

const Pill: FC<{ className?: string, text: string }> = ({ className = "", text }) => {
  return <div className={`${className} pill`}>
    <p className="pill__text">{text}</p>
  </div>;
};

export default Pill;
