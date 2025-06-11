
export interface Product {
  id: number;
  slug: string; 
  images: string[]; 
  imageSrc: string;
  title: string;
  productCode: string;
  category: 'Ev' | 'Bağ' | 'Mətbəx' | 'Sənaye'; 
  description: string; 
}

const defaultImage = 'https://i.ibb.co/00ngy67/productimage1.png';

export const allProducts: Product[] = [
  {
    id: 1,
    slug: 'ecosoft-basicsoft-1500',
    images: [defaultImage, defaultImage, defaultImage],
    imageSrc: defaultImage,
    title: 'Ecosoft Basicsoft 1500',
    productCode: 'FU12345678',
    category: 'Ev',
    description: 'Evinizdəki suyun keyfiyyətini artıran bu sistem, sudakı codluğu aradan qaldıraraq məişət texnikalarınızın ömrünü uzadır və daha təmiz suya çıxışınızı təmin edir.'
  },
  {
    id: 2,
    slug: 'uv-sterilizator-2000',
    images: [defaultImage, defaultImage, defaultImage,defaultImage,defaultImage,defaultImage,defaultImage,defaultImage,defaultImage],
    imageSrc: defaultImage,
    title: 'UV Sterilizator 2000',
    productCode: 'FU23456789',
    category: 'Ev',
    description: 'Ultra-bənövşəyi şüalar vasitəsilə sudakı bakteriya və virusları 99.9% məhv edən bu sterilizator, içməli suyunuzun tam təhlükəsiz olmasını təmin edir.'
  },
  {
    id: 3,
    slug: 'kompakt-su-yumsaldici',
    images: [defaultImage, defaultImage, defaultImage],
    imageSrc: defaultImage,
    title: 'Kompakt Su Yumşaldıcı',
    productCode: 'FU34567890',
    category: 'Mətbəx',
    description: 'Mətbəxiniz üçün ideal olan bu kompakt yumşaldıcı, suyun tərkibindəki əhəngi azaldır, qab-qacağınızın və çaydanınızın ləkələnməsinin qarşısını alır.'
  },
  {
    id: 4,
    slug: 'sənaye-filtrasiya-sistemi',
    images: [defaultImage, defaultImage, defaultImage],
    imageSrc: defaultImage,
    title: 'Sənaye Filtrasiya Sistemi',
    productCode: 'FU45678901',
    category: 'Sənaye',
    description: 'Böyük həcmli su təmizləmə tələb edən müəssisələr üçün nəzərdə tutulmuş bu sistem, yüksək məhsuldarlıq və etibarlılıq təklif edir.'
  },
  {
    id: 5,
    slug: 'bag-ucun-damci-sulama-sistemi',
    images: [defaultImage, defaultImage, defaultImage],
    imageSrc: defaultImage,
    title: 'Bağ üçün Damcı Sulama Sistemi',
    productCode: 'FU56789012',
    category: 'Bağ',
    description: 'Bitkilərinizin kökünə birbaşa su verən bu effektiv sistem, suya qənaət etməyə və daha sağlam məhsul yetişdirməyə kömək edir.'
  },
  {
    id: 6,
    slug: 'metbex-krani-ucun-filtr',
    images: [defaultImage, defaultImage, defaultImage],
    imageSrc: defaultImage,
    title: 'Mətbəx Kranı üçün Filtr',
    productCode: 'FU67890123',
    category: 'Mətbəx',
    description: 'Asanlıqla krana quraşdırılan bu filtr, xloru, ağır metalları və digər çirkləndiriciləri təmizləyərək yeməkləriniz və içkiləriniz üçün daha dadlı su təmin edir.'
  },
  {
    id: 7,
    slug: 'menzil-ucun-magistral-filtr',
    images: [defaultImage, defaultImage, defaultImage],
    imageSrc: defaultImage,
    title: 'Mənzil üçün Magistral Filtr',
    productCode: 'FU78901234',
    category: 'Ev',
    description: 'Mənzilinizə daxil olan bütün suyu qum, pas və digər iri hissəciklərdən təmizləyən bu magistral filtr, santexnika sisteminizi qoruyur.'
  },
  {
    id: 8,
    slug: 'yuksek-tezyiqli-su-pompasi',
    images: [defaultImage, defaultImage, defaultImage],
    imageSrc: defaultImage,
    title: 'Yüksək Təzyiqli Su Pompası',
    productCode: 'FU89012345',
    category: 'Sənaye',
    description: 'Sənaye tətbiqləri üçün nəzərdə tutulmuş bu güclü nasos, suyu yüksək təzyiqlə uzaq məsafələrə nəql etmək üçün idealdır.'
  },
];

export const categories = ['Ev', 'Bağ', 'Mətbəx', 'Sənaye'];