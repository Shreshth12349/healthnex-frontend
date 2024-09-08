"use client";

import SymptomsTable from "@/components/SymptomsTable";
import TextArea from "@/components/TextArea";

export default function Diagnosis() {
  return (
    <div>
      <div className="m-4">
        <SymptomsTable />
      </div>
      <div className="m-4 mt-8 p-8">
        <TextArea
          label={"Diagnosis"}
          placeholder={"Add a Diagnosis..."}
          rows={6}
        />
      </div>
      <div className="m-4 p-8">
        <TextArea
          label={"Treatment Plan"}
          placeholder={"Add a Treatment Plan..."}
          rows={6}
        />
      </div>
    </div>
  );
}
