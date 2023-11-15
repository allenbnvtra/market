"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <div className="mb-4  lg:ml-[4rem]">
      <button onClick={() => router.back()}>&lt; back</button>
    </div>
  );
};

export default BackButton;
