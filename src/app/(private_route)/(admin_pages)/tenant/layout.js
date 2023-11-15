import BackButton from "./../../../../components/BackButton";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="w-full">
      <BackButton />
      {children}
    </div>
  );
};

export default layout;
