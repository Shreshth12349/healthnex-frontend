"use client";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  CalendarIcon,
  ChartBarIcon,
  PencilSquareIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";

export default function MainSidebar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className={"flex flex-row h-full absolute left-0 top-0"}>
      <Sidebar
        title={"Hello"}
        collapsed={!openSidebar}
        onMouseEnter={() => setOpenSidebar(true)}
        onMouseLeave={() => setOpenSidebar(false)}
        width={"200px"}
        className={"shadow h-full bg-opacity-100 bg-white"}
      >
        <div className="p-4">
          {openSidebar ? (
            <h1 className="text-2xl font-bold transition text-center">
              HealthNex
            </h1>
          ) : (
            <h1 className="text-2xl font-bold transition text-center">HN</h1>
          )}
        </div>
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
            component={<Link href={"/prescription"} />}
          >
            Prescription
          </MenuItem>
          <MenuItem
            icon={<UserIcon className="h-6 w-6 stroke-gray-600" />}
            component={<Link href={"/appointments"} />}
          >
            Appointments
          </MenuItem>
          <MenuItem
            icon={<CalendarIcon className="h-6 w-6 stroke-gray-600" />}
            component={<Link href={"/schedule"} />}
          >
            Schedule
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
