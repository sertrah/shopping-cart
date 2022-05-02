import { FunctionComponent } from "react";
import ShoppingCart from "./ShoppingCart";
import RemoveIcon from "./RemoveIcon";
import AddIcon from "./AddIcon";

export const components: Record<
  IconsComponentsOptions,
  FunctionComponent<{
    className?: string;
    width?: string;
    height?: string;
  }>
> = {
  ShoppingCart,
  RemoveIcon,
  AddIcon,
};
