import Link from "next/link"
import { TbUserHexagon } from "react-icons/tb";

interface HomeProps{
  title : string;
  link : string;
}

const HomeCard = ( { title, link } : HomeProps) => {
  return (
    <Link 
        className="badge col-span-1 w-60 h-60 mx-auto border-4 border-accent group hover:border-secondary flex flex-col justify-center items-center rounded-md"
        href={link}
    >
        <span className="text-3xl text-accent group-hover:text-secondary "><TbUserHexagon /></span>
        <p className="text-lg text-accent group-hover:text-secondary ">{title}</p>
    </Link>
  )
}

export default HomeCard