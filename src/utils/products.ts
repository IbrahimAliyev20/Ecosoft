
export interface Product {
  id: number;
  imageSrc: string;
  title: string;
  productCode: string;
  category: 'Ev' | 'Bağ' | 'Mətbəx' | 'Sənaye'; 
  description: string; 
}

export const allProducts: Product[] = [
  { id: 1, imageSrc: 'https://i.ibb.co/00ngy67/productimage1.png', title: 'Ecosoft Basicsoft 1500', productCode: 'FU12345678', category: 'Ev', description: 'ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev' },
  { id: 2, imageSrc: 'https://i.ibb.co/00ngy67/productimage1.png', title: 'UV Sterilizator 2000', productCode: 'FU23456789', category: 'Ev', description: 'ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev' },
  { id: 3, imageSrc: 'https://i.ibb.co/00ngy67/productimage1.png', title: 'Kompakt Su Yumşaldıcı', productCode: 'FU34567890', category: 'Mətbəx', description: 'ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev' },
  { id: 4, imageSrc: 'https://i.ibb.co/00ngy67/productimage1.png', title: 'Sənaye Filtrasiya Sistemi', productCode: 'FU45678901', category: 'Sənaye', description: 'ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev' },
  { id: 5, imageSrc: 'https://i.ibb.co/00ngy67/productimage1.png', title: 'Bağ üçün Su Pompası', productCode: 'FU56789012', category: 'Bağ', description: 'ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev' },
  { id: 6, imageSrc: 'https://i.ibb.co/00ngy67/productimage1.png', title: 'Mətbəx üçün Əks Osmos', productCode: 'FU67890123', category: 'Mətbəx', description: 'ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev' },
  { id: 7, imageSrc: 'https://i.ibb.co/00ngy67/productimage1.png', title: 'Ev üçün Ümumi Filtr', productCode: 'FU78901234', category: 'Ev', description: 'ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev' },
  { id: 8, imageSrc: 'https://i.ibb.co/00ngy67/productimage1.png', title: 'Böyük Həcmli Təmizləyici', productCode: 'FU89012345', category: 'Sənaye', description: 'ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev ev' },
];

export const categories = ['Ev', 'Bağ', 'Mətbəx', 'Sənaye'];