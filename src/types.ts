export interface Product {
  id: string;
  name: string;
  category: 'Vestuário' | 'Calçados' | 'Acessórios' | 'Perfumaria' | 'Design & Casa';
  price: string;
  priceNumeric: number;
  description: string;
  details: string[];
  image: string;
  badge?: string;
  sizes?: string[];
  inStock?: boolean;
}

export interface CategoryItem {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  filterValue: 'Vestuário' | 'Calçados' | 'Acessórios' | 'Perfumaria' | 'Design & Casa' | 'Todos';
}

export interface ContactFormData {
  name: string;
  whatsapp: string;
  email: string;
  categoryInterest: string;
  message: string;
}

