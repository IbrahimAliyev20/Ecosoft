export interface BlogPost {
  imageSrc: string;
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  content: string;
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
  {
    imageSrc: '/image/servicesec.png',
    title: 'Evdə təmiz su əldə etməyin 5 yolu',
    description: 'Sağlam həyat tərzi üçün evdə təmiz su əldə etməyin ən effektiv yolları...',
    date: '09 iyun, 2025',
    category: 'Məsləhətlər',
    slug: 'evde-temiz-su-elde-etmeyin-5-yolu',
    content: `
      <p>Evdə təmiz və sağlam su içmək hər kəsin haqqıdır. Bu məqalədə, ev şəraitində suyu təmizləmək üçün istifadə edə biləcəyiniz ən populyar və effektiv 5 üsulu araşdıracağıq.</p>
      <br/>
      <p>Fərqli filtrləmə sistemləri, qaynatma və digər üsullar haqqında ətraflı məlumat əldə edə bilərsiniz.</p>
    `,
  },
  {
    imageSrc: '/image/servicesec.png',
    title: 'Sənaye su təmizləmə sistemlərinin üstünlükləri',
    description: 'Böyük miqyaslı müəssisələr üçün su təmizləmənin faydaları...',
    date: '08 iyun, 2025',
    category: 'Sənaye',
    slug: 'senaye-su-temizleme-sistemlerinin-ustunlukleri',
    content: `
      <p>Sənaye müəssisələrində suyun təmizlənməsi istehsal proseslərinin səmərəliliyi və məhsulun keyfiyyəti üçün kritik əhəmiyyətə malikdir. Bu sistemlər suyu zərərli maddələrdən təmizləyərək avadanlıqların ömrünü uzadır və istehsal xərclərini azaldır.</p>
    `,
  },
  {
    imageSrc: '/image/servicesec.png',
    title: 'Su filteri seçərkən nələrə diqqət etməli?',
    description: 'Doğru su filtrini seçmək üçün bilməli olduğunuz vacib məqamlar...',
    date: '07 iyun, 2025',
    category: 'Filtrlər',
    slug: 'su-filteri-secerken-nelere-diqqet-etmeli',
    content: `
      <p>Su filteri seçimi, suyunuzun keyfiyyətinə və ehtiyaclarınıza uyğun olmalıdır. Bu məqalədə, filter tipi, ölçüsü, sertifikatlaşdırma və saxlayıcı xərclər kimi vacib amilləri nəzərdən keçirəcəyik.</p>
    `,
  },
  {
    imageSrc: '/image/servicesec.png',
    title: 'Su çatışmazlığı: Qlobal problemə həll yolları',
    description: 'Dünyada su çatışmazlığı probleminin həlli üçün innovativ yanaşmalar...',
    date: '06 iyun, 2025',
    category: 'Yeniliklər',
    slug: 'su-catismazligi-qlobal-probleme-hell-yollari',
    content: `
      <p>Su çatışmazlığı bu gün dünyanın ən ciddi ekoloji problemlərindən biridir. Bu məqalədə, bu qlobal problemə qarşı mübarizədə tətbiq edilən yeni texnologiyalar və strategiyaları araşdıracağıq.</p>
    `,
  },
  {
    imageSrc: '/image/servicesec.png',
    title: 'Ofislər üçün optimal su təmizləmə həlləri',
    description: 'İş yerində təmiz suyun əhəmiyyəti və ən yaxşı həllər...',
    date: '05 iyun, 2025',
    category: 'Məsləhətlər',
    slug: 'ofisler-ucun-optimal-su-temizleme-helleri',
    content: `
      <p>Ofis mühitində işçilərin sağlamlığı və məhsuldarlığı üçün təmiz içməli su vacibdir. Bu məqalədə, ofislər üçün uyğun su təmizləmə sistemlərini və onların faydalarını müzakirə edəcəyik.</p>
    `,
  },
  {
    imageSrc: '/image/servicesec.png',
    title: 'Ərp problemi: Səbəbləri və həll yolları',
    description: 'Su təchizatı sistemlərində ərp yığılmasının qarşısını almaq üçün effektiv üsullar...',
    date: '04 iyun, 2025',
    category: 'Filtrlər',
    slug: 'erp-problemi-sebebleri-ve-hell-yollari',
    content: `
      <p>Sərt su, borularda və cihazlarda ərp yığılmasına səbəb olur ki, bu da onların effektivliyini azaldır və ömrünü qısaldır. Bu məqalə ərp yaranmasının səbəblərini və onu aradan qaldırmaq üçün filtrləmə sistemlərinin rolunu izah edir.</p>
    `,
  },
  {
    imageSrc: '/image/servicesec.png',
    title: 'Yeni nəsil su təmizləmə texnologiyaları',
    description: 'Ən son su təmizləmə innovasiyaları və gələcək perspektivlər...',
    date: '03 iyun, 2025',
    category: 'Yeniliklər',
    slug: 'yeni-nesil-su-temizleme-texnologiyalari',
    content: `
      <p>Su təmizləmə sahəsində texnoloji irəliləyişlər hər gün daha təmiz və əlçatan su təmin edir. Nanotexnologiya, qabaqcıl membran filtrləri və süni intellektin tətbiqi haqqında məlumatlar.</p>
    `,
  },
  {
    imageSrc: '/image/servicesec.png',
    title: 'Kənd təsərrüfatında suyun effektiv istifadəsi',
    description: 'Aqrar sektorda suvarma və su ehtiyatlarının idarə edilməsi...',
    date: '02 iyun, 2025',
    category: 'Sənaye',
    slug: 'kend-teserrufati-suyun-effektiv-istifadesi',
    content: `
      <p>Kənd təsərrüfatı dünyada ən çox su istifadə edən sahələrdən biridir. Suyun səmərəli istifadəsi, məhsuldarlığı artırmaq və su ehtiyatlarını qorumaq üçün vacibdir. Müasir suvarma texnikaları və su idarəçiliyi strategiyaları.</p>
    `,
  },
  {
    imageSrc: '/image/servicesec.png',
    title: 'Hovuz sularının təmizlənməsi üçün həllər',
    description: 'Sağlam və təhlükəsiz hovuz suyu üçün təmizləmə sistemləri...',
    date: '01 iyun, 2025',
    category: 'Filtrlər',
    slug: 'hovuz-sularinin-temizlenmesi-ucun-heller',
    content: `
      <p>Hovuzların təmiz və təhlükəsiz olması üzənlərin sağlamlığı üçün kritik əhəmiyyətə malikdir. Bu məqalədə hovuz suyu filtrləmə və dezinfeksiya sistemləri haqqında məlumat verilir.</p>
    `,
  },
  {
    imageSrc: '/image/servicesec.png',
    title: 'Dəniz suyunun şirinləşdirilməsi: Gələcəyin həlli?',
    description: 'Artan su ehtiyacları qarşısında dəniz suyunun şirinləşdirilməsi texnologiyaları...',
    date: '30 may, 2025',
    category: 'Yeniliklər',
    slug: 'deniz-suyunun-sirinlesdirilmesi-geleceyin-helli',
    content: `
      <p>Dünyada şirin su ehtiyatlarının azalması dəniz suyunun şirinləşdirilməsini zəruri edir. Əks osmos və digər texnologiyaların bu sahədəki rolunu müzakirə edirik.</p>
    `,
  },
  {
    imageSrc: '/image/servicesec.png',
    title: 'Ev heyvanları üçün təmiz suyun əhəmiyyəti',
    description: 'Dörd ayaqlı dostlarınızın sağlamlığı üçün təmiz içməli su...',
    date: '29 may, 2025',
    category: 'Məsləhətlər',
    slug: 'ev-heyvanlari-ucun-temiz-suyun-ehemiyyeti',
    content: `
      <p>Ev heyvanlarının da insanlar kimi təmiz və keyfiyyətli suya ehtiyacı var. Ev heyvanları üçün su filtrlərinin və qablarının seçimi barədə məsləhətlər.</p>
    `,
  },
  {
    imageSrc: '/image/servicesec.png',
    title: 'Su keyfiyyəti testləri: Niyə vacibdir?',
    description: 'Evinizdəki suyun keyfiyyətini yoxlamaq üçün testlərin rolu...',
    date: '28 may, 2025',
    category: 'Məsləhətlər',
    slug: 'su-keyfiyyeti-testleri-niye-vacibdir',
    content: `
      <p>Suyun tərkibində hansı maddələrin olduğunu bilmək sağlamlığınız üçün vacibdir. Su keyfiyyəti testlərinin necə aparıldığını və nəticələrinin nə demək olduğunu öyrənin.</p>
    `,
  },
  {
    imageSrc: '/image/servicesec.png',
    title: 'Tibb müəssisələri üçün steril su təminatı',
    description: 'Xəstəxanalarda və kliniklərdə suyun sterilizasiyasının kritik rolu...',
    date: '27 may, 2025',
    category: 'Sənaye',
    slug: 'tibb-muessiseleri-ucun-steril-su-teminati',
    content: `
      <p>Tibb müəssisələrində suyun təmizliyi və sterilliyi infeksiyaların qarşısının alınması üçün həyati əhəmiyyət kəsb edir. Xəstəxanalarda istifadə olunan su təmizləmə və sterilizasiya sistemləri haqqında ətraflı məlumat.</p>
    `,
  },
];

export const getPostBySlug = (slug: string) => {
  return allBlogPosts.find((post) => post.slug === slug);
};

export const filterTags = ['Bütün yazılar', 'Filtrlər', 'Məsləhətlər', 'Sənaye', 'Yeniliklər'];