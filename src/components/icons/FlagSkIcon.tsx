import { IconProps } from "@/types/components";

export const FlagSkIcon = ({ width, height, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={width || 20}
    height={height || 20}
    aria-hidden
    {...rest}
  >
    <clipPath id="flagSkClip">
      <circle cx="256" cy="256" r="256" />
    </clipPath>
    <g clipPath="url(#flagSkClip)">
      <rect width="512" height="170.67" y="0" fill="#ffffff" />
      <rect width="512" height="170.67" y="170.67" fill="#0b4ea2" />
      <rect width="512" height="170.66" y="341.33" fill="#ee1c25" />
      <path
        d="M166 120h180v180c0 72-54 104-90 120-36-16-90-48-90-120V120Z"
        fill="#ee1c25"
        stroke="#ffffff"
        strokeWidth="12"
      />
      <path
        d="M180 360q0-24 24-24 8 0 14 6 10-22 38-22t38 22q6-6 14-6 24 0 24 24z"
        fill="#0b4ea2"
      />
      <rect x="248" y="176" width="16" height="164" fill="#ffffff" />
      <rect x="226" y="206" width="60" height="16" fill="#ffffff" />
      <rect x="214" y="250" width="84" height="16" fill="#ffffff" />
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
