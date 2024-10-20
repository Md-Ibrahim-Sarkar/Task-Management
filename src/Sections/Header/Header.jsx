import { useEffect, useState } from 'react';
import { MdLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';

function Header() {

  const [theme, setTheme] = useState(true)

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark');
      
    }
  },[theme])

  return (
    <div className="py-3 container mx-auto max-[640px]:px-3">
      <div className="flex justify-between items-center">
        <span className="text-4xl font-semibold text-cyan-700 font-serif cursor-pointer">
          Ibrahim <span className="text-black dark:text-white">Sarkar</span>
        </span>

        {theme ? (
          <MdLightMode
            onClick={() => setTheme(!theme)}
            className={`text-3xl cursor-pointer  ${
              theme ? 'dark:text-white' : ' text-black'
            }`}
          />
        ) : (
          <MdDarkMode
            className="w-7 text-black"
            onClick={() => setTheme(!theme)}
            className={`text-3xl cursor-pointer  ${
              theme ? 'dark:text-white' : ' text-black'
            }`}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
