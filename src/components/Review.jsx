
const Review = () => {
  return (
    <div className="text-center m-10">
      <h2 className="text-3xl my-10">Review by anonymous users : </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="shadow-lg h-auto border-2 rounded-md">
          <p className="text-xl mt-3">User-1</p>
          <p className="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, odit!</p>
        </div>
        <div className="shadow-lg h-auto border-2 rounded-md">
          <p className="text-xl mt-3">User-2</p>
          <p className="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, odit!</p>
        </div>
        <div className="shadow-lg border-2 h-auto rounded-md">
          <p className="text-xl  mt-3">User-3</p>
          <p className="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, odit!</p>
        </div>
        <div className="shadow-lg border-2 h-auto rounded-md">
          <p className="text-xl mt-3">User-4</p>
          <p className="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, odit!</p>
        </div>  
      </div>      
    </div>
  );
};

export default Review;