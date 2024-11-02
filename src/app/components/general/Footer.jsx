import Image from "next/image"

const Footer = () => {
    return(
    <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://ashkangolzad.ir"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="ashkangolzad.ir"
            width={16}
            height={16}
          />
          &copy; ASHKANGOLZAD.IR
        </a>
    </div>
    )
}

export default Footer