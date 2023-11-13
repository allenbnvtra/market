"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchBox = ({ getSearchResult }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const search = async () => {
      const res = await axios.get(`/api/tenants/search?name=${query}`);
      getSearchResult(res.data);
    };

    search();
  }, [getSearchResult, query]);

  return (
    <div className="w-[85%] mb-4 bg-gray-100 rounded-md flex items-center gap-3">
      <label className="font-bold text-lg" htmlFor="search">
        Search:
      </label>
      <input
        name="search"
        type="text"
        placeholder="Search tenant name"
        value={query}
        onChange={handleInputChange}
        className="w-[20%]] p-2 border border-slate-400 rounded-md mr-5 focus:outline-none"
      />
    </div>
  );
};

export default SearchBox;
