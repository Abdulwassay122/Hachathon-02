import React from 'react'
import Image from "next/image";
import twitter from "./assets/Frame (6).svg";
import facebook from "./assets/Vector (11).svg";
import youtube from "./assets/Frame (7).svg";
import insta from "./assets/Vector (12).svg";
import location from "./assets/Vector (13).svg";

export default function Footer() {
  return (
    <section className='bg-[#111111] px-[34px] flex flex-col gap-12 pb-5 text-white'>
        <div className='mt-10 flex justify-between'>
            <div className='flex gap-24'>
                <div className='flex flex-col gap-4'>
                    <p className='text-[10px]'>Find A Store</p>
                    <p className='text-[10px]'>Become A Member</p>
                    <p className='text-[10px]'>Sign Up for Email</p>
                    <p className='text-[10px]'>Send Us Feedback</p>
                    <p className='text-[10px]'>Student Discounts</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-[10px]'>Get Help</p>
                    <p className='text-[10px] text-[#7E7E7E]'>Order Status</p>
                    <p className='text-[10px] text-[#7E7E7E]'>Delivery</p>
                    <p className='text-[10px] text-[#7E7E7E]'>Returns</p>
                    <p className='text-[10px] text-[#7E7E7E]'>Payment Options</p>
                    <p className='text-[10px] text-[#7E7E7E]'>Contact Us On Nike.com Inquiries</p>
                    <p className='text-[10px] text-[#7E7E7E]'>Contact Us On All Other Inquiries</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-[10px]'>About Nike</p>
                    <p className='text-[10px] text-[#7E7E7E]'>News</p>
                    <p className='text-[10px] text-[#7E7E7E]'>Careers</p>
                    <p className='text-[10px] text-[#7E7E7E]'>Investors</p>
                    <p className='text-[10px] text-[#7E7E7E]'>Sustainability</p>
                </div>
            </div>
            <div className='flex gap-4 items-start'>
                    <Image src={twitter} alt="" />
                    <Image src={facebook} alt="" />
                    <Image src={youtube} alt="" />
                    <Image src={insta} alt="" />
            </div>
        </div>

        <div className='flex justify-between '>
            <div className='flex gap-4 items-center'>
                <div className='flex gap-3'>
                    <Image src={location} alt="" />
                    <p className='text-[12px]'>India</p>
                </div>
                <p className='text-[11px] text-[#7E7E7E]'>© 2023 Nike, Inc. All Rights Reserved</p>
            </div>
            <div className='flex gap-7'>
                <p className='text-[12px] leading-3 text-[#7E7E7E]'>Guides</p>
                <p className='text-[12px] leading-3 text-[#7E7E7E]'>Terms of Sale</p>
                <p className='text-[12px] leading-3 text-[#7E7E7E]'>Terms of Use</p>
                <p className='text-[12px] leading-3 text-[#7E7E7E]'>Nike Privacy Policy</p>
            </div>
        </div>
    </section>
  )
}
