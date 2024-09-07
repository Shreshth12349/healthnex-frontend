import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function TopBar() {
  return (
    <div
      className={
        "w-full bg-white h-16 shadow flex items-center justify-end px-4"
      }
    >
      <UserCircleIcon height={44} width={44} className={"stroke-gray-600"} />
    </div>
  );
}
