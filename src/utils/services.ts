// utils/services.ts

export interface ServiceCardData {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
  content: string;
}

export const allServices: ServiceCardData[] = [
  {
    id: 1,
    title: "Su filtrasiya sistemləri",
    description: "Suyun təmizlənməsi və filtrasiyası üçün müasir həllər",
    image: "https://i.ibb.co/Jk0Yd3k/service1.png",
    slug: "su-filtrasiya-sistemleri",
    content: "Su filtrasiyası sistemləri suyun təmizlənməsi və keyfiyyətinin artırılması üçün istifadə olunan texnologiyalardır. Bu sistemlər suyun içərisindəki zərərli maddələri, bakteriyaları və digər çirkləndiriciləri təmizləyərək, içməli su keyfiyyətini artırır."
  },
  {
    id: 2,
    title: "Su yumşaltma sistemləri",
    description: "Sərt suyun yumşaldılması üçün effektiv həllər",
    image: "https://i.ibb.co/Jk0Yd3k/service1.png",
    slug: "su-yumsaltma-sistemleri",
    content: "Su yumşaltma sistemləri, sərt suyun tərkibindəki kalsium və maqnezium ionlarını təmizləyərək, suyun yumşaldılmasını təmin edir. Bu sistemlər sayəsində su qızdırıcıları və digər məişət cihazlarının ömrü uzanır."
  },
  {
    id: 3,
    title: "Sənaye su təmizləmə",
    description: "Sənaye müəssisələri üçün su təmizləmə həlləri",
    image: "https://i.ibb.co/Jk0Yd3k/service1.png",
    slug: "senaye-su-temizleme",
    content: "Sənaye su təmizləmə sistemləri, müxtəlif sənaye sahələrində istifadə olunan suyun təmizlənməsi və təkrar istifadəsi üçün nəzərdə tutulmuşdur. Bu sistemlər vasitəsilə istehsal proseslərində istifadə olunan su təmizlənir və ətraf mühitə zərər vermədən təkrar istifadə edilir."
  },
  {
    id: 4,
    title: "Membran texnologiyaları",
    description: "Su təmizləmədə qabaqcıl membran texnologiyaları",
    image: "https://i.ibb.co/Jk0Yd3k/service1.png",
    slug: "membran-texnologiyalari",
    content: "Membran texnologiyaları, suyun təmizlənməsində istifadə olunan ən müasir üsullardan biridir. Bu texnologiya vasitəsilə suyun tərkibindəki ən kiçik çirkləndiricilər belə təmizlənir və yüksək keyfiyyətli su əldə edilir."
  },
  {
    id: 5,
    title: "Kafeler üçün su təmizlənməsi",
    description: "Kafelerdə və restoranlarda təmiz suyun təminatı müştəri məmnuniyyəti və avadanlıqların ömrü üçün vacibdir. Ən son texnologiyalarla su təmizləmə həlləri təklif edirik.",
    image: "/image/category.png",
    slug: "kafeler-ucun-su-temizlenmesi",
    content: `
      <p>Kafeler və restoranlar üçün suyun təmizliyi yalnız yeməklərin dadını deyil, həm də müştəri sağlamlığını və biznesin imicini birbaşa təsir edir. Bizim su təmizləmə sistemlərimiz, kofe maşınları, buz generatorları və qabyuyan maşınlarınızın ömrünü uzadır, həmçinin xərclərinizi azaldır.</p>
      <p>Sistemlərimiz ərp əmələ gəlməsinin qarşısını alır, suyun dadını və qoxusunu yaxşılaşdırır, beləliklə hər fincan kofe və hazırlanan hər yemək daha keyfiyyətli olur. Uzunmüddətli işləmə və minimal texniki xidmət tələb edən həllərimizlə, siz yalnız təmiz su əldə etməz, həm də vaxtınıza və resurslarınıza qənaət edərsiniz.</p>
      <p>Müxtəlif ölçülü və ehtiyaclı kafeler üçün fərdi yanaşma ilə optimal su təmizləmə planları hazırlayırıq.</p>
    `,
  },
  {
    id: 6,
    title: "Mənzillər üçün su təmizlənməsi",
    description: "Evlərdə içməli suyun keyfiyyətini artırmaq üçün fərdi həllər. Filtr sistemləri və texniki dəstək.",
    image: "/image/category.png",
    slug: "menziller-ucun-su-temizlenmesi",
    content: `
      <p>Mənzillərinizdə içməli suyun təmizliyi ailənizin sağlamlığı üçün əsas şərtdir. Biz ev şəraitində suyun tərkibindəki zərərli maddələri, kloru, ağır metalları və çirkləndiriciləri təmizləyən müasir filtr sistemləri təklif edirik.</p>
      <p>Həllərimiz, sərt su problemini aradan qaldırır, ərp yığılmasını azaldır və santexnika avadanlıqlarınızın ömrünü uzadır. Həmçinin suyun dadını və qoxusunu yaxşılaşdıraraq, daha təravətli və sağlam su istehlak etməyinizi təmin edir.</p>
      <p>Hər bir mənzilin fərdi ehtiyaclarını nəzərə alaraq, optimal filtr sistemini seçməyinizə kömək edir və peşəkar quraşdırma və texniki xidmət göstəririk.</p>
    `,
  },
  {
    id: 7,
    title: "Ofislər üçün su təmizlənməsi",
    description: "İş yerində sağlam və təmiz su təminatı üçün xüsusi sistemlər. Əməkdaşların rifahı üçün vacibdir.",
    image: "/image/category.png",
    slug: "ofisler-ucun-su-temizlenmesi",
    content: `
      <p>Ofislərdə təmiz və keyfiyyətli içməli su əməkdaşların sağlamlığı, enerjisi və məhsuldarlığı üçün vacibdir. Biz ofisiniz üçün mükəmməl su təmizləmə həlləri təklif edirik ki, hər kəs hər zaman təravətli suya çıxış əldə etsin.</p>
      <p>Soyuducular, qəhvə maşınları və digər ofis avadanlıqları üçün uyğun sistemlər quraşdırırıq. Bu sistemlər suyun tərkibindəki arzuolunmaz maddələri təmizləyərək həm suyun keyfiyyətini artırır, həm də avadanlıqlarınızın texniki xidmət ehtiyaclarını azaldır.</p>
      <p>Rahat quraşdırma və minimum texniki xidmət tələb edən ofis su təmizləmə həllərimizlə, iş mühitində sağlamlığı prioritet edin.</p>
    `,
  },
  {
    id: 8,
    title: "Sənaye obyektləri üçün su təmizlənməsi",
    description: "Böyük sənaye müəssisələri üçün yüksək həcmli su təmizləmə sistemləri. Proses səmərəliliyini artırır.",
    image: "/image/category.png",
    slug: "senaye-obyektleri-ucun-su-temizlenmesi",
    content: `
      <p>Sənaye obyektlərində suyun təmizliyi və keyfiyyəti istehsal proseslərinin davamlılığı, avadanlıqların ömrü və məhsulun son keyfiyyəti üçün kritik əhəmiyyətə malikdir. Biz sənaye miqyasında su təmizləmə ehtiyaclarınız üçün fərdi və effektiv həllər təklif edirik.</p>
      <p>İstehsalat, soyutma sistemləri, buxar qazanları və digər sənaye tətbiqləri üçün xüsusi olaraq hazırlanmış sistemlərimiz, suyun tərkibindəki mineralları, kimyəvi maddələri və digər çirkləndiriciləri aradan qaldırır. Bu, avadanlıqlarınızda ərp yığılmasının, korroziyanın və digər zərərlərin qarşısını alır.</p>
      <p>Həcmli su istehlakı olan müəssisələr üçün etibarlı, enerji səmərəli və uzunömürlü su təmizləmə sistemlərimizlə səmərəliliyinizi artırın.</p>
    `,
  },
  {
    id: 9,
    title: "Kənd Təsərrüfatı üçün su təmizlənməsi",
    description: "Kənd təsərrüfatında irriqasiya və heyvandarlıq üçün suyun təmizlənməsi. Məhsuldarlığı artırır.",
    image: "/image/category.png",
    slug: "kend-teserrufati-ucun-su-temizlenmesi",
    content: `
      <p>Kənd təsərrüfatında suyun keyfiyyəti məhsulun sağlamlığı, heyvanların rifahı və ümumi məhsuldarlıq üçün fundamental əhəmiyyətə malikdir. Biz irriqasiya, heyvandarlıq və digər kənd təsərrüfatı tətbiqləri üçün xüsusi su təmizləmə həlləri təklif edirik.</p>
      <p>Sistemlərimiz suyun tərkibindəki zərərli maddələri, bakteriyaları və mineralları təmizləyərək, bitkilərinizin daha yaxşı inkişaf etməsini və heyvanlarınızın sağlamlığını təmin edir. Bu, suvarma sistemlərində tıxanmaların qarşısını alır və suyun effektiv istifadəsini təmin edir.</p>
      <p>Kənd təsərrüfatı fəaliyyətiniz üçün optimal su keyfiyyəti ilə yüksək məhsuldarlıq və davamlılıq əldə edin.</p>
    `,
  },
  {
    id: 10,
    title: "Hovuzlar üçün su təmizlənməsi",
    description: "Hovuzların təmiz və təhlükəsiz qalması üçün filtrasiya və dezinfeksiya sistemləri.",
    image: "/image/category.png",
    slug: "hovuzlar-ucun-su-temizlenmesi",
    content: `
      <p>Hovuzların təmiz, təhlükəsiz və kristal təmiz suyu üzənlərin sağlamlığı və hovuzun davamlılığı üçün vacibdir. Biz hovuzların səmərəli filtrasiyası, dezinfeksiya və suyun balanslaşdırılması üçün tam həllər təklif edirik.</p>
      <p>Sistemlərimiz suyun tərkibindəki çirkləndiriciləri, yosunları və bakteriyaları aradan qaldıraraq, suyun keyfiyyətini optimal səviyyədə saxlayır. Bu, kimyəvi istifadəni azaldır və hovuz avadanlıqlarının ömrünü uzadır.</p>
      <p>Rahat istifadə olunan və avtomatlaşdırılmış hovuz su təmizləmə sistemlərimizlə, hovuzunuzu hər zaman üzməyə hazır və təmiz saxlayın.</p>
    `,
  },
  {
    id: 11,
    title: "Kimyəvi Su Təmizləmə",
    description: "Suyun tərkibindəki kimyəvi elementlərin təmizlənməsi üçün xüsusi proseslər və məhsullar.",
    image: "/image/category.png",
    slug: "kimyevi-su-temizlenmesi",
    content: `
      <p>Kimyəvi su təmizləmə, suyun tərkibindəki arzuolunmaz kimyəvi birləşmələri, ağır metalları, pestisidləri və digər zərərli maddələri aradan qaldırmaq üçün vacib bir prosesdir. Biz bu sahədə qabaqcıl texnologiyalar və məhsullar təklif edirik.</p>
      <p>Müasir kimyəvi təmizləmə metodlarımız, suyun həm içməli, həm də sənaye istifadəsi üçün təhlükəsiz və təmiz olmasını təmin edir. Flokulyasiya, koaqulyasiya, xlorlama və adsorbsiya kimi müxtəlif üsullarla suyun tərkibini normallaşdırırıq.</p>
      <p>Sağlamlıq standartlarına uyğun və ekoloji cəhətdən etibarlı kimyəvi su təmizləmə həllərimizlə, suyunuzun keyfiyyətini maksimum səviyyəyə çatdırın.</p>
    `,
  },
  {
    id: 12,
    title: "Mexaniki Su Təmizləmə",
    description: "Suyun tərkibindəki mexaniki çirkləndiricilərin (qum, palçıq, pas) aradan qaldırılması.",
    image: "/image/category.png",
    slug: "mexaniki-su-temizlenmesi",
    content: `
      <p>Mexaniki su təmizləmə, suyun tərkibindəki iri və kiçik asılı hissəcikləri, qumu, palçığı, pası və digər mexaniki çirkləndiriciləri süzməklə həyata keçirilir. Bu, su təmizləmə prosesinin ilk və ən vacib mərhələsidir.</p>
      <p>Biz müxtəlif növ mexaniki filtrlər, çöküntü tankları və digər avadanlıqlar təklif edirik ki, suyunuz həm məişət, həm də sənaye ehtiyacları üçün təmizlənsin. Bu sistemlər, sonrakı təmizləmə mərhələlərinin effektivliyini artırır və su təmizləmə avadanlıqlarının ömrünü uzadır.</p>
      <p>Etibarlı mexaniki su təmizləmə həllərimizlə, suyunuzu hər növ bərk hissəciklərdən azad edin və keyfiyyətli su təminatını təmin edin.</p>
    `,
  },
  {
    id: 13,
    title: "Ultrabenövşəyi (UV) Dezenfeksiya",
    description: "Bakteriya və virusların sudan effektiv şəkildə kənarlaşdırılması üçün UV sterilizasiya sistemləri.",
    image: "/image/category.png",
    slug: "ultrabenovseyi-dezenfeksiya",
    content: `
      <p>Ultrabenövşəyi (UV) dezenfeksiya, suyun tərkibindəki bakteriya, virus, göbələk və digər mikroorqanizmlərin kimyəvi maddələr istifadə etmədən effektiv şəkildə məhv edilməsi üçün istifadə olunan müasir bir metoddur.</p>
      <p>Bizim UV sterilizasiya sistemlərimiz, suyun dadını və qoxusunu dəyişmədən, lakin mikroorqanizmləri öldürərək suyun təmiz və təhlükəsiz olmasını təmin edir. Bu, xlor kimi kimyəvi maddələrin istifadəsini azaltmaqla ətraf mühitə daha az zərər verir.</p>
      <p>Məişət, sənaye və tibbi tətbiqlər üçün uyğun olan UV dezenfeksiya sistemlərimizlə, suyunuzu patogenlərdən qoruyun və sağlamlığınızı təmin edin.</p>
    `,
  },
  {
    id: 14,
    title: "İon Mübadiləsi ilə Yumşaltma",
    description: "Suyun sərtliyini aradan qaldırmaq və ərp yığılmasını önləmək üçün ion mübadiləsi sistemləri.",
    image: "/image/category.png",
    slug: "ion-mubadilesi-ile-yumşaltma",
    content: `
      <p>İon mübadiləsi ilə su yumşaltma, suyun tərkibindəki kalsium və maqnezium ionlarını (sərtliyə səbəb olan) başqa ionlarla (adətən natrium ionları ilə) dəyişdirərək suyun sərtliyini azaldan bir prosesdir.</p>
      <p>Bizim su yumşaltma sistemlərimiz, santexnika avadanlıqlarınızın, istilik qazanlarınızın və digər cihazlarınızın ömrünü uzadır, ərp yığılmasının qarşısını alır və enerji səmərəliliyini artırır. Həmçinin yumşaq su, sabun və yuyucu vasitələrin daha az istifadəsinə imkan verir.</p>
      <p>Ev, ofis və sənaye tətbiqləri üçün etibarlı və effektiv ion mübadiləsi sistemlərimizlə, sərt su problemlərindən azad olun və avadanlıqlarınızın performansını artırın.</p>
    `,
  },
  {
    id: 15,
    title: "Nanofiltrasiya sistemləri",
    description: "Su tərkibindəki kiçik hissəcikləri, üzvi maddələri və bəzi duzları təmizləmək üçün qabaqcıl texnologiya.",
    image: "/image/category.png",
    slug: "nanofiltrasiya-sistemleri",
    content: `
      <p>Nanofiltrasiya, su təmizləmə texnologiyasında yarı keçirici membranlar vasitəsilə suyun tərkibindəki çox kiçik hissəcikləri, üzvi maddələri, bəzi duzları, virusları və bakteriyaları aradan qaldıran qabaqcıl bir prosesdir.</p>
      <p>Bizim nanofiltrasiya sistemlərimiz, yüksək keyfiyyətli içməli su istehsalı, sənaye prosesləri və tullantı sularının təmizlənməsi kimi geniş tətbiqlər üçün idealdır. Bu sistemlər, suyun mineralların bir hissəsini saxlayaraq, təbii dadını qoruyur.</p>
      <p>Enerji səmərəli və yüksək performanslı nanofiltrasiya həllərimizlə, suyunuzu ən yüksək təmizlik standartlarına çatdırın.</p>
    `,
  },
  {
    id: 16,
    title: "Ultrafiltrasiya sistemləri",
    description: "Asılı hissəcikləri, kolloidləri və böyük molekulyar üzvi maddələri sudan kənarlaşdırmaq üçün effektiv filtrasiya.",
    image: "/image/category.png",
    slug: "ultrafiltrasiya-sistemleri",
    content: `
      <p>Ultrafiltrasiya, suyun tərkibindəki asılı hissəcikləri, kolloidləri, böyük molekulyar üzvi maddələri, virusları və bakteriyaları aradan qaldırmaq üçün istifadə olunan bir membran filtrasiya prosesidir.</p>
      <p>Bizim ultrafiltrasiya sistemlərimiz, içməli su təmizləməsi, sənaye prosesləri və tullantı sularının ilkin təmizlənməsi kimi tətbiqlər üçün mükəmməldir. Bu sistemlər, suyun tərkibindəki mineralları qoruyaraq, təbii keyfiyyətini saxlayır.</p>
      <p>Effektiv, etibarlı və minimal texniki xidmət tələb edən ultrafiltrasiya həllərimizlə, suyunuzu təmizləyin və təhlükəsizliyini təmin edin.</p>
    `,
  },
  {
    id: 17,
    title: "Əks Osmoz (RO) Sistemləri",
    description: "Suyun tərkibindəki bütün duzları, mineralları və çirkləndiriciləri təmizləyən ən qabaqcıl təmizləmə metodu.",
    image: "/image/category.png",
    slug: "eks-osmoz-sistemleri",
    content: `
      <p>Əks Osmoz (RO), su təmizləmə sahəsində ən effektiv və qabaqcıl texnologiyalardan biridir. Bu proses, yarı keçirici bir membran vasitəsilə suyun tərkibindəki duzların, mineralların, virusların, bakteriyaların və digər çirkləndiricilərin 99%-ə qədərini aradan qaldırır.</p>
      <p>Bizim RO sistemlərimiz, təmiz içməli su istehsalı, sənaye prosesləri, dərman sənayesi və digər yüksək təmizlik tələb edən sahələr üçün idealdır. RO suyu, xüsusilə körpə qidası hazırlanması və tibbi tətbiqlər üçün uyğundur.</p>
      <p>Yüksək performanslı, etibarlı və uzunömürlü Əks Osmoz sistemlərimizlə, suyunuzu mümkün olan ən yüksək təmizlik səviyyəsinə çatdırın.</p>
    `,
  },
  {
    id: 18,
    title: "Su Yumşaltma Qurğuları",
    description: "Sərt sudan yaranan ərp və digər problemləri həll etmək üçün avtomatlaşdırılmış yumşaltma qurğuları.",
    image: "/image/category.png",
    slug: "su-yumşaltma-qurğuları",
    content: `
      <p>Sərt su, məişət cihazlarında, sənaye avadanlıqlarında və borularda ərp yığılmasına səbəb olur ki, bu da onların performansını azaldır və ömrünü qısaldır. Su yumşaltma qurğuları bu problemi həll etmək üçün əvəzsizdir.</p>
      <p>Bizim avtomatlaşdırılmış su yumşaltma qurğularımız, suyun tərkibindəki kalsium və maqnezium ionlarını effektiv şəkildə aradan qaldırır. Bu, avadanlıqlarınızın qorunmasını, enerji səmərəliliyini artırır və sabun kimi yuyucu vasitələrin daha səmərəli istifadəsinə imkan verir.</p>
      <p>Ev, ofis və sənaye miqyasında istifadə üçün uyğun olan su yumşaltma qurğularımızla, sərt su problemlərindən qurtulun və cihazlarınızın uzunömürlülüyünü təmin edin.</p>
    `,
  },
  {
    id: 19,
    title: "Dərman Sənayesi üçün Su Təmizlənməsi",
    description: "Farmasevtik istehsalda tələb olunan yüksək təmizlik standartlarına uyğun su təmizləmə sistemləri.",
    image: "/image/category.png",
    slug: "dərman-sənayesi-ucun-su-temizlenmesi",
    content: `
      <p>Dərman sənayesi, suyun keyfiyyəti üçün ən yüksək təmizlik və sterillik standartlarına malikdir. Biz farmasevtik istehsalda istifadə olunan suyun təmizlənməsi və hazırlanması üçün xüsusi olaraq hazırlanmış sistemlər təklif edirik.</p>
      <p>Sistemlərimiz, dərmanların istehsalında kritik əhəmiyyət kəsb edən deionizasiya, ultradanfiltrasiya, əks osmoz və UV sterilizasiya kimi qabaqcıl texnologiyaları özündə birləşdirir. Bu, suyun tərkibindəki bütün çirkləndiriciləri, mikroorqanizmləri və endotoksinləri aradan qaldırır.</p>
      <p>Qlobal tənzimləyici standartlara (FDA, GMP) tam uyğun olan dərman sənayesi üçün su təmizləmə həllərimizlə, məhsullarınızın keyfiyyətini və təhlükəsizliyini təmin edin.</p>
    `,
  },
];

export function getServiceBySlug(slug: string): ServiceCardData | undefined {
  return allServices.find(service => service.slug === slug);
}