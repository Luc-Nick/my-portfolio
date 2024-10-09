import Link from "next/link"
import { TbUserHexagon } from "react-icons/tb";


const HomeCard = () => {
  return (
    <Link 
        className="badge col-span-1 w-60 h-60 mx-auto border-4 border-secondary flex flex-col justify-center items-center rounded-md"
        href="#"
    >
        <span className="text-3xl text-secondary"><TbUserHexagon /></span>
        <p className="text-lg text-secondary">About Me</p>
    </Link>
  )
}

export default HomeCard