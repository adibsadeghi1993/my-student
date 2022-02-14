import React, { useState, useEffect } from "react";
import CheckBox from "../../Components/CheckBox/CheckBox";
import Radio from "../../Components/Radio/Radio";
import Selected from "../../Components/Select/Selected";
import SelectSize from "../../Components/SelectSize/SelectSize";
import Sort from "../../Components/Sort/Sort";
import { useToasts } from 'react-toast-notifications';

import {Link } from "react-router-dom";


import * as api from "../../Services/ProductsServices";

const Products = ({
  products,
  setProducts,
  cartItems,
  setCartItems,
  size,setSize,
  setFilteredproducts,
  filteredproducts,
}) => {
  const [loading, setLoding] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [gender, setGender] = useState("");
  const [select, setSelect] = useState("");
  const [checkboxValue, setCheckBoxValue] = useState([]);
  const [sortItem, setSortItem] = useState("");

  const { addToast } = useToasts();

  useEffect(() => {
    const filteredAllProducts = products.filter((product) => {
      if (searchItem && !product.name.includes(searchItem)) {
        return false;
      }
      if (gender && product.gender !== gender) {
        return false;
      }
      if (select === "all") {
        return true;
      }
      if (select && product.category !== select) {
        return false;
      }
      if (checkboxValue.length && !checkboxValue.includes(product.city[0])) {
        return false;
      }
      return true;
    });

    if (sortItem && sortItem === "DEC") {
      const updatedProduct = filteredAllProducts.sort(
        (a, b) => a.price - b.price
      );
      setFilteredproducts(updatedProduct);
    }

    if (sortItem && sortItem === "ASC") {
      const updatedProduct = filteredAllProducts.sort(
        (a, b) => b.price - a.price
      );
      setFilteredproducts(updatedProduct);
    }

    if (!sortItem) {
      setFilteredproducts(filteredAllProducts);
    }
  }, [searchItem, gender, select, products, checkboxValue, sortItem]);

  useEffect(() => {
    setLoding(true);
    const fetchAllproducts = () => {
      api
        .getAllProducts()
        .then((response) => {
          // console.log(response.data);
          setLoding(false);
          setProducts(response.data);
        })
        .catch((err) => {
          console.log(err);
          setLoding(false);
        });
    };
    fetchAllproducts();
  }, []);

  const AddToCartHandler = (item) => {

    addToast("success and see the CartItems", { appearance: 'success' ,autoDismiss: true, });

    const updatedProduct = [...cartItems];
    const productFind = updatedProduct.find((p) => p.id === item.id);
    console.log(productFind); //productFind= undefined ==falsy

    if (!productFind) {
      setCartItems([...updatedProduct, { ...item, qty: 1 }]);
    } else {
      const newProduct = updatedProduct.map((p) =>
        p.id === productFind.id ? { ...productFind, qty: productFind.qty + 1 } : p
      );
      setCartItems(newProduct);
    }
  };

  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-4   container  gap-2 mx-auto mt-16">
      <div className="lg:col-start-1 lg:col-end-4 md: mt-8 lg:mt-0">
        {!loading ? (
          <div className="px-5 mt-16">
            <div className="m-2 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredproducts.map((product) => {
                return (
                  <div
                    className="box shadow-lg rounded-lg bg-neutral-100"
                    key={product.id}
                  >
                    <div className="flex justify-center">
                      <img
                        src={product.img}
                        className="w-3/5			 rounded-lg "
                        alt="img"
                      />
                    </div>

                    <div className="flex justify-center items-baseline flex-row-reverse">
                      <div className="text-center text-xl">
                        <p className="my-1.5 text-black">{product.name}</p>
                      </div>
                      <div className="text-center text-black ">
                        <p className="my-1.5">{product.gender}-</p>
                      </div>

                      <div className="text-center text-black">
                        <p className="my-1.5">{product.city}-</p>
                      </div>
                    </div>

                    <div className="text-center my-4 text-black">
                      <SelectSize size={size} setSize={setSize} />
                    </div>

                    <div className="flex items-baseline justify-around	">
                      <div className="text-center text-black  text-lg">
                        <p className="my-1.5">{product.price}$</p>
                      </div>

                      <div className="text-center mb-8 mt-4">
                          <button
                            type="button"
                            onClick={() => AddToCartHandler(product)}
                            className="bg-indigo-700	text-white py-2 px-4 rounded"
                          >
                            Add to cart
                          </button>
                    
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <p className="text-center text-red-400">products is loading.....</p>
        )}
      </div>

      <div className=" mt-14 lg:col-start-4 lg:col-end-5   lg:mt-16  ">
        <div className="mb-6 ">
          <input
            type="search"
            id="search"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className="bg-gray-50 border m-auto border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-4/5	 md:w-11/12 p-2.5 
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="search"
          />
        </div>

        <div className="text-center w-4/5	md:w-11/12 m-auto rounded-lg">
          <Selected select={select} setSelect={setSelect} />
        </div>

        <div className="text-center w-4/5	 md:w-11/12 m-auto rounded-lg mt-6">
          <Sort sortItem={sortItem} setSortItem={setSortItem} />
        </div>

        <div className="text-right mt-6 xl:mr-4 lg:mr-0">
          <CheckBox
            checkboxValue={checkboxValue}
            setCheckBoxValue={setCheckBoxValue}
          />
        </div>

        <div className="mt-6 mr-4 lg:text-right flex justify-end items-center">
          <Radio gender={gender} setGender={setGender} />
        </div>
      </div>
    </div>
  );
};

export default Products;


















// **********


// **********
// const updatedProduct =[...cartItems]
// const index =updatedProduct.findIndex((p)=>p.id ===item.id)
// console.log(index); // -1
// if(index ===-1){
//   setCartItems([...updatedProduct ,{...item ,qty:1}])
// }else{
//     const product ={...updatedProduct[index]}
//     console.log(product)

//     const newProduct = { ...product, qty: product.qty + 1 };
//     updatedProduct[index] = newProduct;
//     setCartItems(updatedProduct)
// }
