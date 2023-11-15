"use client";
import React from "react";

const TenantNav = ({ selectedForm, onFormChange }) => {
  return (
    <div className="flex gap-8 text-lg font-semibold mb-3">
      <h1
        className={
          selectedForm === "monthlyBilling"
            ? "underline text-cyan-800 cursor-pointer"
            : "cursor-pointer"
        }
        onClick={() => onFormChange("monthlyBilling")}
      >
        Monthly billing statement
      </h1>
      <h1
        className={
          selectedForm === "creditStatement"
            ? "underline text-cyan-800 cursor-pointer"
            : "cursor-pointer"
        }
        onClick={() => onFormChange("creditStatement")}
      >
        Credit statement
      </h1>
    </div>
  );
};

export default TenantNav;
