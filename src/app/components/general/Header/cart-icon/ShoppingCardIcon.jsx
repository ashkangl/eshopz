import { ShoppingCart } from "lucide-react"

const ShoppingCartIcon = () => {
    return(
        <div className="relative">
            <button className="pt-2"><ShoppingCart /></button>
            <div className="absolute bg-amber-200 p-1 rounded-md font-semibold -mt-3 ml-4">2</div>
        </div>
    )
}

export default ShoppingCartIcon