import react, { useState } from 'react'

import UserPhoto from '../../public/images/user.png'
import { PostType } from '../../type/PostType'
import { api } from '../../api'

export const Profile = () => {

    return (
        <section className="w-31.25">
            <div className="px-5 flex">
                <div className="w-40 h-40 ">
                    <img
                        src={UserPhoto}
                        alt={UserPhoto}
                        className="object-cover h-full rounded-full "
                    />
                </div>
                <div className="flex justify-center items-center flex-1 gap-10">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className='text-center font-bold'>500</h2>
                        <p>Posts</p>
                    </div>
                    <div className="followers">
                        <h2 className='text-center font-bold'>112K</h2>
                        <p>Followers</p>
                    </div>
                    <div className="following">
                        <h2 className='text-center font-bold'>1.953</h2>
                        <p>Following</p>
                    </div>
                </div>
            </div >
        </section >
    )
} 