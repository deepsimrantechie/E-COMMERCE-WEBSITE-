import userModel from "../models/userModel.js";

// aadd pordutcs to user cart
export const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//update user cart
export const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = userData.cartData; // No need for 'await'

    // Check if the itemId exists in cartData
    if (cartData[itemId]) {
      // Check if the size exists for the item
      if (cartData[itemId][size]) {
        cartData[itemId][size] = quantity; // Update the quantity
      } else {
        res.json({ success: false, message: "Size not found in cart" });
        return;
      }
    } else {
      res.json({ success: false, message: "Item not found in cart" });
      return;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Cart updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//get user cart data
/*export const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};*/
export const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    // Fetch user data based on userId
    const userData = await userModel.findById(userId);

    // Check if userData exists before accessing cartData
    let cartData = userData ? userData.cartData : null;

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
