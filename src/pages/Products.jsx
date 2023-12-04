import { Link, useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Products = () => {
  const products = useLoaderData();

  return (
    <div>

      {
        products.length ?
          <div className="relative m-7">
            <Marquee className="rounded-3xl">
              <img className="h-[500px]" src="https://i.postimg.cc/Y9P99yGr/3.jpg" alt="" />
              <img className="h-[500px]" src="https://i.postimg.cc/ydRdDyF0/4.jpg" alt="" />
              <img className="h-[500px]" src="https://i.postimg.cc/KYQgDNVL/5.jpg" alt="" />
              <img className="h-[500px]" src="https://i.postimg.cc/1trk7gSL/6.jpg" alt="" />
              <img className="h-[500px]" src="https://i.postimg.cc/mrFpJPYm/2.jpg" alt="" />
            </Marquee>

            <div className="absolute top-[40%] left-[10%] z-10">
              <h2 className="text-6xl text-yellow-300">Buy Products from your favorite brand</h2>
            </div>
          </div>
          :
          ""
      }

      {
        products.length ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 m-10">
            {
              products.map(product => <div key={product._id}>
                <div className="shadow-lg rounded-xl p-5">
                  <img className="w-full" src={product.image} alt="" />
                  <p className="text-2xl">{product.name}</p>
                  <p className="text-lg">Category : {product.typeOfProduct}</p>
                  <p className="text-lg">Price : ${product.price}USD</p>
                  <p>Rating : {product.rating}</p>

                  <Link to={`/updateProduct/${product._id}`}>
                    <button className="btn btn-primary text-white mt-3">Update</button>
                  </Link>

                  <Link to={`/productDetails/${product._id}`}>
                    <button className="btn btn-secondary text-white mt-3 ml-3">Details</button>
                  </Link>
                </div>
              </div>)
            }
          </div>

          :

          <div className="h-screen flex justify-center items-center ">
            <h2 className="text-6xl text-center">
              Sorry! No Products Found.
            </h2>
          </div>
      }
    </div>
  );
};

export default Products;