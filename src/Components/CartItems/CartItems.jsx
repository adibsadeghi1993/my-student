import React from "react";

const CartItems = ({ cartItems, size }) => {
  return (
    <>
      {/* <div class="columns-2"> */}
        {/* <div> */}
          <div>
            {cartItems.length === 0 ? (
              <p>there is no product</p>
            ) : (
              <>
                <div>
                  {cartItems.map((product) => {
                    return (
                      <div
                        className="grid grid-cols-4 gap-4 w-10/12 m-auto mt-12"
                        key={product.id}
                      >
                        <div className="col-start-1 col-end-4">
                          <div className="grid grid-cols-2 gap-2 bg-neutral-100 shadow-lg">
                            <div className="col-start-1 col-end-2  ">
                              <div className="flex justify-center ">
                                <img
                                  src={product.img}
                                  className="w-2/4	 rounded-lg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-start-2 col-end-4 ">
                              <div className="flex justify-center items-center mt-12 flex-col">
                                <p> {product.name}</p>
                                <p> {product.gender}</p>
                                <p> {size}</p>
                                <p> {product.price}</p>
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
                        </div>

                        <div className="col-start-4 col-end-5 bg-neutral-100 shadow-lg">
                          <p> قیمت کل </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        {/* </div> */}
        {/* <div>coulmn 2</div> */}
      {/* </div> */}
    </>
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
