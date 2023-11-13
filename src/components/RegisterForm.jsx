"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stallNumber, setStallNumber] = useState("");
  const [stallName, setStallName] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post("/api/auth/register", {
        name,
        email,
        password,
        stallName,
        stallNumber,
      });

      console.log(res);
      router.push("/tenant");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    if (!email || !password || !name || !stallName || !stallNumber) {
      setError("");
    }
  }, [email, password, name, stallName, stallNumber]);
  return (
    <div className="flex flex-col items-center w-[40rem] px-6 py-7 gap-5 bg-white shadow-md rounded-md sm:px-6">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-700">Register</h1>
      </div>

      <div className="w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 ">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-1">
                <label className="text-sm" htmlFor="stall-name">
                  Stall Name
                </label>
                <input
                  type="text"
                  name="stall-name"
                  placeholder="Enter stall name"
                  onChange={(e) => setStallName(e.target.value)}
                  value={stallName}
                  required
                  className="appearance-none block px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm" htmlFor="stall-number">
                  Stall Number
                </label>
                <input
                  type="text"
                  name="stall-number"
                  placeholder="Enter stall number"
                  onChange={(e) => setStallNumber(e.target.value)}
                  value={stallNumber}
                  required
                  className="appearance-none block px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-between">
              <div>
                <label className="text-sm" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Enter tenant name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                  className="appearance-none block px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter tenant email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  className="appearance-none block px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  autoComplete="password"
                  placeholder="Enter tenant password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  className="appearance-none block px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                />
              </div>
            </div>
          </div>

          {error ? (
            <p className="text-red-600 text-sm">Error while register!</p>
          ) : (
            <p></p>
          )}

          <div className="flex flex-col mt-5">
            <button
              type="submit"
              disabled={loading}
              className="bg-slate-900 w-full text-white py-3 rounded-md font-medium text-sm hover:bg-slate-800 disabled:bg-slate-800 disabled:cursor-not-allowed"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
