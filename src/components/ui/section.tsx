import React, { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className, ...rest }) => {
  return (
    <section className={`px-4 xl:px-24 ${className}`} {...rest}>
      {children}
    </section>
  );
};

export default Section;
