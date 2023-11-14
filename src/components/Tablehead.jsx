import React from "react";

const Tablehead = () => {
  return (
    <thead>
      <tr>
        <th className="px-1 py-2 max-w-[1rem] font-light text-sm text-center sticky top-0 bg-slate-700 text-white sm:py-3 sm:font-medium lg:text-base">
          Stall no.
        </th>
        <th className="px-1 py-2 max-w-[5rem] font-light text-sm text-center sticky top-0 bg-slate-600 text-white sm:py-3 sm:font-medium lg:text-base">
          Name
        </th>
        <th className="px-1 py-2 max-w-[2rem] font-light text-sm text-center sticky top-0 bg-slate-700 text-white sm:py-3 sm:font-medium lg:text-base">
          Email
        </th>
        <th className="px-1 py-2 max-w-[2rem] font-light text-sm text-center sticky top-0 bg-slate-600 text-white sm:py-3 sm:font-medium lg:text-base">
          Action
        </th>
      </tr>
    </thead>
  );
};

export default Tablehead;
