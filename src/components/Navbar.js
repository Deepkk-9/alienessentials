import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { AiFillCloseCircle, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {


    const ref = useRef()

    const toggleCart = () => {

    }


    return (
        <div className='flex justify-center flex-col items-center md:flex-row md:justify-start shadow-md mb-2'>
            <div className="logo mx-5">
                <Link href={"/"}> <Image src={"/logo.jpg"} alt='logo' width={70} height={70} /></Link>
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


            <div ref={ref} className="sideCart absolute top-0 right-0 bg-green-100 p-10 transform transition-transform -translate-x-full ">
                <h2 className='font-bold text-xl'>Shopping Cart</h2>
                <span className="absolute top-4 right-4 cursor-pointer text-2xl text-green-500" onClick={toggleCart}>
                    <AiFillCloseCircle />
                </span>
                <ol>
                    <li>
                        T-Shirt Wear the code
                    </li>
                </ol>
            </div>
        </div >
    )
}

export default Navbar