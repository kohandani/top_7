const asyncHandler = (controlerFunction) => (req, res, next) =>
    Promise.resolve(controlerFunction(req, res, next)).catch(next);

export default asyncHandler;
