import e from "express";
import { AsyncRouter } from 'express-async-router'
import model from './role.model'
import flatToNested from 'flat-to-nested'

const flat = new flatToNested({ id: 'name', parent: 'parent', children: 'children' })
const router = AsyncRouter();

const get = async () => {
    const data = await model.find()
    return flat.convert(data)
}

// model.aggregate([
//     {
//         $graphLookup: {
//             from: "roles",
//             startWith: "$name",
//             connectFromField: "name",
//             connectToField: "parent",
//             as: "children"
//         }
//     }
// ])

// const reduce = (tree) => tree.reduce((curr, arr, i) => {

// }, [])

router.get("/", get);

export default router;