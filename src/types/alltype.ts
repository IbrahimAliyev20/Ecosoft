
export interface BlogPost {
  title: string;
  slug: string;
  image: string;         
  thumb_image: string;
  description: string;  
  tag: string;          
  created_at: string;    
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
