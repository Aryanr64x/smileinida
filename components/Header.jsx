const Header = ()=>{
    return (
        <header className="absolute top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
     

      <div className="flex flex-wrap items-center justify-between py-6">
        <div className="md:w-auto">
          <a href='#' className='text-white font-bold text-2xl title'>
            Smile India Marketeers
          </a>
        </div>

        <div>

          {/* <button id="nav_toggle" className="h-8 w-8 md:hidden">
            <svg className="h-full w-auto" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="white"
              viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none"></rect>
              <line x1="40" y1="128" x2="216" y2="128" stroke="white" strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="16"></line>
              <line x1="40" y1="64" x2="216" y2="64" stroke="white" strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="16"></line>
              <line x1="40" y1="192" x2="216" y2="192" stroke="white" strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="16"></line>
            </svg>
          </button> */}

          <div id="nav_content" className="absolute right-0 hidden md:block md:relative w-full md:w-auto">
            <nav
              className="w-full bg-white md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
              <ul className="md:flex items-center">
                <li><a className="py-2 inline-block md:text-white md:hidden lg:block font-semibold hover:underline"
                    href="#about">About
                    Us</a>
                </li>
               
                <li className="md:ml-4"><a className="py-2 inline-block md:text-white md:px-2 font-semibold hover:underline"
                    href="#services">Marketing</a></li>

                <li className="md:ml-6 mt-3 md:mt-0">
                  <a className='inline-block font-semibold px-4 py-2 text-white bg-blue-600 md:bg-transparent md:text-white border border-white rounded hover:bg-white hover:text-green-400'
                    href='#contact'>Lets Go!</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    )
}

export default Header;