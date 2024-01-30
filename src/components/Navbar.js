import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle, AiOutlineMinusCircle, AiOutlinePlusCircle, AiOutlineShoppingCart } from "react-icons/ai";

import { BsFillBagCheckFill } from 'react-icons/bs';

const Navbar = () => {


    const ref = useRef()

    const toggleCart = () => {
        if (ref.current.classList.contains("translate-x-full")) {
            ref.current.classList.remove("translate-x-full")
            ref.current.classList.add("translate-x-0")
        }
        else if (!ref.current.classList.contains("translate-x-full")) {
            ref.current.classList.remove("translate-x-0")
            ref.current.classList.add("translate-x-full")
        }
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
                <AiOutlineShoppingCart className='text-xl md:text-2xl cursor-pointer' onClick={toggleCart} />
            </div>


            <div ref={ref} className="sideCart w-72 h-full absolute top-0 right-0 bg-green-100 py-10 px-8 transform transition-transform translate-x-full w z-10">
                <h2 className='font-bold text-xl'>Shopping Cart</h2>
                <span className="absolute top-4 right-4 cursor-pointer text-2xl text-green-500" onClick={toggleCart}>
                    <AiFillCloseCircle />
                </span>
                <ol className='list-decimal font-semibold'>
                    <li>
                        <div className="item flex my-5">
                            <div className='w-2/3 font-semibold'>T-Shirt Wear the code</div>
                            <div className='w-1/3 font-semibold flex items-center justify-center text-lg'>
                                <AiFillMinusCircle className='cursor-pointer text-green-500' />
                                <span className="mx-2">1</span>
                                <AiFillPlusCircle className='cursor-pointer text-green-500' />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item flex my-5">
                            <div className='w-2/3 font-semibold'>T-Shirt Wear the code</div>
                            <div className='w-1/3 font-semibold flex items-center justify-center text-lg'>
                                <AiFillMinusCircle className='cursor-pointer text-green-500' />
                                <span className="mx-2">1</span>
                                <AiFillPlusCircle className='cursor-pointer text-green-500' />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item flex my-5">
                            <div className='w-2/3 font-semibold'>T-Shirt Wear the code</div>
                            <div className='w-1/3 font-semibold flex items-center justify-center text-lg'>
                                <AiFillMinusCircle className='cursor-pointer text-green-500' />
                                <span className="mx-2">1</span>
                                <AiFillPlusCircle className='cursor-pointer text-green-500' />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item flex my-5">
                            <div className='w-2/3 font-semibold'>T-Shirt Wear the code</div>
                            <div className='w-1/3 font-semibold flex items-center justify-center text-lg'>
                                <AiFillMinusCircle className='cursor-pointer text-green-500' />
                                <span className="mx-2">1</span>
                                <AiFillPlusCircle className='cursor-pointer text-green-500' />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item flex my-5">
                            <div className='w-2/3 font-semibold'>T-Shirt Wear the code</div>
                            <div className='w-1/3 font-semibold flex items-center justify-center text-lg'>
                                <AiFillMinusCircle className='cursor-pointer text-green-500' />
                                <span className="mx-2">1</span>
                                <AiFillPlusCircle className='cursor-pointer text-green-500' />
                            </div>
                        </div>
                    </li>
                </ol>
                <button className="flex mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg items-center justify-center">
                    <BsFillBagCheckFill className='mr-2' />
                    Checkout
                </button>
            </div>
        </div >
    )
}

export default Navbar