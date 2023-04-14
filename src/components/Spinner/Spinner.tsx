import React from "react";
import { Spinner as SpinnerIcon } from "@/ui/icons";

export const Spinner = () => {
  return (
    <div role="status">
      <SpinnerIcon />
      <span className="sr-only">Loading...</span>
    </div>
  );
};
