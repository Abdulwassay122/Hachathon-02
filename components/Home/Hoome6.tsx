import React from 'react'
import Image from "next/image";
import img1 from "./assets/Frame (3).svg";
import img2 from "./assets/Frame (4).svg";
import img3 from "./assets/Frame (5).svg";

export default function Hoome6() {
  return (
    <section className='px-[42px] flex flex-col gap-[84px]'>
        <div className='flex flex-col gap-6'>
            <h3 className='text-[23px] leading-7 font-[500]'>The Essentials</h3>
            <div className='pl-[6px] flex gap-3 justify-between'>
                <Image src={img1} alt="" />
                <Image src={img2} alt="" />
                <Image src={img3} alt="" />
            </div>
        </div>
        <div className='px-[232px] pb-[56px] flex justify-between'>
            <div className='w-[184px] flex flex-col gap-6'>
                <p className='text-[15px] leading-6 font-[500]'>Icons</p>
                <div className='flex flex-col gap-3'>
                    <p className='text-[15px] leading-6 font-[500] text-[#757575]'>Air Force 1</p>
                    <p className='text-[15px] leading-6 font-[500] text-[#757575]'>Huarache</p>
                    <p className='text-[15px] leading-6 font-[500] text-[#757575]'>Air Max 90</p>
                    <p className='text-[15px] leading-6 font-[500] text-[#757575]'>Air Max 95</p>
                </div>
            </div>
            <div className='w-[184px] flex flex-col gap-6'>
                <p className='text-[15px] leading-6 font-[500]'>Shoes</p>
                <div className='flex flex-col gap-3'>
                    <p className='text-[15px] leading-6 font-[500] text-[#757575]'>All Shoes</p>
                    <p className='text-[15px] leading-6 font-[500] text-[#757575]'>Custom Shoes</p>
                    <p className='text-[15px] leading-6 font-[500] text-[#757575]'>Jordan Shoes</p>
                    <p className='text-[15px] leading-6 font-[500] text-[#757575]'>Running Shoes</p>
                </div>
            </div>
            <div className='w-[184px] flex flex-col gap-6'>
                <p className='text-[15px] leading-6 font-[500]'>Clothing</p>
                <div className='flex flex-col gap-3'>
                    <p className='text-[15px] leading-6 font-[500] text-[#757575]'>All Clothing</p>
                    <p className='text-[15px] leading-6 font-[500] text-[#757575]'>Modest Wear</p>
                    <p className='text-[15px] leading-6 font-[500] text-[#757575]'>Hoodies & Pullovers</p>
                    <p className='text-[15px] leading-6 font-[500] text-[#757575]'>Shirts & Tops</p>
                </div>
            </div>
            <div className='w-[184px] flex flex-col gap-6'>
                <p className='text-[15px] leading-6 font-[500]'>Kids'</p>
                <div className='flex flex-col gap-3'>
                    <p className='text-[15px] leading-6 font-[500] text-[#757575]'>Infant & Toddler Shoes</p>
                    <p className='text-[15px] leading-6 font-[500] text-[#757575]'>Kids' Shoes</p>
                    <p className='text-[15px] leading-6 font-[500] text-[#757575]'>Kids' Jordan Shoes</p>
                    <p className='text-[15px] leading-6 font-[500] text-[#757575]'>Kids' Basketball Shoes</p>
                </div>
            </div>
        </div>
    </section>
  )
}
