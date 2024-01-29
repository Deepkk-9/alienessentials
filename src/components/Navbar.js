import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
    return (
        <div className='flex justify-center flex-col items-center md:flex-row md:justify-start'>
            <div className="logo mx-5">
                <Image src={"/logo.jpg"} width={70} height={70} />
            </div>

            <div className="nav">
                <ul className='flex items-center space-x-2 font-bold md:text-xl'>
                    <Link href={"/"}><li>T-shirts</li></Link>
                    <Link href={"/"}><li>Hoodies</li></Link>
                    <Link href={"/"}><li>Stickers</li></Link>
                    <Link href={"/"}><li>Mugs</li></Link>
                </ul>
            </div>

            <div className="cart absolute right-0 mx-5">
                <AiOutlineShoppingCart className='text-2xl md:text-4xl' />
            </div>
        </div>
    )
}

export default Navbar