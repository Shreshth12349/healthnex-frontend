"use client";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  CalendarIcon,
  ChartBarIcon,
  PencilSquareIcon,
  QueueListIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";

export default function MainSidebar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sidebar
      collapsed={!openSidebar}
      onMouseEnter={() => setOpenSidebar(true)}
      onMouseLeave={() => setOpenSidebar(false)}
      width={"200px"}
      className="shadow h-screen fixed top-0 left-0 bg-opacity-100 bg-white text-black z-34"
    >
      <Link className="p-4" href={"/"}>
        {openSidebar ? (
          <h1 className="text-2xl font-bold transition text-center">
            HealthNex
          </h1>
        ) : (
          <h1 className="text-2xl font-bold transition text-center">HN</h1>
        )}
      </Link>
      <Menu>
        <MenuItem
          title={"Dashboard"}
          icon={<ChartBarIcon className="h-6 w-6 stroke-gray-600" />}
          component={<Link href={"/dashboard"} />}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          icon={<PencilSquareIcon className="h-6 w-6 stroke-gray-600" />}
          component={<Link href={"/patients"} />}
          onClick={() => setIsOpen(!isOpen)}
        >
          Patients
        </MenuItem>
        {/*{openSidebar && isOpen && (*/}
        {/*  <ul>*/}
        {/*    <Link href={"/prescription/admin"}>*/}
        {/*      <li className="flex justify-center hover:bg-gray-100 text-sm py-2 cursor-pointer">*/}
        {/*        Admin Access*/}
        {/*      </li>*/}
        {/*    </Link>*/}
        {/*    <Link href={"/prescription/user"}>*/}
        {/*      <li className="flex justify-center hover:bg-gray-100 text-sm py-2 cursor-pointer">*/}
        {/*        User Access*/}
        {/*      </li>*/}
        {/*    </Link>*/}
        {/*  </ul>*/}
        {/*)}*/}
        <MenuItem
          icon={<QueueListIcon className="h-6 w-6 stroke-gray-600" />}
          component={<Link href={"/appointments"} />}
        >
          Appointments
        </MenuItem>
        <MenuItem
          icon={<ChartBarIcon className="h-6 w-6 stroke-gray-600" />}
          component={<Link href={"/appointments"} />}
        >
          Medical Knowledge Base
        </MenuItem>
        <MenuItem
          icon={<CalendarIcon className="h-6 w-6 stroke-gray-600" />}
          component={<Link href={"/schedule"} />}
        >
          Schedule
        </MenuItem>
        <MenuItem
          icon={<UserIcon className="h-6 w-6 stroke-gray-600" />}
          component={<Link href={"/profile"} />}
        >
          Profile
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
