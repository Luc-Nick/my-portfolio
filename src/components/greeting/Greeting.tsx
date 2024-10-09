import EmojiPicker from 'emoji-picker-react';
import Link from 'next/link';

const Greeting = () => {
  return (
    <div className="w-1/2 p-4 flex-wrap 8">
        <h3 className="text-2xl mb-4">Hello! <span className=' text-lg'>&#128075;</span> </h3>
        <h2 className='text-4xl mb-4'>I&apos;m Nico! </h2>
        <p className='text-base block py-4 mb-4 text-justify text-neutral'>
            Hi! I am a Fullstack Web Developer based on General Pico, La Pampa, Argentina. 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur exercitationem tempora aspernatur molestias 
            molestiae? Alias voluptatum fugiat aspernatur sit autem, deserunt in, beatae, consequuntur obcaecati omnis quia tenetur sapiente ratione. 
        </p>
        <Link className="btn btn-secondary uppercase text-sm font-medium" href="file" >Download Resume</Link>
    </div>
  )
}

export default Greeting