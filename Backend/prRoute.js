import jwt from 'jsonwebtoken'
import User from './models/user.model.js'
const prRoute = async (req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ 'error': "unauthorized access" });
        }

        const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        // Check for verification error
        // If verification fails, it will throw an error and catch block will handle it
        const iuser = await User.findById(decoded.userId).select("-password");
        req.user = iuser;
        
        if (!iuser) {
            return res.status(404).json({ "error": "user not found" });
        }
        next();
    } catch (err) {
        console.log("error from protectroute middleware", err);
        res.status(500).json({ "error": "internal server error" });
    }
}

export default prRoute;