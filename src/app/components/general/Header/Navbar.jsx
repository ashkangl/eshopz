"use client"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false)

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen)
    }

    const handleLinkClick = () => {
        setMenuOpen(false)
    }
    return (
        <div className="absolute z-20">
            <button className="cursor-pointer" onClick={handleMenuToggle}><Menu className="mt-2" /></button>
            <div className={`fixed top-0 left-0 z-20 h-auto w-64 overflow-y-auto overscroll-y-none transition-transform duration-1000 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="float-left w-full bg-slate-300 dark:bg-slate-700 dark:text-white font-[font2] px-6 pt-12 shadow-3xl">
                    <button className="absolute top-4 right-4" onClick={handleMenuToggle}><X /></button>
                    <menu>
                        <li className="mb-2 mt-8 hover:text-blue-500"><Link href="/" onClick={handleLinkClick}>Home Page</Link></li>
                        <li className="mb-2 hover:text-blue-500"><Link href="/products" onClick={handleLinkClick}>Products</Link></li>
                        <li className="mb-8 hover:text-blue-500"><Link href="/cart" onClick={handleLinkClick}>Cart</Link></li>
                    </menu>
                 </div>
            </div>
        </div>
        
    )
}
export default Navbar