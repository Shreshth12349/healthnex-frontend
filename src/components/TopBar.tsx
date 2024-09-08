import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function TopBar() {
  return (
    <div
      className={
        "bg-white h-16 shadow flex items-center absolute top-0 sticky justify-end px-4"
      }
    >
      <UserCircleIcon height={44} width={44} className={"stroke-gray-600"} />
    </div>
  );
}
