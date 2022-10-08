import React from "react";
import Layout from ".";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

type Props = {};

export default function NestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-row">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        {children}
      </div>
    </main>
  );
}
