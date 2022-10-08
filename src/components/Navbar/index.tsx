import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav
      className="navbar sticky 
  top-0 z-30 flex h-16 w-full justify-center bg-base-200 bg-opacity-90 text-base-content shadow-sm 
  backdrop-blur transition-all duration-100"
    >
      <div className="flex-1">
        <a className="btn btn-ghost text-xl normal-case">Dashboard</a>
      </div>

      <div className="avatar placeholder online">
        <div className="w-12 rounded-full bg-neutral-focus text-neutral-content">
          <span className="text-xl">JO</span>
        </div>
      </div>
    </nav>
  );
}
