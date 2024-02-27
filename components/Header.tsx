import useAuth from "@/hooks/useAuth";
import {useState, useEffect} from 'react';
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

function Header() {
  const [Scrolled, setScrolled] = useState(false)
  const { logout } = useAuth();
  useEffect(() => {
    const handleScroll = () => window.scrollY > 0 ? setScrolled(true) : setScrolled(false)

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header className={`transition-colors duration-[.5s] ${Scrolled && 'bg-[#000000]'}`}>
        <div className="flex items-center space-x-2 md:space-x-10">
          <img src="https://rb.gy/ulxxee" alt="logo" width={100} height={100} className="cursor-pointer" />
          <ul className="hidden space-x-4 md:flex">
              <li className="headerLink">Home</li>
              <li className="headerLink">TV Show</li>
              <li className="headerLink">Movies</li>
              <li className="headerLink">New & Popular</li>
              <li className="headerLink">My List</li>
          </ul>
        </div>

        <div className="flex items-center space-x-4 text-sm font-light">
          <FaSearch className="w-6" />
          <p className="hidden lg:inline">Kids</p>
          <FaBell className="w-6" />
          <FaUserCircle className="w-6 cursor-pointer" onClick={logout} />
        </div>
    </header>
  )
}

export default Header