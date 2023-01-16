import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function author(){
    return(
        <div className='author flex py-5'>
            <Image src={"/images/me.jpg"} width={60} height={20} className="rounded-full"></Image>
            <div className='flex flex-col justify-center px-4'>
                <Link href={"/"} legacyBehavior><a className='text-md font-bold text-gray-800 hover:text-gray-600'>Asmita Pal</a></Link>
                <span className='text-sm text-gray-500'>Yours' Truly</span>
            </div>
        </div>
    )
}