import FindUser from "@/components/FindUser";
import PrescriptionTable from "@/components/PrescriptionTable";

const page = () => {
  return (
    <div className="flex flex-col gap-6">
      <FindUser />
      <PrescriptionTable />
    </div>
  );
};

export default page;
