import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const ButtonMore = () => {
  return (
  <div className="flex justify-center mt-6 ">
        <Button
          variant="default"
          className='cursor-pointer px-[26px] py-[22px] rounded-[14px]'>
          Ətraflı
          <Image 
          src='/icons/ExternalLink.svg'
          alt='ExternalLink.svg'
          width={20}
          height={20}
          className='text-white '
          />
        </Button>
      </div>
  )
}

export default ButtonMore