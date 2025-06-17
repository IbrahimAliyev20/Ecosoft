import ContactPage from '@/components/pages/contact/ContactPage'
import { getContact } from '@/lib/contact';
import React from 'react'

const Contact = async () => {
  const contact = await getContact();

  return (
    <div>
      <ContactPage   contact={contact} />
    </div>
  )
}

export default Contact