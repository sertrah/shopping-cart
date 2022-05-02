import { FC, SVGProps } from 'react';
import { components } from './Icons';

interface IconProps{
  icon?: IconsComponentsOptions;
  className?: string
  svgClassName?: string
  size?: string
  width?: string
  height?: string
  hasOverflow?: boolean
  page?:number
};

const Icon: FC<IconProps> = ({ icon, size = '35', className, height, width, ...props }) => {
  if (!icon) return null;
  if (!components[icon]) return null;

  const iconProps: SVGProps<SVGSVGElement> = {
    height: height !== undefined ? height : size,
    width: width !== undefined ? width : size,
  };

  const CustomComponent = components[icon];

  return (
    <>
      <CustomComponent height={`${iconProps.height}`} width={`${iconProps.width}`} className={className} {...props} />
    </>
  );
};

export default Icon;
