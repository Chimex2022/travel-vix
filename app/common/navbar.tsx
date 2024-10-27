import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './button'

const Navbar = () => {
  return (
    <nav className='max-container relative padding-container flexBetween z-30 py-5'>
     <Link href={`/`}>
     <Image 
      src="/hilink-logo.svg"
      alt='logo'
      width={74}
      height={29}
     />
      </Link>

     <ul className='hidden h-full gap-12 lg:flex'>
      {NAV_LINKS.map((link, index) => (
         <Link href={link.href} key={index}
         className='regular-16 text-gray-50 flexCenter cursor-pointer
         pb-1.5 hover:font-bold transition-all duration-300'>
            {link.label}
         </Link>
      ))}
     </ul>

     <div className='hidden lg:flexCenter'>
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
     </div>

     <Image
      src={`menu.svg`}
      alt='menu'
      width={32}
      height={32}
      className='inline-block cursor-pointer lg:hidden'
     
     />
    
    </nav>
  )
}

export default Navbar
