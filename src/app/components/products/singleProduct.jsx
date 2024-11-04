const SingleProduct = ({item}) => {
    return(
        <div className="bg-slate-300 dark:bg-slate-700 rounded-xl shadow-sm  h-auto hover:-translate-y-1 hover:scale-105 duration-300">
            <div className="block">
                <img src={item.image} alt={item.title} className="w-full h-64 rounded-t-xl shadow shadow-slate-500" />
                <div className="w-full">
                    <div className="md:text-md text-sm p-1 font-semibold h-24">{item.title}</div>
                    <div className="flex justify-between">
                        <div className="md:text-sm text-xs p-1 mt-1 ml-1 font-semibold text-red-500">${item.price}</div>
                        <button className="py-2 px-4 bg-green-500 mb-2 shadow-md shadow-green-600 mr-2 font-semibold rounded-xl border-green-800 text-white hover:bg-blue-700 hover:shadow-sm hover:shadow-blue-800 bottom-1">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct