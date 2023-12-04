import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const loaderData = useLoaderData();
  // console.log(loaderData);
  const { brandName, description, image, name, price, rating, typeOfProduct, _id } = loaderData;

  const handleForm = (e) => {
    e.preventDefault();
    console.log('updated');
    const form = e.target;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData.entries());
    console.log(formObj);

    fetch(`https://b8a10-brandshop-server-side-yuvrajdip.vercel.app/products/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(formObj)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // alert('Product updated!');
          Swal.fire('Product updated!');
        }
        form.reset();
      })
  }

  return (
    <div className="">
      <h2 className="text-center text-5xl mb-10">Update Product</h2>

      <form onSubmit={handleForm} className="mx-auto w-1/2 bg-slate-300 p-10 flex flex-col items-center space-y-5">

        <input className="border border-blue-700 h-10 border-1 p-2 w-1/2" placeholder="Put Image Link Here" type="text" defaultValue={image} name="image" id="" />

        <input className="border border-blue-700 h-10 border-1 p-2 w-1/2" placeholder="Product Name" type="text" defaultValue={name} name="name" id="" />

        <select defaultValue={brandName} name="brandName" id="">
          <option value="">Select Brand</option>
          <option value="Acer">Acer</option>
          <option value="Samsung">Samsung</option>
          <option value="Havit">Havit</option>
          <option value="LG">LG</option>
          <option value="Bravia">BRAVIA</option>
          <option value="Lenovo">Lenovo</option>
        </select>

        <select defaultValue={typeOfProduct} name="typeOfProduct" id="">
          <option value="">Type of Product</option>
          <option value="Headphones">Headphones</option>
          <option value="Mobile">Mobile</option>
          <option value="Laptop">Laptop</option>
          <option value="Tab">Tab</option>
          <option value="Watch">Watch</option>
          <option value="PowerBank">Powerbank</option>
          <option value="Monitor">Monitor</option>
          <option value="Mouse">Mouse</option>
          <option value="TV">TV</option>
          <option value="Speaker">Speaker</option>
          <option value="Washing Machine">Washing Machine</option>
          <option value="Refrigerator">Refrigerator</option>
          <option value="Desktop">Desktop</option>
        </select>

        <input className="border border-blue-700 h-10 border-1 p-2 w-1/2" placeholder="Price" type="number" defaultValue={price} name="price" id="" />

        <textarea className="p-2 border border-blue-700" defaultValue={description} name="description" id="" cols="35" rows="5" placeholder="Description" type="text"></textarea>

        <input className="border border-blue-700 h-10 border-1 p-2 w-1/2" placeholder="Rating" type="number" defaultValue={rating} name="rating" id="" />

        <input type="submit" value="Update Product" className="btn btn-neutral" />

      </form>
    </div>
  );
};

export default UpdatePage;