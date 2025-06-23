export interface ApiResponse<T> {
  timestamp: string;
  status: boolean;
  message: string;
  lang: string;
  data: T;
}

export interface RecordDataWithEmail {
  name: string;
  surname: string;
  email: string;
  note: string;
}
export type EmailRecordApiResponse = ApiResponse<RecordDataWithEmail>;

export interface RecordDataWithPhone {
  name: string;
  surname: string;
  phone: string;
  question: string;
}
export type PhoneRecordApiResponse = ApiResponse<RecordDataWithPhone>;



export interface BlogPost {
  title: string;
  slug: string;
  image: string;
  thumb_image: string;
  description: string;
  tag: string;
  created_at: string;
  blog:{
    title: string;
  slug: string;
  image: string;
  thumb_image: string;
  description: string;
  tag: string;
  created_at: string;
  }
}

export interface BlogsApiResponse {
  data: BlogPost[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: {
      url: string | null;
      label: string;
      active: boolean;
    }[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}

export interface ContactType {
  map: string;
  address: string;
  phone: string;
  email: string;
}

export interface TagType {
  name: string;
  slug: string;
}

export interface ServicesType {
  title: string;
  slug: string;
  image: string;
  thumb_image: string;
  description: string;
}

export interface StatisticsType{
  title: string;
  number: string;
}

export interface AdvantagesType{
  title: string;
  image: string;
}

export interface HeroType {
  title_1: string;
  title_2: string;
  description: string;
  image_1: string;
  image_2: string;
  image_3: string;
  button_link: string;
  button_text: string;
}

export interface AttributeType {
  title: string;
  description: string;
  image: string;
}

export interface AboutType {
  title_1: string;
  description_1: string;
  title_2: string;
  description_2: string;
  image: string;
  thumb_image: string;
}

export interface OurValuesType {
  title: string;
  description: string;
  image: string;
}

export interface CategoriesType {
  title: string;
  slug: string;
  image: string;
}

export interface ProductImageType {
  image: string;
  thumb_image: string;
}

export interface ProductType {
  title: string;
  name: string;
  slug: string;
  category: string;
  image: string;
  thumb_image: string;
  description: string;
  images: ProductImageType[];
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
}

export interface ProductListResponse {
  data: ProductType[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: {
      url: string | null;
      label: string;
      active: boolean;
    }[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}

export interface ProductDetailResponse {
  timestamp: string;
  status: boolean;
  message: string;
  lang: string;
  data: ProductType;
}

export interface MetaTagsType {
    title: string;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
}
export interface SocialMediaType{
  name: string;
  image: string;
  link: string;
}