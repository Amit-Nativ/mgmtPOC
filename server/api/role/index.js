import e from "express";
import { AsyncRouter } from 'express-async-router'
import model from './role.model'

const router = AsyncRouter();

const get = async () => model.aggregate([
    {
        $graphLookup: {
            from: "roles",
            startWith: "$parent",
            connectFromField: "parent",
            connectToField: "name",
            as: "children"
        }
    }
])

const reduce = (tree) => tree.reduce((curr, arr, i) => {

}, [])

router.get("/", get);

export default router;