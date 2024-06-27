import Link from "next/link"
import { RiLinkedinFill } from "react-icons/ri";
import { FaGithubAlt } from "react-icons/fa";

const SocialLink = ( {}) => {
  return (
    <div className=" w-14 h-14 flex justify-center items-center rounded-full bg-graydm ">
        <Link href="#" className="text-stone-300">
          <RiLinkedinFill />
        </Link>
    </div>
  )
}

export default SocialLink