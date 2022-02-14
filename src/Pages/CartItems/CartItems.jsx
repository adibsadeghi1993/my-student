import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

const CartItems = ({ cartItems, size, setCartItems }) => {

  const totalprice = cartItems.reduce((acc,curr)=>acc +curr.price *curr.qty , 0 )
  

  const incHandler = (item) => {
    const findProduct = cartItems.find((p) => p.id === item.id);
    // console.log(findProduct); //findeProduct ==undefind

    if (!findProduct) {
      setCartItems([...cartItems, { item, qty: 1 }]);
    } else {
      const updatedProduct = cartItems.map((p) =>
        p.id === findProduct.id
          ? { ...findProduct, qty: findProduct.qty + 1 }
          : p
      );
      setCartItems(updatedProduct);
    }
  };

  const decHandler = (item) => {
    // console.log(item)
    const findProduct = cartItems.find((p) => p.id === item.id);
    console.log(findProduct); // {id: 2, name: 'کفش نایک', category: 'نایک', gender: 'مردانه',qty: 2}

    if (findProduct.qty === 1) {
      const filterdproduct = cartItems.filter((p) => p.id !== findProduct.id);
      setCartItems(filterdproduct);
    } else {
      const updatedProduct = cartItems.map((p) =>
        p.id === findProduct.id
          ? { ...findProduct, qty: findProduct.qty - 1 }
          : p
      );
      setCartItems(updatedProduct);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center flex-col -mt-12 lg:-mt-32">
        <div className="flex justify-center items-center rounded-full	 p-8 text-7xl		 bg-sky-200		">
          <FiShoppingCart />
        </div>
        <p className="text-black text-xl	 mt-8">your basket is empty </p>
        <Link to="/" className="text-red-400 text-2xl	mt-2"> go to products page</Link>
      </div>
    );
  }
  return (
    <div className=" mx-auto lg:grid lg:grid-cols-4 lg:gap-4 lg:w-5/6">
      {cartItems.map((product) => {
        return (
          <section
            className="col-start-1 col-end-4 w-4/5	m-auto mt-12 md:w-4/6"
            key={product.id}
          >
            <div className="grid grid-cols-2 gap-2 bg-white border border-solid	border-gray-200 flex items-center	 shadow-lg">
              <div className="col-start-1 col-end-2 flex justify-center ">
                <div className="flex justify-center items-center">
                  <img
                    src={product.img}
                    className="w-36 my-8	 rounded-lg pl-4 lg:pl-0	"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-start-2 col-end-3 ">
                <div className="flex justify-center items-center  flex-col">
                  <div className="flex items-center justify-center">
                    <p className="text-black font-bold "> {product.name}</p>
                  </div>
                  <p className="text-black "> {product.gender}</p>
                  <p className="text-black "> {size}</p>
                  <p className="text-black "> {product.price}$</p>
                </div>

                <div className="text-center my-4">
                  <button
                    type="button"
                    onClick={() => incHandler(product)}
                    className="bg-indigo-700 text-white font-bold py-0.5 px-2 rounded"
                  >
                    +
                  </button>
                  <span className="px-1.5 text-black  text-lg">
                    {product.qty}
                  </span>
                  <button
                    type="button"
                    className="bg-indigo-700 text-white font-bold  px-2 rounded"
                    // disabled={product.qty === 1}
                    onClick={() => decHandler(product)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="col-start-4 col-end-5 row-start-1 row-end-2 mt-12 ml-7 mb-9 md:ml-28	lg:ml-0 lg:mb-0">
        <div className=" 	w-80 h-56	p-8	">
          <h3 className="text-black font-bold mx-1.5"> total price : </h3>
          <div className="flex items-center mt-4">
            <i className="text-rose-500	text-lg mx-1.5">+</i>
            <p>Total order : {totalprice} $</p>
          </div>
          <div className="border-t-2 border-gray-200		mt-4"></div>
          <div className="flex items-center mt-4">
            <i className="text-rose-500	text-lg mx-1.5">=</i>
            <p>total price : {totalprice} $</p>
          </div>

          <div className="mt-8">
            <button
              type="button"
              className="bg-indigo-700	text-white py-2 px-4 rounded"
            >
             Proceed Checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartItems;




























//  <p> {product.name}</p>

//  console.log(item)
//  const findProduct = cartItems.find((p) => p.id === item.id);
//  console.log(findProduct); // {id: 2, name: 'کفش نایک', category: 'نایک', gender: 'مردانه',qty: 2}

//  if (findProduct.qty === 1) {
//    const filterdproduct = cartItems.filter((p) => p.id !== findProduct.id);
//    setCartItems(filterdproduct);
//  } else {
//    const updatedProduct = cartItems.map((p) =>
//      p.id === findProduct.id
//        ? { ...findProduct, qty: findProduct.qty - 1 }
//        : p
//    );
//    setCartItems(updatedProduct);
//   }
