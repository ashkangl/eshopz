"use client"
import { ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const ShoppingCartIcon = () => {
    const cart = useSelector((state) => state.cart);
    const router = useRouter();
    const getItemsCount = () => {
      return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
    };

    const handleCart = () => {router.push('/cart')}
    return(
        <div className="relative">
            <button onClick={handleCart} className="pt-2"><ShoppingCart /></button>
            <div className="absolute bg-amber-200 p-1 rounded-md font-semibold -mt-3 ml-4">{getItemsCount()}</div>
        </div>
    )
}

export default ShoppingCartIcon