import Link from "next/link"
import { TbUserHexagon } from "react-icons/tb";


const HomeCard = () => {
  return (
    <Link 
        className=" col-span-1 w-60 h-60 mx-auto border-4 border-stone-400 flex flex-col justify-center items-center rounded-md"
        href="#"
    >
        <span className="text-3xl text-stone-400"><TbUserHexagon /></span>
        <p className="text-stone-400 text-lg">About Me</p>
    </Link>
  )
}

export default HomeCard