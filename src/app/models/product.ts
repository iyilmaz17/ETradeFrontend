export interface Product {
  id: number;
  productCode: string;
  productName: string;
  barcode: string;
  unitPrice: number;
  taxRate: number;
  addedDate: any;
  stock: number;
  brand: string;
  status: boolean;
  description: string;
  image: string;
  categoryId: number;
}
