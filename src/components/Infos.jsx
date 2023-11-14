import Link from "next/link";
import React from "react";

const Infos = ({ name, stallnumber, email, key, href }) => {
  return (
    <tbody>
      <tr
        key={key}
        className="border-b border-b-slate-400 transition-colors hover:bg-slate-200 hover:border-x hover:border-x-slate-400 cursor-default"
      >
        <td className="p-1 align-middle h-[3rem] max-w-[1rem] w-[1rem] overflow-hidden whitespace-nowrap overflow-ellipsis text-xs font-light text-center sm:text-base">
          {stallnumber}
        </td>
        <td className="p-1 align-middle h-[3rem] max-w-[5rem] w-[5rem] overflow-hidden whitespace-nowrap overflow-ellipsis text-xs font-light text-center sm:text-base">
          {name}
        </td>
        <td className="p-1 align-middle h-[3rem] max-w-[5rem] w-[5rem] overflow-hidden whitespace-nowrap overflow-ellipsis text-xs font-light text-center sm:text-base">
          {email}
        </td>
        <td className="underline p-1 align-middle h-[3rem] max-w-[3rem] w-[3rem] overflow-hidden whitespace-nowrap overflow-ellipsis text-xs text-blue-700 font-light text-center sm:text-base">
          <Link href={href}>view</Link>
        </td>
      </tr>
    </tbody>
  );
};

export default Infos;
