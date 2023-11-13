"use client";
import React, { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Menubtn = () => {
  const [open, setOpen] = useState(false);
  const handleOpenMenu = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  return (
    <div className="lg:hidden">
      <div onClick={handleOpenMenu} className="cursor-pointer text-white">
        <AiOutlineMenuUnfold className="text-white" />
      </div>
    </div>
  );
};

export default Menubtn;
