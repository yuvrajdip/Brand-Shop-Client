import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const cart = useLoaderData();
  // console.log(cart);

  const [data, setData] = useState(cart);

  const handleDelete = (id) => {
    // console.log(id);

    fetch(`https://b8a10-brandshop-server-side-yuvrajdip.vercel.app/userCart/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire('Deleted Product from Cart');
          const x = cart.filter(c => c._id !== id)
          setData(x);
        }
      })
  }

  return (
    data.length == 0 ?
      <div className="text-xl text-center h-screen my-auto">No products added. Please add some products to Cart!</div>
      :
      <div className="m-10 h-screen my-auto">
        <h2 className="my-5 text-2xl text-center">{data.length} Products added to Cart</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {
            data.map(singleCart => <div className="rounded-md text-center text-lg shadow-md p-8" key={singleCart._id}>
              <img className="w-full" src={singleCart.image} alt="" />
              <p>Product : {singleCart.name}</p>
              <p>Brand: {singleCart.brandName}</p>
              <p>Price : ${singleCart.price}</p>
              <button onClick={() => handleDelete(singleCart._id)} className="btn btn-primary my-5 text-lg">Delete</button>
            </div>)

          }
        </div>
      </div>
  );
};

export default MyCart;