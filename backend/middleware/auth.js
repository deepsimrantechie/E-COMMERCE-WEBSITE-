/*import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    console.log("No token provided");
    return res.json({ success: false, message: "not authorised login again" });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", token_decode); // Log decoded token
    req.body.userId = token_decode.id; // Ensure 'id' exists in the token payload
    next();
  } catch (error) {
    console.log("Token verification error:", error.message);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
*/
import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  console.log("Incoming Headers:", req.headers); // Log headers to debug
  const { token } = req.headers;

  if (!token) {
    return res.json({ success: false, message: "not authorised login again" });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
