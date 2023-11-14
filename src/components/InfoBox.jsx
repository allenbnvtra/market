"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Infos from "./Infos";
import Tablehead from "./Tablehead";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SearchBox from "./Searchbox";

const InfoBox = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/tenants");
        setUsers(res.data.data.userData);

        setTimeout(() => {
          setLoading(false);
        }, 3000);
      } catch (error) {
        setLoading(false);
        console.log("Error: " + error);
      }
    };

    fetchData();
  }, []);

  if (!users) {
    return (
      <h1 className="flex justify-center items-center text-center w-full h-[70vh]">
        No user found!
      </h1>
    );
  }

  if (loading) {
    return (
      <div className=" w-full flex justify-center justify-items-center mt-3">
        <div className="w-[100%] max-h-[30rem] lg:w-[85%]">
          <Skeleton height={80} className="mb-1 z-0" count={1} />
          <Skeleton height={50} className="z-0" count={7} />
        </div>
      </div>
    );
  }

  return (
    <div className=" w-full flex flex-col justify-center items-center">
      <SearchBox getSearchResult={setUsers} />
      <div className="w-[100%] max-h-[26rem] overflow-scroll lg:w-[85%]">
        <table className="w-full caption-bottom text-sm">
          <Tablehead />
          {users.map((user) => (
            <Infos
              key={user._id}
              name={user.name}
              stallnumber={user.stallNumber}
              email={user.email}
              href={`/tenant/${user._id}`}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default InfoBox;
