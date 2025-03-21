import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "../Components/ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-16 px-4 md:px-8 lg:px-16">
      <div className="text-center py-10">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="w-3/4 m-auto text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
          Explore our best-selling products, loved by customers for their
          quality and style.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {bestSeller.map((item, index) => (
          <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
              className="rounded-lg overflow-hidden"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
