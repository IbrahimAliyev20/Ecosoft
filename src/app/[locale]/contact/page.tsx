import ContactPage from '@/components/pages/contact/ContactPage'
import { getContact } from '@/lib/contact';
import { getMetaTags } from '@/lib/metatags';
import { MetaTagsType } from '@/types/alltype';
import React from 'react'

export async function generateMetadata() {
  const metaData: MetaTagsType[] = await getMetaTags();

  const defaultMeta = metaData.find((meta) => meta.title.toLowerCase() === 'Contact') || {
    meta_title: 'EcoSoft | Contact meta',
    meta_description: 'EcoSoft | Contact meta',
    meta_keywords: 'EcoSoft | Contact meta',
    
  };
  
  return {
    title: defaultMeta.meta_title,
    description: defaultMeta.meta_description,
    keywords: defaultMeta.meta_keywords,
    openGraph: {
      title: defaultMeta.meta_title,
      description: defaultMeta.meta_description,
      url: process.env.NEXT_PUBLIC_BASE_URL,
      type: 'website',
    },
  };
}

const Contact = async () => {
  const contact = await getContact();
  

  return (
    <div>
      <ContactPage   contact={contact} />
    </div>
  )
}

export default Contact