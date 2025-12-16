"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Nav() {
  const pathname = usePathname();
  return (
    <div className="w-full h-[80px] bg-white flex justify-between items-center px-[20px] fixed top-0 left-0 z-10">
      <div className="text-black font-bold">🌎Travel Guide</div>
      <div>
        <ul className="flex justify-center gap-[10px]">
          <Link href={"/"} className={pathname == "/" ? "text-blue-500" : ""}>
            <li>Home</li>
          </Link>
          <Link
            href={"/destinations"}
            className={pathname == "/destinations" ? "text-blue-500" : ""}
          >
            <li>Destinations</li>
          </Link>
          <Link
            href={"/contact"}
            className={pathname == "/contact" ? "text-blue-500" : ""}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
