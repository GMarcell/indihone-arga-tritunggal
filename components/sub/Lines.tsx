import { Typography } from "@material-tailwind/react";
import React from "react";
import { LinesProps } from "@/types";

function Lines({ whiteText, hideLG, hideText }: LinesProps) {
  return (
    <div>
      <div>
        <div className="w-full min-h-1 bg-[#e8ae20]" />
        <div className="w-full min-h-1 bg-[#0D075A]" />
        <div className="w-full min-h-1 bg-white" />
        <div className="w-full min-h-1 bg-[#ac8c3c]" />
      </div>
      {!hideText && (
        <div className="flex justify-between align-center">
          <Typography
            placeholder=""
            color={whiteText ? "white" : "black"}
            className={`lg:text-lg ${hideLG ? "lg:hidden" : ""}`}
          >
            &copy; 2024
          </Typography>
          <Typography
            placeholder=""
            color={whiteText ? "white" : "black"}
            className={`lg:text-lg ${hideLG ? "lg:hidden" : ""}`}
          >
            Expertise in your gas needs
          </Typography>
        </div>
      )}
    </div>
  );
}

export default Lines;
