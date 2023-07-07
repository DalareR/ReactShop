import React from 'react';
import InfoFooter from '../InfoFooter';
import { Link } from 'react-router-dom';

export default function MenuNav({ showMenu }) {
    const isHidden = showMenu ? 'w-3/4' : 'w-0';

    return (
        <div id='menuNavbar' className={`flex flex-col items-center absolute bg-white whitespace-nowrap overflow-hidden h-screen transition-all ease-out duration-400 ${isHidden}`}>
            <div className='flex'>
                <input className='block border p-2 m-4 border-black' placeholder='Type to search..'>
                </input>
                <button className='text-2xl border-2 p-2 m-4 rounded hover:text-blue-400'>
                    <i class='bx bx-search-alt'></i>
                </button>
            </div>
            <Link className='linknavbar' to='/home'>
                Home
            </Link>
            <Link className='linknavbar' to='/about'>
                About
            </Link>
            <Link className='linknavbar' to='/contact'>
                Contact
            </Link>
            <InfoFooter classProps={'pt-48'}/>
        </div>
    )
}