import React from "react";
import Head from "next/head";
import Layout from "../appLayout";
import { useRouter } from "next/router";

type Props = {};

export default function login({}: Props) {
  const router = useRouter();
  const handleLogging = () => {
    router.push("/dashboard");
  };

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="w-8/12 py-6">
              Brazilian Jiu-Jitsu is a self-defence martial art and combat sport
              based on grappling, ground fighting and submission holds.
            </p>
          </div>
          <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="link link-hover label-text-alt">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button onClick={handleLogging} className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
