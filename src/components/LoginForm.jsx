"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setLoading(false);
        setError(res.error);
        return;
      }

      router.push("/dashboard");
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!email || !password) {
      setError("");
    }
  }, [email, password]);

  return (
    <div className="flex flex-col items-center w-[25rem] px-6 py-7 gap-5 bg-white shadow-2xl rounded-md sm:px-6">
      <div className="gap-2 flex  justify-center items-center">
        <Image src="/si-logo.png" alt="" width={70} height={70} />
        <h1 className="font-normal text-sm text-slate-800">
          <span className="font-bold text-lg">San Ildefonso Public Market</span>
          <hr />
          Municipality of San Ildefonso, Bulacan
        </h1>
      </div>

      <div>
        <h1 className="text-3xl font-extrabold text-gray-700 mt-2">Login</h1>
      </div>

      <div className="w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                name="email"
                autoComplete="email"
                placeholder="Enter your email"
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
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                className="appearance-none block px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          {error ? (
            <p className="text-red-600 text-sm">Wrong credentials!</p>
          ) : (
            <p></p>
          )}

          <div>
            <p className="text-sm flex gap-2 mt-1 text-gray-600">
              Forgot your password?{" "}
              <span className="text-blue-500 font-bold">
                <Link href="forgot-password">click here</Link>
              </span>
            </p>
          </div>
          <div className="flex flex-col mt-5">
            <button
              type="submit"
              disabled={loading}
              className="bg-slate-900 w-full text-white py-3 rounded-md font-medium text-sm hover:bg-slate-800 disabled:bg-slate-800 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
