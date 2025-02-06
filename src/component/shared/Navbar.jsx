import React, { useState } from 'react'
import Avatar from 'react-avatar'
import { GoQuestion } from 'react-icons/go'
import { IoIosSearch } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'
import { PiDotsNineBold } from 'react-icons/pi'
import { RxHamburgerMenu  } from 'react-icons/rx'

const Navbar = () => {
    const [input, setInput] = useState("");
  return (
    <div className='flex justify-between mx-3 h-15'>
       <div className='flex items-center gap-10 '>
        <div className='flex items-center gap-2'>
            <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                <RxHamburgerMenu size={"20px"}/>
            </div>
            <img className="w-8" src="https://imgs.search.brave.com/LRLHPMmWFPhDy0xqrW4t7kP1WSlR-nsb6CKrniDJoIY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MTEvR21haWwtTG9n/by03MDB4Mzk0LnBu/Zw" alt="gmail-logo" />
            <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
        </div>
       </div>
       <div className='md:block hidden w-[50%] mt-2'>
        <div className='flex items-center bg-[#EAF1FB] px-2 py-2 rounded-full'>
            <IoIosSearch size={"20px"}className='text-gray-400' />
            <input type="text"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder='Search mail'
            className='rounded-full w-full bg-transparent outline-none px-1'
            />``
        </div>
       

       </div>
       <div className='md:block hidden'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <GoQuestion size={"24px"}/>
                </div>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <IoSettingsOutline size={"24px"}/>
                </div>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <PiDotsNineBold size={"24px"}/>
                </div>
                <div className='cursor-pointer '>
                    <Avatar src='https://imgs.search.brave.com/sgja2jwN6uRnsYfcG4R_icgWy31hvZSq7tFQ7SPPlPw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQy/OTIyNTA3L3Bob3Rv/L3lvdW5nLW1hbi1z/aWxob3VldHRlLXNp/bWlsaW5nLWhhcHB5/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0xSGFfWGtTTGlB/MVEzckNTT0kxM0dS/a3lBaUtmdm1KYWNU/T3RuLVVpNGw4PQ' size='40' round={true} />

                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar
