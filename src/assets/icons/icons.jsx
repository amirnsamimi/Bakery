import sprite from "./sprite.svg";

export const DynamicSvg = ({
  className = "",
  name = "",
  size = 30,
  color = "transparent",
}) => (
  <svg
    className={className}
    stroke={color}
    fill={color}
    width={size}
    height={size}
  >
    <use href={`${sprite}#${name}`} />
  </svg>
);
