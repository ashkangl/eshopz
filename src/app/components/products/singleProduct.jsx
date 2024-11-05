"use client"
import AddToCart from "../general/addToCart"

const SingleProduct = ({item}) => {
    return(
        <div className="bg-slate-300 dark:bg-slate-700 rounded-xl shadow-sm  h-auto hover:-translate-y-1 hover:scale-105 duration-300">
            <div className="block">
                <img src={item.image} alt={item.title} className="w-full h-64 rounded-t-xl shadow shadow-slate-500" />
                <div className="w-full">
                    <div className="md:text-md text-sm p-1 font-semibold h-24">{item.title}</div>
                    <div className="flex justify-between">
                        <div className="md:text-sm text-xs p-1 mt-1 ml-1 font-semibold text-red-500">${item.price}</div>
                        <AddToCart item={item} />                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct