import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Review from "../components/Review";
import Interior from "../components/Interior";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const imgArray = [
    { img: 'acer.png', brandName: 'Acer' },
    { img: 'lenovo.jpg', brandName: 'Lenovo' },
    { img: 'samsung.jpg', brandName: 'Samsung' },
    { img: 'bravia.jpg', brandName: 'Bravia' },
    { img: 'havit.jpg', brandName: 'Havit' },
    { img: 'LG.jpg', brandName: 'LG' },
  ];

  return (
    <div>
      <Banner />

      <h2 className="text-6xl italic animate-pulse mt-20 ml-20 my-5">Shop Products by your favorite brand</h2>
      {/* Brand Cards  */}
      <div className="grid md:grid-cols-3 gap-7 mx-5 md:m-16 mt-0">
        {
          imgArray.map(x => <>
            <div data-aos="fade-up-left" className="relative rounded-lg w-96 shadow-xl image-full cursor-pointer border-gray-300 border-2">
              <figure><img className="w-full h-60 rounded-lg" src={x.img} alt="Shoes" /></figure>
              <Link to={`/products/${x.brandName}`}>
                <button className="absolute left-[40%] bottom-1 px-3 py-1 btn-ghost text-center bg-gray-400 text-slate-950 font-medium rounded">Products</button>
              </Link>
            </div>
          </>)
        }
      </div>

      <Interior></Interior>
      <Review></Review>
    </div>
  );
};

export default Home;