import HomeCard from "@/components/cards/HomeCard";
import Greeting from "@/components/greeting/Greeting";
import SocialLink from "@/components/social/SocialLink";


export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center bg-blackdm">
      <h1 className="text-stone-300 text-2xl my-8">Wellcome!</h1>
      <div className="w-5/6 h-screen flex justify-between items-center mx-8  gap-4 ">
        {/*ABOUT ME */}
        <Greeting />
        {/*SECTIONS */}
        <div className=" w-1/2 grid grid-cols-2 gap-4">
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
      </div>
      <div className="w-full flex justify-center items-center p-4 gap-6">
        <SocialLink />
        <SocialLink />
        <SocialLink />
        <SocialLink />
      </div>
    </div>
  )
}