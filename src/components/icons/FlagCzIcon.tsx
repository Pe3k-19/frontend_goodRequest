import { IconProps } from "@/types/components";

export const FlagCzIcon = ({ width, height, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={width || 20}
    height={height || 20}
    aria-hidden
    {...rest}
  >
    <clipPath id="flagCzClip">
      <circle cx="256" cy="256" r="256" />
    </clipPath>
    <g clipPath="url(#flagCzClip)">
      <rect width="512" height="256" y="0" fill="#ffffff" />
      <rect width="512" height="256" y="256" fill="#d7141a" />
      <path d="M0 0 256 256 0 512Z" fill="#11457e" />
    </g>
    <circle
      cx="256"
      cy="256"
      r="254"
      fill="none"
      stroke="rgba(0,0,0,0.1)"
      strokeWidth="4"
    />
  </svg>
);
