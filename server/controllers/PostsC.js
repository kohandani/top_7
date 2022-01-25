import POST from "../Models/PostM.js";
import asyncHandler from "../middleware/asyncHandler.js";
import errorResponse from "../utils/errorResponse.js";

export const getAllPosts = asyncHandler(async (req, res, next) => {
    const cate = req.query.cate;
    const Limit = req.body.limit || 10;
    const AllPosts = await POST.find({ category: cate }).limit(Limit);
    res.status(200).json(AllPosts);
});

export const getSinglePost = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const existingPost = await POST.findById(id);
    if (!existingPost) {
        return next(
            new errorResponse(`there is no posts whit this id :${id}`, 404)
        );
    }
    const singlePost = await POST.findById(id);
    res.status(200).json(singlePost);
});

export const createPost = asyncHandler(async (req, res, next) => {
    const post = req.body;
    const newPost = new POST(post);
    if (!req.user.isAdmin)
        return res.status(400).json("ur not allowed to do this");
    const existingPost = await POST.findOne({ name: post.name });
    if (existingPost)
        return next(
            new errorResponse("there is already an post whit this name", 400)
        );
    await newPost.save();
    res.status(201).json(newPost);
});

export const deletePost = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    if (!req.user.isAdmin)
        return res.status(400).json("ur not allowed to do this");
    const existingPost = await POST.findById(id);
    if (!existingPost) {
        return next(
            new errorResponse(`there is no posts whit this id :${id}`, 404)
        );
    }
    await POST.findByIdAndDelete(id);
    res.status(200).json({ message: "post successfully deleted" });
});

export const updatePost = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const post = req.body;

    if (!req.user.isAdmin)
        return res.status(400).json("ur not allowed to do this");
    const existingPost = await POST.findById(id);
    if (!existingPost) {
        return next(
            new errorResponse(`there is no posts whit this id :${id}`, 404)
        );
    }
    const updatedPost = await POST.findByIdAndUpdate(id, post, {
        new: true,
        runValidators: true,
    });
    res.status(200).json(updatedPost);
});
