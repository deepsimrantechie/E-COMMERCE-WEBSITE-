import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../Components/Title";
import ProductItem from "../Components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCatgory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const togglesubcategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = [...products];

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subcategory.includes(item.subcategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subcategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* FILTER SECTION */}
        <div className="lg:w-72">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div
              onClick={() => setShowFilter(!showFilter)}
              className="flex items-center justify-between cursor-pointer"
            >
              <h2 className="text-xl font-semibold text-gray-800">FILTERS</h2>
              <img
                className={`h-4 transition-transform ${
                  showFilter ? "rotate-90" : ""
                }`}
                src={assets.dropdown_icon}
                alt="Dropdown Icon"
              />
            </div>

            {/* CATEGORY FILTER */}
            <div className={`mt-6 ${showFilter ? "block" : "hidden"} lg:block`}>
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                CATEGORIES
              </h3>
              <div className="space-y-2">
                {["Men", "Women", "Kids"].map((cat) => (
                  <label key={cat} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value={cat}
                      onChange={toggleCatgory}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-600">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* SUBCATEGORY FILTER */}
            <div className={`mt-6 ${showFilter ? "block" : "hidden"} lg:block`}>
              <h3 className="text-lg font-medium text-gray-700 mb-4">TYPE</h3>
              <div className="space-y-2">
                {["Topwear", "Bottomwear", "Winterwear"].map((subcat) => (
                  <label key={subcat} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value={subcat}
                      onChange={togglesubcategory}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-600">{subcat}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCTS SECTION */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <Title text1={"ALL"} text2={" COLLECTION"} />
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="relavent">Sort by: Relevant</option>
              <option value="low-high">Sort by: Price Low to High</option>
              <option value="high-low">Sort by: Price High to Low</option>
            </select>
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
