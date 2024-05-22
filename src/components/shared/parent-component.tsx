import React from "react";

import PassButton from "./pass-button";
import { PassType } from "../types/types";

interface ParentComponentProps {
  passes: PassType[];
}

const ParentComponent: React.FC<ParentComponentProps> = ({ passes }) => {
  return (
    <div className="mt-6 flex justify-between items-center gap-4">
      {passes
        .filter((pass) => pass.is_day_pass_enabled)
        .map((pass, index) => (
          <PassButton key={index} pass={pass} />
        ))}
    </div>
  );
};

export default ParentComponent;
