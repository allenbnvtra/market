import React from "react";

const TenantThead = () => {
  return (
    <thead className="sticky top-0 z-10 bg-slate-300">
      <tr>
        <th className="py-3 max-w-[2rem] text-sm text-center  text-black font-medium">
          Stall no.
        </th>
        <th className="py-3 max-w-[2rem] text-sm text-center  text-black font-medium">
          Name
        </th>
        <th className="py-3 max-w-[2rem] text-sm text-center  text-black font-medium">
          Email
        </th>
        <th className="py-3 max-w-[2rem] text-sm text-center  text-black font-medium">
          Action
        </th>
      </tr>
    </thead>
  );
};

export default TenantThead;
