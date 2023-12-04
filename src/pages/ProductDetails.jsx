import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const ProductDetails = () => {
  const loaderData = useLoaderData();
  const { user } = useContext(AuthContext);
  const { brandName, description, image, name, price, rating, typeOfProduct, _id } = loaderData;
  const { email } = user;

  console.log(email);

  let cartData = { brandName, description, image, name, price, rating, typeOfProduct, email };

  const handleAddToCart = () => {
    // console.log(loaderData);

    fetch(`https://b8a10-brandshop-server-side-yuvrajdip.vercel.app/userCart`, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(cartData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data.insertedId) {
          // alert('Product added to cart');
          Swal.fire('Product added to cart');
        }
      })
  }

  return (
    <div className="my-10">

      <div className="h-auto w-[80%] mx-auto bg-white shadow-2xl text-center p-5">
        <img className="h-96 mb-10 w-[80%] mx-auto" src={image} alt="" />
        <p className="text-3xl">{name}</p>
        <p className="text-xl">Brand : {brandName}</p>
        <p className="text-lg">Price : ${price} USD</p>
        <p className="text-xl">Category : {typeOfProduct}</p>
        <p className="text-lg mb-2">Rating : {rating}</p>
        <p className="text-md mb-2">{description}</p>

        <button onClick={handleAddToCart} className="btn btn-primary text-white">Add to Cart</button>
      </div>

    </div>
  );
};

export default ProductDetails;