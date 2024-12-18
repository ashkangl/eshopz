import { Globe } from "lucide-react"

const Footer = () => {
    return(
    <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center mt-8 mb-2">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 font-['font1'] text-xl"
          href="https://ashkangolzad.ir"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Globe />
          ASHKANGOLZAD.IR
        </a>
    </div>
    )
}

export default Footer