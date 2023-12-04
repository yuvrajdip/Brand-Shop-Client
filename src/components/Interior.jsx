import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Interior = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='md:flex md:m-16 mt-20'>
      <img data-aos="fade-right" className='md:w-1/2' src="https://i.postimg.cc/KYQgDNVL/5.jpg" alt="" />

      <div data-aos="fade-left" className='md:w-1/2 italic flex items-center justify-center text-6xl p-10'>
        <p>Decorate your interior with stylish elctronic products</p>
      </div>
    </div>
  );
};

export default Interior;