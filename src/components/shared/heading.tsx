import React, { CSSProperties } from "react";

interface HeadingProps {
  text: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  style?: CSSProperties;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  text,
  level = "h1",
  style = {},
  className = "",
}) => {
  const HeadingTag = level;

  const headingStyles: CSSProperties = {
    ...style,
  };

  const defaultClassName =
    "lg:text-heading-2 text-heading-3 text-heading-600 pb-5 font-bold";

  return (
    <div
      className={`flex items-center justify-between ${
        className || defaultClassName
      }`}
    >
      <HeadingTag style={headingStyles}>{text}</HeadingTag>
      <SVGIcon />
    </div>
  );
};

const SVGIcon: React.FC = () => (
  <svg
    className="text-yellow-500 block lg:hidden mb-4"
    width="25"
    height="8"
    viewBox="0 0 25 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z"
      fill="#FFBB00"
    />
  </svg>
);

export default Heading;
