import jwt from "jsonwebtoken";
import errorResponse from "../utils/errorResponse.js";

const auth = async (req, res, next) => {
    try {
        const authHeader = req.headers.token;
        if (authHeader) {
            const token = authHeader.split(" ")[1];
            jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
                if (err)
                    return next(new errorResponse("ur token is invalid", 403));
                req.user = user;
            });
            next();
        } else {
            next(new errorResponse("ur not authenticated", 401));
        }
    } catch (error) {
        console.log(error.message);
    }
};

export default auth;
