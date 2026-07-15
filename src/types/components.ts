import type { ComponentType, SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement> & {
  width?: number;
  height?: number;
  color?: string;
};

export type IconType = ComponentType<IconProps>;
