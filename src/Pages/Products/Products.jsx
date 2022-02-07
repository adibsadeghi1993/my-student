import React, { useState, useEffect } from "react";
import CheckBox from "../../Components/CheckBox/CheckBox";
import Radio from "../../Components/Radio/Radio";
import Select from "../../Components/Select/Select";
import Sort from "../../Components/Sort/Sort";

import * as api from "../../Services/ProductsServices";

const Products = ({
  products,
  setProducts,
  setFilteredproducts,
  filteredproducts,
}) => {
  const [loading, setLoding] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [gender, setGender] = useState("");
  const [select, setSelect] = useState("");
  const [checkboxValue, setCheckBoxValue] = useState([]);
  const [sortItem, setSortItem] = useState("");

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

  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-4   container  gap-2 mx-auto mt-16">
      <div className="lg:col-start-1 lg:col-end-4 md: mt-8 lg:mt-0">
        {!loading ? (
          <div className="px-5 mt-16">
            <div className="m-2 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredproducts.map((product) => {
                return (
                  <div
                    className="box shadow-lg rounded-lg bg-slate-100 "
                    key={product.id}
                  >
                    <div className="flex justify-center mt-8">
                      <img
                        src={product.img}
                        className="w-8/12 rounded-lg "
                        alt="img"
                      />
                    </div>

                    <div className="text-center">
                      <p className="my-1.5">{product.name}</p>
                    </div>
                    <div className="text-center">
                      <p className="my-1.5">{product.gender}</p>
                    </div>
                    <div className="text-center">
                      <p className="my-1.5">{product.city}</p>
                    </div>
                    <div className="text-center">
                      <p className="my-1.5">{product.price}$</p>
                    </div>

                    <div className="text-center">
                      <button
                        type="button"
                        className="bg-violet-500 py-0.5 px-2 rounded	 "
                      >
                        +
                      </button>
                      <span className="px-1.5 font-semibold">
                        {product.qty}
                      </span>
                      <button
                        type="button"
                        className="bg-violet-500 py-0.5 px-2 rounded	"
                      >
                        -
                      </button>
                    </div>

                    <div className="text-center mb-8 mt-4">
                      <button
                        type="button"
                        className="bg-violet-500 py-2 px-4 rounded	 "
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <p>products is loading</p>
        )}
      </div>

      <div className="lg:col-start-4 lg:col-end-5  mt-16  ">
        <div className="mb-6 ">
          <input
            type="search"
            id="search"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className="bg-gray-50 border m-auto border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5 
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="search"
          />
        </div>

        <div className="flex justify-center items-center lg:flex-none lg:flex-col lg:flex-col-reverse ">
          <div className="text-center mt-6 w-6/12 lg:w-fit">
            <Select select={select} setSelect={setSelect} />
          </div>

          <div className="text-center mt-6 w-4/12 lg:w-11/12 m-auto rounded-lg">
            <Sort sortItem={sortItem} setSortItem={setSortItem} />
          </div>
        </div>
        <div className="flex justify-around items-center mt-8 lg:flex-none  lg:flex-col lg:flex-col-reverse">
          <div className="text-center mt-6">
            <CheckBox
              checkboxValue={checkboxValue}
              setCheckBoxValue={setCheckBoxValue}
            />
          </div>

          <div className="self-end lg:self-auto lg:text-center ">
            <Radio gender={gender} setGender={setGender} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
