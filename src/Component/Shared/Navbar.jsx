"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const links = <div className="flex gap-3">
    <Link className="font-bold text-gray-500" href={'/'}>Home</Link>
    <Link className="font-bold text-gray-500" href={'/about'}>About</Link>
    <Link className="font-bold text-gray-500" href={'/vehicals'}>Vehicle Model</Link>
    <Link className="font-bold text-gray-500" href={'/booking'}>Your Booking</Link>
  </div>
  return (
    <div className="navbar shadow-sm bg-white text-black px-5 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="w-35">
          <Image
            src="https://i.ibb.co/qYgvRzZ8/logo-v4.png"
            alt="logo"
            width={100}
            height={50}
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
         <Link href={'/sign-in'} className="font-bold text-gray-500">Sign In</Link>
         <Link href={'/register'} className="btn btn-outline no-outline bg-[#ff4c32] text-white py-3 px-5">Register</Link>
      </div>
    </div>
  );
}
