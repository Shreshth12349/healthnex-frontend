"use client";

import { PaperClipIcon } from "@heroicons/react/20/solid";
import MedicalInformationTabs from "@/components/MedicalInformationTabs";
import MedicalHistoryTable from "@/components/MedicalHistoryTable";
import { useState } from "react";
import AllergiesTable from "@/components/AllergiesTable";
import { MedicalHistoryTab } from "@/types";
import PastSurgeriesTable from "@/components/PastSurgeriesTable";
import TreatmentsTable from "@/components/TreatmentsTable";
import PractitionerProfileSection from "@/components/PractitionerProfileSection";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<MedicalHistoryTab>(
    MedicalHistoryTab.MEDICAL_HISTORY,
  );
  return <PractitionerProfileSection />;
}
