export const GetinTouch = () => {
    return(
        <section className="w-31.25 mb-12">
            <div className="px-5 flex items-center justify-between gap-4">
                <button className="flex-1 border border-gray-500 p-1 rounded flex items-center justify-center gap-2 text-center">
                    Following
                    <i className="fa-solid fa-chevron-down"></i>
                </button>
                <button className="flex-1 border border-gray-500 p-1 rounded text-center">Message</button>
                <button className="flex-1 border border-gray-500 p-1 rounded text-center">Email</button>
                <button className="border border-gray-500 px-2 py-1 rounded text-center"><i className="fa-solid fa-user-plus"></i></button>
            </div>
        </section>
    )
}
