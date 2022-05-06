import React, { useState } from 'react'
import { Biography } from '../Biography';
import { GetinTouch } from '../Contact/Index';
import { Profile } from '../Profile';

export const Header = () => {
    return <>
        <header className='w-31.25 mb-5'>
            <div className="flex justify-between items-center p-3.5 ">
                <div className="flex items-center">
                    <i className="fa-solid fa-arrow-left-long  mr-5 cursor-pointer p-3 text-2xl"></i>
                    <h3 className="font-semibold">GABRILPOVOA</h3>
                </div>
                <div className="flex gap-8 items-center">
                    <i className="fa-regular fa-bell cursor-pointer p-3 text-2xl"></i>
                    <i className="fa-solid fa-ellipsis-vertical cursor-pointer p-3 text-2xl"></i>
                </div>
            </div>
        </header>
        <Profile />
        <Biography />
        <GetinTouch />
    </>
}

export default Header;