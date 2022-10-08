import React from "react";
import Link from "next/link";
import {
  IoNewspaper,
  IoPeopleCircle,
  IoPaperPlane,
  IoSettings,
} from "react-icons/io5";
type Props = {};

export default function Sidebar({}: Props) {
  return (
    <aside className="h-screen w-80 bg-base-300">
      <div className="flex  flex-row items-center gap-2 px-4 py-2">
        <a href="#">
          <h1 className="text-2xl font-bold">Jiu Jitsu</h1>
        </a>
      </div>

      <ul className="menu menu-compact mt-20 flex flex-col p-0 px-4">
        <li>
          <Link href="/dashboard">
            <div className="flex gap-4 text-lg" id="">
              <IoNewspaper />
              <span className="flex-1">Blog</span>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/clubs">
            <div className="flex gap-4 text-lg">
              <IoPeopleCircle />
              <span className="flex-1">Clubs</span>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/login">
            <div className="flex gap-4 text-lg">
              <IoPaperPlane />
              <span className="flex-1">Analytics</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <div className="flex gap-4 text-lg">
              <IoSettings />
              <span className="flex-1">Settings</span>
            </div>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
