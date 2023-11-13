"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isActive, setIsActive] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState("");
  const pathname = usePathname();
  const reportRef = useRef(null);
  const tenantsRef = useRef(null);

  useEffect(() => {
    setIsActive(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isPopoverOpen &&
        reportRef.current &&
        !reportRef.current.contains(event.target) &&
        tenantsRef.current &&
        !tenantsRef.current.contains(event.target)
      ) {
        setIsPopoverOpen("");
      }
    };

    // Add a click event listener to handle clicks outside of the dropdown
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isPopoverOpen]);

  const handleActive = (itemName) => {
    if (isPopoverOpen !== itemName) {
      setIsPopoverOpen(itemName);
    } else if (isPopoverOpen === itemName) {
      setIsPopoverOpen("");
    }
  };

  return (
    <div className="py-2 hidden lg:block">
      <ul className="bo-nav">
        <li></li>
        <li className="flex items-center gap-6">
          <Link
            href="/dashboard"
            className={
              isActive === "/dashboard" ? "nav__items active" : "nav__items"
            }
          >
            Dashboard
          </Link>
          <h1
            onClick={() => handleActive("tenants")}
            className={
              isActive === "/tenant" || isActive === "/tenant/add"
                ? "nav__items active"
                : "nav__items"
            }
            ref={tenantsRef}
          >
            Tenants
            <div className="arrow"></div>
            {isPopoverOpen === "tenants" && (
              <div className="dropdown-content">
                <div className="flex flex-col">
                  <Link
                    href="/tenant"
                    className="px-3 py-2 text-sm rounded-t-[6px] hover:bg-slate-200 overflow-hidden text-[#3c4043]"
                  >
                    All Tenants
                  </Link>
                  <Link
                    href="/tenant/add"
                    className="px-3 py-2 text-sm rounded-b-[6px] hover:bg-slate-200 overflow-hidden text-[#3c4043]"
                  >
                    Add Tenant
                  </Link>
                </div>
              </div>
            )}
          </h1>
          <h1
            onClick={() => handleActive("reports")}
            className={
              isActive === "/report" ||
              isActive === "/report/history" ||
              isActive === "/report/audit"
                ? "nav__items active"
                : "nav__items"
            }
            ref={reportRef}
          >
            Reports
            <div className="arrow"></div>
            {isPopoverOpen === "reports" && (
              <div className="dropdown-content">
                <div className="flex flex-col">
                  <Link
                    href="/report"
                    className="px-3 py-2 text-sm rounded-t-[6px] hover:bg-slate-300 overflow-hidden text-[#3c4043]"
                  >
                    General
                  </Link>
                  <Link
                    href="/report/audit"
                    className="px-3 py-2 text-sm  hover:bg-slate-200 overflow-hidden text-[#3c4043]"
                  >
                    Audit
                  </Link>
                  <Link
                    href="/report/history"
                    className="px-3 py-2 text-sm rounded-b-[6px] hover:bg-slate-300 overflow-hidden text-[#3c4043]"
                  >
                    History
                  </Link>
                </div>
              </div>
            )}
          </h1>
          <Link
            href="/filters"
            className={
              isActive === "/filters" ? "nav__items active" : "nav__items"
            }
          >
            Filters
          </Link>
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default Navbar;
