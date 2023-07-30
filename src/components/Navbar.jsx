import React, {useState} from 'react';
import {BsPerson } from 'react-icons/bs';
import {BiSearch } from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa';

const Navbar = () => {
const [nav, setNav] = useState(false);
const handleNav = () => {
    setNav(!nav)
};
  return (
    <div className='flex justify-between h-20 px-4'>
      <div>
        <h1>BEACHES.</h1>
      </div>
      <ul className='hiddden md:flex' >
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className='hidden md:flex'>
      <BiSearch size={20}/>
      <BsPerson size={20}/>
      </div>

     
     <div onClick = {handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <HiOutlineMenuAlt4 size={20}/>}
        
     </div>

      {/* Mobile Menu dropdown*/}
     <div>
     <ul className='absolute left-[-100%] top-0 bg-gray-100/90 w-full px-4 py-7 flex flex-col' >
        <h1>BEACHES.</h1>
        <li className='border-b'>Home</li>
        <li className='border-b'>Destination</li>
        <li className='border-b'>Travel</li>
        <li className='border-b'>View</li>
        <li>Book</li>
        <div className='flex flex-col'>
            <button className='my-4'>Search</button>
            <button>Account</button>
        </div>
        <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
        </div>
      </ul>
     </div>
    </div>
  )
}

export default Navbar
