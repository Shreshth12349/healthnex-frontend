"use client";

import Image from "next/image";
import profileImg from "../assets/profile-img.jpg";
import { useEffect, useState } from "react";
import { patients, PatientSample } from "@/SampleData";
import PatientsTable from "@/components/PatientsTable";

export default function PatientsSection() {
    const [searchQuery, setSearchQuery] = useState("");
    const [patientSuggestions, setPatientSuggestions] = useState<PatientSample[]>([]);
    const [selectedPatient, setSelectedPatient] = useState<PatientSample | null>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (searchQuery.trim() === "") {
            setPatientSuggestions(patients);
        } else {
            const filteredPatients = patients.filter((patient) =>
                patient.fullName.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setPatientSuggestions(filteredPatients);
        }
    }, [searchQuery]);

    const handlePatientSelect = (patient: PatientSample) => {
        setSelectedPatient(patient);
        setSearchQuery("");
        setIsFocused(false); // Close the suggestions list
    };

    return (
        <div className="bg-[#FFFFFF] p-4 rounded-lg shadow-md">
            <div className="flex flex-row gap-6">
                <div className="flex flex-col gap-3 w-full">
                    <div className="relative px-8"> {/* Add relative positioning */}
                        <div className="flex flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Search for patient...."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                className="p-2 border border-gray-200 rounded-lg max-h-12 w-64"
                            />
                            <button
                                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg max-h-12 font-semibold">
                                Search
                            </button>
                        </div>
                        {/*{isFocused && searchQuery.trim() !== "" && (*/}
                        {/*    <div className="absolute z-20 w-64 mt-2 bg-white border-2 rounded-lg">*/}
                        {/*        <ul className="flex flex-col divide-y divide-gray-200 text-md">*/}
                        {/*            {patientSuggestions.map((patient) => (*/}
                        {/*                <li*/}
                        {/*                    key={patient.uuid}*/}
                        {/*                    className="px-2 py-1 hover:bg-gray-100 cursor-pointer"*/}
                        {/*                    onMouseDown={() => handlePatientSelect(patient)}*/}
                        {/*                >*/}
                        {/*                    {patient.fullName}*/}
                        {/*                </li>*/}
                        {/*            ))}*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}
                        {/*)}*/}
                    </div>
                    <PatientsTable patients={patientSuggestions}/>
                </div>
            </div>
        </div>
    );
}
