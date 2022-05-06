import post from '../../public/images/post.jpg'
import rocket from '../../public/images/rocket.jpg'

export const Highlight = () => {
    return (
        <section className="w-31.25">
            <div className="px-5 flex gap-10 items-center">
                <div className="w-20 h-20 flex flex-col items-center justify-center ">
                    <img
                        src={post}
                        alt=""
                        className='border border-purple-500 mb-3 object-cover h-full rounded-full hover:scale-90 ' 
                        />
                    <span className='uppercase font-semibold'>Team</span>
                </div>
                <div className="w-20 h-20 flex flex-col items-center justify-center">
                    <img
                        src={rocket}
                        alt=""
                        className='border border-purple-500 mb-3 object-cover h-full rounded-full hover:scale-90' 
                        />
                    <span className='uppercase font-semibold'>About</span>
                </div>
                <div className="w-20 h-20 flex flex-col items-center justify-center">
                    <img
                        src={post}
                        alt=""
                        className='border border-purple-500 mb-3 object-cover h-full rounded-full hover:scale-90' 
                        />
                    <span className='uppercase font-semibold'>Important!</span>
                </div>
            </div>
        </section>
    )
}

export default Highlight