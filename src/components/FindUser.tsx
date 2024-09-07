import Image from "next/image";
import profileImg from "../assets/profile-img.jpg";

const FindUser = () => {
  return (
    <div className="bg-[#FFFFFF] p-4 rounded-lg shadow-md">
      <div className="flex flex-row gap-6">
        <div>
          <Image
            src={profileImg}
            alt="profile-img"
            className="w-[120px] h-[120px] cursor-pointer"
          />
        </div>
        <div className="flex flex-row gap-3 items-center">
          <input
            type="text"
            placeholder="Search for patient...."
            className="p-2 border border-gray-200 rounded-lg max-h-12 min-w-96"
          />
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg max-h-12 font-semibold">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUser;
