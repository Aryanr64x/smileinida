 const About = ()=>{
    return (
        <section className="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 md:py-32 bg-gray-50 " id="about">
      <div className="md:flex md:gap-y-0 md:flex-row items-center lg:-mx-8">
        <div className="w-full lg:w-1/2 lg:px-8 text-center md:text-left" data-aos="fade-right">
          <h6 className="text-sm uppercase font-semibold tracking-widest text-gray-500">Our specialty</h6>
          <h2 className="text-3xl leading-tight font-bold mt-4">This is the start of your business success</h2>
          <p className="text-lg font-medium mt-4">Where industry insight and marketing expertise meet</p>
          <p className="mt-2 leading-relaxed">
              It is to be said without a doubt that it is important for a dental clinic to establish a strong online presence via 
              various organic and paid online marketing techniques . At <b>Smile India Markting</b> , we make sure that dentists focus only 
              on there job while we grow there clinic 
          </p>
        </div>

        <div className="w-full px-4 mt-24 md:mt-0 lg:w-1/2 lg:px-8 text-center md:text-left " data-aos="fade-left">
          <div className="flex flex-col md:flex-row ">
            <div className="flex justify-center md:justify-start">
              <div className="flex justify-center items-center w-16 h-16 bg-blue-100 rounded-full">
                <svg className="fill-current text-blue-500" width="24" height="29" viewBox="0 0 24 29" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21.3333 7H18.6667C18.6667 3.26667 15.7333 0.333336 12 0.333336C8.26667 0.333336 5.33333 3.26667 5.33333 7H2.66667C1.2 7 0 8.2 0 9.66667V25.6667C0 27.1333 1.2 28.3333 2.66667 28.3333H21.3333C22.8 28.3333 24 27.1333 24 25.6667V9.66667C24 8.2 22.8 7 21.3333 7ZM12 3C14.2667 3 16 4.73334 16 7H8C8 4.73334 9.73333 3 12 3ZM21.3333 25.6667H2.66667V9.66667H21.3333V25.6667ZM12 15C9.73333 15 8 13.2667 8 11H5.33333C5.33333 14.7333 8.26667 17.6667 12 17.6667C15.7333 17.6667 18.6667 14.7333 18.6667 11H16C16 13.2667 14.2667 15 12 15Z" />
                </svg>
              </div>
            </div>
            <div className="mt-4 md:mt-0 md:ml-8 ">
              <h4 className="text-xl font-bold">We Provide the Full Package</h4>
              <p className="mt-2 leading-relaxed">
                  We do not limit you  with any one particular marketing channel , from social media to google to website , 
                  we have got you all covered at all places . 
              </p>
            </div>
          </div>

        
        </div>
      </div>
    </section>
    );
 }

 export default About;