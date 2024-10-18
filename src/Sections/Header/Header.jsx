import { MdLightMode } from 'react-icons/md';

function Header() {
  return (
    <div className="py-3 container mx-auto max-[640px]:px-3">
      <div className='flex justify-between items-center'>
        <span className='text-4xl font-semibold text-cyan-700 font-serif cursor-pointer'>
          Ibrahim <span className='text-black'>Sarkar</span>
        </span>
        <MdLightMode className='text-3xl cursor-pointer' />
      </div>
    </div>
  );
}

export default Header;
