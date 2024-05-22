import React from "react";

interface FooterProps {
  copyrightText: string;
}

const Footer: React.FC<FooterProps> = ({ copyrightText }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-footer py-2">
      <div className="text-center">
        <h5 className="text-sm font-normal text-gray-300">
          {`© ${currentYear}. ${copyrightText}`}
        </h5>
      </div>
    </div>
  );
};

export default Footer;
