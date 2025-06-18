import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { useTranslations } from 'next-intl'


const ButtonMore = () => {
  const t = useTranslations()
  return (
  <div className="flex justify-center mt-8 ">
        <Button
          variant="default"
          className='cursor-pointer px-[26px] py-[22px] rounded-[14px]'>
          {t('hero.detailed')}
          <Image 
          src='/icons/ExternalLink.svg'
          alt='ExternalLink.svg'
          width={20}
          height={20}
          priority={true}
          className='text-white '
          />
        </Button>
      </div>
  )
}

export default ButtonMore