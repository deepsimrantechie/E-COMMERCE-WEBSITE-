import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md border border-gray-100">
      {/* Cart Total Title */}
      <div className="mb-6">
        <Title text1={"CART"} text2={" TOTAL"} />
      </div>

      {/* Cart Details */}
      <div className="space-y-4 text-gray-700">
        {/* Subtotal */}
        <div className="flex justify-between">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-medium">
            {currency}
            {getCartAmount()}.00
          </p>
        </div>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* Shipping Fee */}
        <div className="flex justify-between">
          <p className="text-gray-600">Shipping Fee</p>
          <p className="font-medium">
            {currency}
            {delivery_fee}
          </p>
        </div>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* Total */}
        <div className="flex justify-between">
          <p className="text-lg font-semibold text-gray-800">Total</p>
          <p className="text-lg font-semibold text-gray-800">
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
          </p>
        </div>
      </div>

      {/* Checkout Button */}
      <button className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartTotal;
