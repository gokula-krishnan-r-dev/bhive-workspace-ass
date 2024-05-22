import React from "react";

interface PassProps {
  discount?: number;
}

const DiscountBadge: React.FC<PassProps> = ({ discount }) => {
  if (discount === 0) return null;

  return (
    <div className="flex items-center justify-center w-full absolute -top-2 left-0">
      <span className="text-[8px] bg-bronze px-2 py-0.5 text-white rounded">
        {discount} Discount
      </span>
    </div>
  );
};

export default DiscountBadge;
