import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = ()=>{
  useEffect(() => {
    AOS.init();
}, []);
    return (
        <div className="rounded-br-3xl md:rounded-br-40xl overflow-hidden">
        <section className="cover relative bg-gradient-to-r from-blue-500 to-green-400 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
        items-center">
          <div className="h-full absolute top-0 left-0 right-0 z-0">
           
            <img src="https://i.ibb.co/MD3CHYF/agency-hero.jpg" className="w-full h-full object-cover opacity-20" alt="agency-hero" border="0" />
         
          </div>
  
          <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
            <div>
              <h1 className="text-white text-4xl text-center md:text-left md:text-5xl xl:text-6xl font-extrabold leading-tight title" data-aos="flip-down"> Marketing for your Indian Dental Clinic </h1>
              <p className="text-blue-50 text-xl text-center md:text-left md:text-2xl leading-snug mt-4"  data-aos="fade-down">  
                Get specialised marketing for clinics based in India that significantly boosts your patient turnover .
              </p>
             <div className="flex justify-center md:justify-start">
             <a href="#services"
                className="uppercase px-8 py-4 shadow-sm rounded inline-block mt-8 font-semibold hover:bg-blue-500 bg-blue-600 text-white"  data-aos="fade-down">Learn
                How</a>
             </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Hero;