import React, { useState, useEffect } from 'react'
import { PostType } from '../../type/PostType'
import Options from '../Options'
import Load from '../../Load/Loading'
import { api } from '../../api'

const Posts = () => {
    const [post, setPost] = useState<PostType[]>([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        loadPosts()
    }, [])

    const loadPosts = async () => {
        setLoad(true)
        let json = await api.getallPosts()
        setLoad(false)
        setPost(json)
    }


    return (
        <section className='w-31.25 mt-12'>
            <Options />
            <div className="p-5">
                {load && <Load/> }

                <div className="Posts">
                    {!load && post.length > 0 &&
                        <div className='grid grid-cols-3 gap-3'>
                            {post.map((item, index) => (
                                <div className="flex items-start h-70 w-70" key={index}>
                                    <img
                                        src={item.img}
                                        alt={item.nickname}
                                        className="object-cover h-full cursor-pointer"
                                    />
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Posts