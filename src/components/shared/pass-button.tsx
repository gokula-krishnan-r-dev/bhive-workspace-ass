import React from "react";
import DiscountBadge from "./discount-barge";
import { PassType } from "../types/types";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

type PassButtonProps = {
  pass: PassType;
};
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const PassButton: React.FC<PassButtonProps> = ({ pass }) => {
  return (
    <button
      title={pass?.discountMessage}
      className={`flex items-center justify-between relative w-full px-2 py-2 rounded-md border-[0.5px] ${pass.bgColor}`}
    >
      <DiscountBadge discount={pass.discount} />
      <div className="flex flex-col items-start">
        <p
          className={cn(
            "text-sm font-medium opacity-70 ",
            pass.isBulk ? "text-bronze-200" : "text-bronze-100"
          )}
        >
          {pass.type}
        </p>
        <h3 className="text-heading-4 font-semibold">
          ₹ {pass.price}{" "}
          <span
            className={cn(
              "text-xs font-medium opacity-70 ",
              pass.isBulk ? "text-bronze-200" : "text-bronze-100"
            )}
          >
            {pass.priceSuffix}
          </span>
        </h3>
      </div>
      <div>
        <svg
          width="21"
          height="12"
          viewBox="0 0 21 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.6"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.7071 5.29289C14.0976 5.68342 14.0976 6.31658 13.7071 6.70711L8.70711 11.7071C8.31658 12.0976 7.68342 12.0976 7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.29289 10.2929L11.5858 6L7.29289 1.70711C6.90237 1.31658 6.90237 0.683417 7.29289 0.292893C7.68342 -0.0976314 8.31658 -0.0976313 8.70711 0.292893L13.7071 5.29289Z"
            fill="#263238"
          />
          <path
            opacity="0.4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976315 11.3166 -0.0976314 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683417 0.292893 0.292893C0.683417 -0.0976314 1.31658 -0.0976313 1.70711 0.292893L6.70711 5.29289Z"
            fill="#263238"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L15.7071 11.7071C15.3166 12.0976 14.6834 12.0976 14.2929 11.7071C13.9024 11.3166 13.9024 10.6834 14.2929 10.2929L18.5858 6L14.2929 1.70711C13.9024 1.31658 13.9024 0.683417 14.2929 0.292893C14.6834 -0.0976314 15.3166 -0.0976313 15.7071 0.292893L20.7071 5.29289Z"
            fill="#263238"
          />
        </svg>
      </div>
    </button>
  );
};
export default PassButton;
