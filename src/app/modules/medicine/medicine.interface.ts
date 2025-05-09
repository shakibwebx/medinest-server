export type MedicineType =
  | 'Tablet'
  | 'Syrup'
  | 'Injection'
  | 'Capsule'
  | 'Ointment'
  | 'Drops';

export type MedicineCategory =
  | 'Pain Relief'
  | 'Antibiotic'
  | 'Antiviral'
  | 'Antifungal'
  | 'Allergy'
  | 'Digestive'
  | 'Supplement'
  | 'Chronic Disease'
  | 'Emergency';

export interface IMedicine {
  id?: string;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  requiredPrescription: boolean;
  manufacturer: string;
  expiryDate: Date;
  type: MedicineType;
  categories: MedicineCategory[];
  symptoms?: string[];
  discount?: number;
  imageUrl?: string;
  supplier?: string;
  inStock: boolean;
  isDeleted: boolean;
  sku?: string;
  tags?: string[];
}

// export interface IMedicine {
//   id?: string;
//   name: string;
//   description?: string;
//   price: number;
//   quantity: number;
//   requiredPrescription: boolean;
//   manufacturer: string;
//   expiryDate: Date;
//   createdAt: Date;
//   updatedAt: Date;
//   type: MedicineType;
//   category: MedicineCategory;
//   symptoms?: string[];
//   discount?: number;
//   imageUrl?: string;
//   supplier?: string;
//   inStock: boolean;
//   isDeleted: boolean;
// }
