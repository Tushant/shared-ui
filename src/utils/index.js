import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const createVariant = (prop, scale) => {
  return (props) => props[prop] && props.theme[scale][props[prop]];
};

export const px = (value) => (typeof value === "number" ? `${value}px` : value);

export const createMediaQuery = (minWidth) =>
  `@media (min-width: ${px(minWidth)})`;
