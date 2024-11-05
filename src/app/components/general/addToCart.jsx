"use client"
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/cartSlice"

const AddToCart = ({item}) => {

    const dispatch = useDispatch();

    const handleBuy = () => {
        dispatch(addToCart(item));
    }

    return(
        <button onClick={handleBuy} className="py-2 px-4 bg-green-500 mb-2 shadow-md shadow-green-600 mr-2 font-semibold rounded-xl border-green-800 text-white hover:bg-blue-700 hover:shadow-sm hover:shadow-blue-800 bottom-1">Add To Cart</button>
    )
}

export default AddToCart