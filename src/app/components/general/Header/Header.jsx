import DayNightButton from "./day-night/DayNightButton"
import Navbar from "./Navbar"
import ShoppingCartIcon from "./cart-icon/ShoppingCardIcon"

const Header = () => {
    return(
        <div className="flex justify-start mb-12 mt-4 w-[90%] ml-[5%]">
            <div className=" md:w-[10%] w-[10%] justify-center">
                <Navbar />
            </div>
            <div className="flex md:w-[80%] w-[70%]">
                <div className="text-center w-full font-['font1'] md:text-4xl md:block hidden">Simple Ecommerce With Next JS!</div>
            </div>
            <div className="flex md:w-[10%] w-[20%] justify-around relative">
                <DayNightButton />
                <ShoppingCartIcon />
            </div>
        </div>
    )
}

export default Header