"use client";
import React, { useState } from "react";

// Define the type for your table row data
interface Prescription {
  id: number;
  patientName: string;
  medication: string;
  dosage: string;
  datePrescribed: string;
}

const PrescriptionTable: React.FC = () => {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([
    {
      id: 1,
      patientName: "John Doe",
      medication: "Aspirin",
      dosage: "100mg",
      datePrescribed: "2024-09-01",
    },
    // Add more prescription objects as needed
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newPrescription, setNewPrescription] = useState<Partial<Prescription>>(
    {
      patientName: "",
      medication: "",
      dosage: "",
      datePrescribed: "",
    },
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPrescription((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddPrescription = () => {
    const newId = prescriptions.length
      ? Math.max(...prescriptions.map((p) => p.id)) + 1
      : 1;
    setPrescriptions([
      ...prescriptions,
      { id: newId, ...newPrescription } as Prescription,
    ]);
    setNewPrescription({
      patientName: "",
      medication: "",
      dosage: "",
      datePrescribed: "",
    });
    setShowForm(false);
  };

  return (
    <div className="bg-[#FFFFFF] rounded-lg shadow-md p-4">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Prescriptions
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the prescriptions including patient name, medication,
            dosage, and date prescribed.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Prescription
          </button>
        </div>
      </div>
      {showForm && (
        <div
          className={`transition-opacity duration-300 ease-in-out ${showForm ? "opacity-100" : "opacity-0"} ${showForm ? "translate-y-0" : "-translate-y-4"}`}
        >
          <div className="bg-blue-50 mt-8 p-8 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Add New Prescription</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddPrescription();
              }}
              className="mt-4 space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Patient Name
                </label>
                <input
                  type="text"
                  name="patientName"
                  value={newPrescription.patientName || ""}
                  onChange={handleInputChange}
                  className="mt-1 min-h-8 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Medication
                </label>
                <input
                  type="text"
                  name="medication"
                  value={newPrescription.medication || ""}
                  onChange={handleInputChange}
                  className="mt-1 min-h-8 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Dosage
                </label>
                <input
                  type="text"
                  name="dosage"
                  value={newPrescription.dosage || ""}
                  onChange={handleInputChange}
                  className="mt-1 min-h-8 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date Prescribed
                </label>
                <input
                  type="date"
                  name="datePrescribed"
                  value={newPrescription.datePrescribed || ""}
                  onChange={handleInputChange}
                  className="mt-1 min-h-8 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="flex gap-6">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="inline-flex items-center rounded-lg bg-gray-500 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="relative">
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th></th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Patient Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Medication
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Dosage
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Date Prescribed
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-3"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {prescriptions.map((prescription) => (
                    <tr key={prescription.id}>
                      <td className="relative px-7 sm:w-12 sm:px-6">
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </td>
                      <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900">
                        {prescription.patientName}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {prescription.medication}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {prescription.dosage}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {prescription.datePrescribed}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionTable;
