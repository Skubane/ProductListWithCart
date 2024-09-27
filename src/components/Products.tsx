import { useState } from "react";

const Products = () => {
  const [click, setClick] = useState(true);
  return (
    <div>
      {!click ? (
        <div className='w-50 h-50 rounded-md bg-cover bg-[url("./images/browniedesktop.jpg")] justify-center items-end flex relative '>
          <div className="w-[70%] h-8 border-gray-00 border-[1px] bg-white absolute -mb-4 rounded-full flex items-center justify-center">
            <div className="h-full flex items-center ">
              <img
                className="h-[50%] mx-1"
                src={"../../images/icon-add-to-cart.svg"}
                alt="image"
              />
            </div>
            <div style={{ fontSize: 11, fontWeight: 500 }}>Add to Cart</div>
          </div>
        </div>
      ) : (
        <div className='w-52 h-52  rounded-md bg-cover bg-[url("./images/browniedesktop.jpg")] border-orange-700 border-2 justify-center items-end flex relative '>
          <div className=" w-[70%] h-8 bg-orange-700 absolute -mb-4 rounded-full  items-center flex justify-between">
            <div className="border-[1px] border-white rounded-full ml-2 h-3.5 w-3.5 flex ">
              <img
                className="px-[2px]"
                style={{}}
                src={"./images/decrement.svg"}
                alt="image"
              />
            </div>

            <div className="text-white text-sm">4</div>
            <div className="border-[1px] border-white rounded-full mr-2 h-3.5 w-3.5 flex ">
              <img
                className="p-[2px]"
                src={"../../images/icon-increment-quantity.svg"}
                alt="image"
              />
            </div>
          </div>
        </div>
      )}
      <div className="mt-7 max-w-52"> 
        <div className="text-xs ">Crème Brûlée</div>
        <div className="text-xs " style={{ fontWeight: 500 }}>Vanilla Bean Crème Brûlée</div>
        <div className="text-xs text-orange-700">${50}</div>  
      </div>
      
    </div>
  );
};

export default Products;
