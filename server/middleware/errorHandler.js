import errorResponse from "../utils/errorResponse.js";

const errorHandler = (err, req, res, next) => {
    console.log(err);
    let error = { ...err };
    error.message = err.message;
    if (err.name === "CastError") {
        const message = "Resourse not found";
        error = new errorResponse(message, 404);
    }
    if (err.code === 11000) {
        const message = "Duplicated field value entered";
        error = new errorResponse(message, 400);
    }
    if (err.name === "ValidatorError") {
        const message = Object.values(err.errors)
            .map((error) => error.message)
            .join(", ");
        error = new errorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "serverError",
    });
};

export default errorHandler;
