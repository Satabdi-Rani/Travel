import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
     <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
            <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
            <p className='py-4'>
                Columbiana Area Tourism Bureau (CATB) is a 501c3 nonprofit organization dedicated to the preservation of Columbiana’s unique heritage and sustainable tourism designed to contribute to the area’s economic growth. The charity hosts the Joy of Christmas and Wine Festival events
               annually, collaborates with local businesses and works in conjunction with the Columbiana Chamber of Commerce.</p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
            <div className='flex flex-col lg:flex-row items-center text-center'>
                <button><RiCustomerService2Fill size={50} /></button>
                <div>
                    <h3 className='py-2 '>LEADING SERVICE</h3>
                    <p className='py-1'>All-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center text-center'>
                <button><MdOutlineTravelExplore size={50} /></button>
                <div>
                    <h3 className='py-2 '>LEADING SERVICE</h3>
                    <p className='py-1'>All-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                </div>
            </div>
        </div>
        </div>

        {/* right */}
     <div>
        <div className='border text-center'>
            <p className='pt-2'>GET AN ADDITIONAL 10% OFF </p>
            <p className='py-4'>12 HOURS LEFT</p>
            <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
        </div>
        <form className='w-full'>
            <div className='flex flex-col my-2'>
                <label >Destination</label>
                <select className='border rounded-md p-2'>
                    <option>Grande Antigua</option>
                    <option>Key West</option>
                    <option>Maldives</option>
                    <option>Conzuma Antigua</option>
                </select>
            </div>
            <div className='flex flex-col my-4'>
                <label >Check-In</label>
                <input className='border rounded-md p-2' type="date" />
            </div>
            <div className='flex flex-col my-2'>
                <label htmlFor="Check-Out"></label>
                <input className='border rounded-md p-2' type="date" />
            </div>
            <div>
                <button className='w-full my-4'>Rates & Availabilities</button>
                </div>
        </form>
     </div>
    </div>
  )
}

export default Search