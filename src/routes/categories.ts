import expressLib from "express";
const router = expressLib.Router();

import categoriesController from "../controllers/categories";
import Category from "../category";

router.get("/", (req, res) => {
    // let categoriesController = new CategoriesController();
    res.json(categoriesController.all());
});

router.get("/all", (req, res) => {
    // let categoriesController = new CategoriesController();
    res.json(categoriesController.all());
});

router.get("/random", (req, res) => {
    // let categoriesController = new CategoriesController();
    res.json(categoriesController.random());
});

export default router;