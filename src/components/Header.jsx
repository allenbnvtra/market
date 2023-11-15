"use client";
import React from "react";
import SignOut from "./SignOut";
import Menubtn from "./Menubtn";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data } = useSession();
  return (
    <div className="fixed bg-[#27374D] w-full py-3 px-6 flex justify-between items-center flex-grow z-30">
      <div className="text-white text-3xl flex items-center">
        <h1 className=" font-semibold text-xl text-white hidden lg:block">
          Admin Dashboard
        </h1>
        <Menubtn />
      </div>
      <div className="flex">
        <div className="flex items-center gap-5 text-white text-sm font-semibold ml-auto">
          <p className="hidden sm:block">
            Welcome, <span className="capitalize">{data?.user?.name}</span>
          </p>
          <SignOut title="Logout" />
        </div>
      </div>
    </div>
  );
};

export default Header;
