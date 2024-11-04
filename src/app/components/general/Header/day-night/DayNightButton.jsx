"use client"
import { SunMoon , Sun } from "lucide-react"
import { useTheme } from 'next-themes';
import { useEffect , useState } from "react"


const DayNightButton = () => {

    const {theme , setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    

    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme') || 'light'
        if(savedTheme){
            setTheme(savedTheme)
        }
        setMounted(true);
    },[])

    if (!mounted) return null;

    const handleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }
    return(
        <button onClick={handleTheme} suppressHydrationWarning={true}>{theme === 'light' ? <SunMoon /> : <Sun />}</button>
    )
}

export default DayNightButton