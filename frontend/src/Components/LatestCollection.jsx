import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-16 px-4 md:px-8 lg:px-16">
      <div className="text-center py-10">
        <Title text1={"LATEST"} text2={" COLLECTIONS"} />
        <p className="w-3/4 m-auto text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
          Discover our latest trendy arrivals, crafted with premium quality to
          elevate your style.
        </p>
      </div>
      {/* Rendering product */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {latestProducts.map((item, index) => (
          <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
              className="rounded-lg overflow-hidden"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
