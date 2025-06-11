export interface BlogPost {
  imageSrc: string;
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;       // YENİ: Unikal URL üçün
  content: string;    // YENİ: Səhifədəki əsas mətn
}

export const allBlogPosts: BlogPost[] = [
  {
    imageSrc: '/image/servicesec.png', 
    title: 'Su filterlərindən istifadə qaydası',
    description: 'Filtrlərinizi daha uzunömürlü etmək və sudan maksimum fayda almaq üçün vacib məsləhətlər...',
    date: '11 iyun, 2025',
    category: 'Filtrlər',
    slug: 'su-filterlerinden-istifade-qaydasi',
    content: `
      <p>Su filtrləri evimizdə və iş yerimizdə təmiz suya çıxışımızı təmin edən vacib cihazlardır. Onların effektivliyini qorumaq və ömrünü uzatmaq üçün müntəzəm baxım və düzgün istifadə şərtdir. Bu məqalədə su filtrlərindən istifadənin əsas qaydalarına nəzər salacağıq.</p>
      <br/>
      <p>İlk növbədə, filtrin tipindən asılı olaraq istehsalçının təlimatlarına riayət etmək çox vacibdir. Hər bir filtrin özünəməxsus quraşdırma və baxım tələbləri ola bilər. Kartriclərin vaxtında dəyişdirilməsi suyun keyfiyyətinin yüksək qalmasını təmin edən ən önəmli amillərdən biridir.</p>
    `,
  },
  {
    imageSrc: '/image/servicesec.png',
    title: 'Restoranlar üçün su təmizləmə həlləri',
    description: 'Restoran biznesində suyun keyfiyyəti müştəri məmnuniyyətinə birbaşa təsir edir...',
    date: '10 iyun, 2025',
    category: 'Sənaye',
    slug: 'restoranlar-ucun-su-temizleme-helleri',
    content: `
      <p>Restoran biznesində suyun keyfiyyəti həm yeməklərin dadına, həm də istifadə olunan avadanlıqların ömrünə birbaşa təsir edir. Təmiz və yumşaq su, qabyuyan maşınlarda və buz generatorlarında ərp yaranmasının qarşısını alır.</p>
    `,
  },
];

export const getPostBySlug = (slug: string) => {
  return allBlogPosts.find((post) => post.slug === slug);
};
export const filterTags = ['Bütün yazılar', 'Filtrlər', 'Məsləhətlər', 'Sənaye', 'Yeniliklər'];