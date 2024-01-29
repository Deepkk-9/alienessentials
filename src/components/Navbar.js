import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
    return (
        <div className='flex justify-center flex-col items-center md:flex-row md:justify-start shadow-md mb-2'>
            <div className="logo mx-5">
                <Link href={"/"}> <Image src={"/logo.jpg"} width={70} height={70} /></Link>
            </div>

            <div className="nav">
                <ul className='flex items-center space-x-6 font-bold md:text-md'>
                    <Link href={"/tshirts"}><li>T-shirts</li></Link>
                    <Link href={"/hoodies"}><li>Hoodies</li></Link>
                    <Link href={"/stickers"}><li>Stickers</li></Link>
                    <Link href={"/mugs"}><li>Mugs</li></Link>
                </ul>
            </div>

            <div className="cart absolute right-0 mx-5">
                <AiOutlineShoppingCart className='text-xl md:text-2xl' />
            </div>
        </div >
    )
}

export default Navbar