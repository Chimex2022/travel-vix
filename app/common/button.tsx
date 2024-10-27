import Image from 'next/image';
import React from 'react'

type ButtonProps = {
    type: "button" | "submit";
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
    type={type}
    className={`flexCenter rounded-full border gap-3 ${variant} ${full && 'w-full'}`}
    >
    {icon && <Image src={icon} alt={title} width={24} height={24} />}
    <span className='bold-16 whitespace-nowrap'>{title}</span>
    </button>
  )
}

export default Button
