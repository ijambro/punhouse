import expressLib from "express";
const router = expressLib.Router();

import categoriesController from "../controllers/categories";
import Category from "../category";

router.get("/", (req, res) => {
    res.json(categoriesController.all());
});

router.get("/all", (req, res) => {
    res.json(categoriesController.all());
});

router.get("/random", (req, res) => {
    res.json(categoriesController.random());
});

router.get("/:id", (req, res) => {
    let idNum = Number.parseInt(req.params.id);
    if (idNum === NaN) {
        res.sendStatus(400);
    } else {
        let c = categoriesController.get(idNum);
        if (c === undefined) {
            res.sendStatus(404);
        } else {
            res.json(c);
        }
    }
});



export default router;