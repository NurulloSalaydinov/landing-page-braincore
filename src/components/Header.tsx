import React from 'react'

import HeaderImage from '@/assets/header.png'

const Header = () => {
  return (
    <header className="w-full min-h-screen bg-[#E0DACE] pt-[60px] pb-5">
      
      <div className="container mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 py-12 md:py-24">
          <img data-aos="fade-down-right" src={HeaderImage} alt="HeaderImage" width="100%" />
          <div className="flex items-start justify-center flex-col px-8 py-6 md:py-3 md:px-5" data-aos="fade-up-left">

            <h1 className="header-text">O’quv markazingizni<br /> biz bilan oson boshqaring</h1>

            <p className="text-lg md:text-xl lg:text-2xl my-5 md:my-10">Braincore CRM orqali o’quv <br /> markazingizdagi muommolarni oson hal qiling</p>

            <div className="flex flex-wrap justify-center sm:justify-start items-center my-5 md:my-10 gap-6">
              <button className="py-3 px-5 rounded-full bg-blue-900 text-white border-[3px] border-blue-900 hover:bg-transparent hover:text-blue-900 transition-all duration-300">Demo olish</button>
              <button className="py-3 px-5 rounded-full bg-[var(--main)] text-white border-[3px] border-[var(--main)] hover:bg-transparent hover:text-[var(--main)] transition-all duration-300">Biz bilan bog'lanish</button>
            </div>

          </div>
        </div>

      </div>


    </header>
  )
}

export default Header
