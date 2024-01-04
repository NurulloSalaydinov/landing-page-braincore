import React from 'react'
import logo from '@/assets/logo.png'

const Navbar = () => {
  const [scroll, setScroll] = React.useState(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  })

  return (
    <nav className={`w-full bg-transparent min-h-[80px] py-5 fixed top-0 left-0 z-10 px-3 transition-all duration-500 ${scroll ? 'bg-white shadow-xl' : ''}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-1 text-2xl font-bold cursor-pointer">
            <img src={logo} alt="Logo" width={50} height={50} />
            <span>Brain<span className="text-[#007CFF]">Core</span></span>
          </div>

          <ul className="links flex items-center gap-5 text-xl">
            <li>Bosh sahifa</li>
            <li>Biz haqimizda</li>
            <li>Fikrlar</li>
            <li className="text-lg">Demo olish</li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
