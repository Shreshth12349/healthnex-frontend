import {Gender, UserAccount} from "@/types/UserTypes";
import {Appointment, Base, Prescription} from "@/types/MedicationTypes";

export interface Practitioner extends Base {
    contact: string;
    name: string;
    gender: Gender;
    address: string;
    date_of_birth: Date;
    speciality: Speciality;
    deceased: boolean;
    user_id: string;
    user: UserAccount;
    appointments: Appointment[];
    prescriptions: Prescription[];
}

export enum Speciality {
    GENERAL_PRACTICE = "General Practice",
    FAMILY_MEDICINE = "Family Medicine",
    INTERNAL_MEDICINE = "Internal Medicine",
    OBSTETRICS_AND_GYNECOLOGY = "Obstetrics and Gynecology",
    GYNECOLOGY = "Gynecology",
    MATERNAL_FETAL_MEDICINE = "Maternal-Fetal Medicine",
    ONCOLOGY = "Oncology",
    MEDICAL_ONCOLOGY = "Medical Oncology",
    SURGICAL_ONCOLOGY = "Surgical Oncology",
    PEDIATRICS = "Pediatrics",
    NEONATOLOGY = "Neonatology",
    PSYCHIATRY = "Psychiatry",
    CHILD_AND_ADOLESCENT_PSYCHIATRY = "Child and Adolescent Psychiatry",
    GERIATRIC_PSYCHIATRY = "Geriatric Psychiatry",
    SURGERY = "Surgery",
    UROLOGY = "Urology",
    ENT = "Otolaryngology (ENT)",
    NEUROLOGY = "Neurology",
    CARDIOLOGY = "Cardiology",
    INTERVENTIONAL_CARDIOLOGY = "Interventional Cardiology",
    ELECTROPHYSIOLOGY = "Electrophysiology",
    GASTROENTEROLOGY = "Gastroenterology",
    HEPATOLOGY = "Hepatology",
    ONCOLOGY_AND_ENDOCRINOLOGY = "Oncology and Endocrinology",
    ENDOCRINOLOGY = "Endocrinology",
    DIABETES_AND_METABOLISM = "Diabetes and Metabolism",
    NEPHROLOGY = "Nephrology",
    RHEUMATOLOGY = "Rheumatology",
    NUTRITION = "Nutrition",
    NEUROSURGERY = "Neurosurgery",
    DERMATOLOGY = "Dermatology",
    PULMONOLOGY = "Pulmonology",
    CRITICAL_CARE_MEDICINE = "Critical Care Medicine",
    RADIATION_ONCOLOGY = "Radiation Oncology",
    NEUROLOGY_AND_NEUROSURGERY = "Neurology and Neurosurgery",
    RHEUMATOLOGY_AND_ENDOCRINOLOGY = "Rheumatology and Endocrinology",
    OPHTHALMOLOGY = "Ophthalmology",
    ORTHOPEDICS = "Orthopedics",
    SPORTS_MEDICINE = "Sports Medicine",
    PLASTIC_SURGERY = "Plastic Surgery",
    HAND_SURGERY = "Hand Surgery",
    VASCULAR_SURGERY = "Vascular Surgery",
    TRAUMA_SURGERY = "Trauma Surgery",
    THORACIC_SURGERY = "Thoracic Surgery",
    CARDIOTHORACIC_SURGERY = "Cardiothoracic Surgery",
    PEDIATRIC_SURGERY = "Pediatric Surgery",
    GERIATRIC_MEDICINE = "Geriatric Medicine",
    PAIN_MEDICINE = "Pain Medicine",
    ANESTHESIOLOGY = "Anesthesiology",
    INTERVENTIONAL_RADIOLOGY = "Interventional Radiology",
    DIAGNOSTIC_RADIOLOGY = "Diagnostic Radiology",
    EMERGENCY_MEDICINE = "Emergency Medicine",
    INFECTIOUS_DISEASES = "Infectious Diseases",
    ALLERGY_AND_IMMUNOLOGY = "Allergy and Immunology",
    PHYSICAL_MEDICINE_AND_REHABILITATION = "Physical Medicine and Rehabilitation",
    PALLIATIVE_MEDICINE = "Palliative Medicine",
    SLEEP_MEDICINE = "Sleep Medicine",
    OCCUPATIONAL_MEDICINE = "Occupational Medicine",
    ADDICTION_MEDICINE = "Addiction Medicine",
    HEMATOLOGY = "Hematology",
    IMMUNOLOGY = "Immunology",
    TRANSFUSION_MEDICINE = "Transfusion Medicine",
}
