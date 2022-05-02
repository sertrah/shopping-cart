import { FC, AriaRole } from "react";
import Icon from "presentation-layer/components/Icon";

import "./style.scss";

const FloatButton: FC<{
  className?: string;
  icon: IconsComponentsOptions;
  role?: AriaRole;
  onClick?: (arg0?: any) => void;
}> = ({ className = "", icon, onClick, role }) => {
  return (
    <button className={`${className} button--float`} role={role} onClick={onClick}>
      <Icon icon={icon} size="30" />
    </button>
  );
};

export default FloatButton;
