import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const CartItems = ({ cartItems, size }) => {
  if (cartItems.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center flex-col -mt-40">
        <div className="flex justify-center items-center rounded-full	 p-8 text-7xl		 bg-sky-200		">
          <FiShoppingCart />
        </div>
        <p>your basket is empty </p>
        <Link to="/"> go to products page</Link>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-4 w-5/6 mx-auto">
      {cartItems.map((product) => {
        return (
          <section className="col-start-1 col-end-4 w-4/6	 m-auto mt-12">
            <div className="grid grid-cols-2 gap-2 bg-white border border-solid	border-gray-200	 shadow-lg">
              <div className="col-start-1 col-end-2 flex justify-center ">
                <div className="flex justify-center items-center">
                  <img src={product.img} className="w-36	 rounded-lg" alt="img" />
                </div>
              </div>
              <div className="col-start-2 col-end-3 ">
                <div className="flex justify-center items-center mt-12 flex-col">
                  <p className="text-black "> {product.name}</p>
                  <p className="text-black "> {product.gender}</p>
                  <p className="text-black "> {size}</p>
                  <p className="text-black "> {product.price}</p>
                </div>

                <div className="text-center my-4">
                  <button
                    type="button"
                    className="bg-blue-400 py-0.5 px-2 rounded	 "
                  >
                    +
                  </button>
                  <span className="px-1.5 text-black  text-lg">
                    {product.qty}
                  </span>
                  <button
                    type="button"
                    className="bg-blue-400 py-0.5 px-2 rounded	"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="col-start-4 col-end-5 row-start-1 row-end-2 mt-12">
        <div className=" bg-neutral-100 shadow-lg">
          <p> قیمت کل </p>
        </div>
      </section>
    </div>
  );
};

export default CartItems;

{
  /* <p> {product.name}</p>

<div>
  <img
    src={product.img}
    className="w-1/4 rounded-lg"
    alt=""
  />
</div> */
}
