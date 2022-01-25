import User from "../Models/UserM.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import asyncHandler from "../middleware/asyncHandler.js";
import errorResponse from "../utils/errorResponse.js";

// GET ALL USERS
export const getAllUsers = asyncHandler(async (req, res, next) => {
    if (!req.user.isAdmin)
        return next(new errorResponse("ur not allowed to do this", 400));
    const allUsers = await User.find();
    res.status(200).json(allUsers);
});
// SIGN IN
export const signIn = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser)
        return next(new errorResponse("user doesnt exist.", 404));
    const isPasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
    );
    if (!isPasswordCorrect)
        return next(new errorResponse("invalid credentials.", 400));

    const token = jwt.sign(
        {
            email: existingUser.email,
            id: existingUser._id,
            isAdmin: existingUser.isAdmin,
        },
        process.env.JWT_TOKEN,
        { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
});

// SIGN UP
export const signUp = asyncHandler(async (req, res, next) => {
    const { email, password, firstName, lastName, confirmPassword } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
        return next(new errorResponse("user already exist.", 400));
    if (password !== confirmPassword)
        return next(new errorResponse("passwords dont match", 400));

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
        name: `${firstName} ${lastName}`,
        email,
        password: hashedPassword,
    });
    const token = jwt.sign(
        {
            email: result.email,
            id: result._id,
            admin: result.isAdmin,
        },
        "test",
        { expiresIn: "1h" }
    );
    res.status(200).json({ result, token });
});

// DELETE USER
export const deleteUser = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    if (!req.user.isAdmin && req.user.id !== id)
        return next(
            new errorResponse("ur not allowed to delete this user", 400)
        );
    const user = await User.findById(id);
    if (!user)
        return next(
            new errorResponse(`there is no user whit this id :${id}`, 404)
        );
    await User.findByIdAndDelete(id);
    res.status(200).json("user deleted successfully");
});

// UPDATE USER
export const updateUser = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    let user = req.body;
    if (user.isAdmin && !req.user.isAdmin)
        return next(
            new errorResponse("u cant provide access ability from fronEnd", 400)
        );
    if (!req.user.isAdmin && req.user.id !== id)
        return next(
            new errorResponse("ur not allowed to delete this user", 400)
        );
    const existingUser = await User.findById(id);
    if (!existingUser)
        return next(
            new errorResponse(`there is no user whit this id :${id}`, 404)
        );

    // change password
    if (user.password) {
        const hashedPassword = await bcrypt.hash(user.password, 12);
        user.password = hashedPassword;
    }

    // change firstName and LastName
    if (user.firstName || user.lastName) {
        const { firstName, lastName } = user;
        const oldFirstName = existingUser.name.split(" ")[0];
        const oldLastName = existingUser.name.split(" ")[1];
        if (firstName) {
            user.name = `${firstName} ${oldLastName}`;
        }
        if (lastName) {
            user.name = `${oldFirstName} ${lastName}`;
        }
        if (firstName && lastName) {
            user.name = `${firstName} ${lastName}`;
        }
    }

    let updatedUser = await User.findByIdAndUpdate(id, user, {
        new: true,
        runValidators: true,
    });
    res.status(200).json(updatedUser);
});
