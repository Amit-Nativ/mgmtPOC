import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { CardMembership } from '@material-ui/icons';

const roles =
    [{
        id: '1',
        name: 'root',
        children: [
            {
                id: '2',
                name: 'root-child',
                children: [
                    {
                        id: '4',
                        name: '2-child',
                        children: [
                            {
                                id: '5',
                                name: '4-child'
                            }
                        ]
                    }
                ]
            },
            {
                id: '3',
                name: 'root-second-child'
            },
        ]
    }]

const oldAndIrrelevant = [
    {
        "id": "1", "name": "root", "parent": null, "children": []
    },
    {
        "id": "2", "name": "root-child", "parent": "root", "children": [
            { "id": "1", "name": "root", "parent": null }
        ]
    },
    {
        "id": "3", "name": "root-second-child", "parent": "root", "children": [
            { "id": "1", "name": "root", "parent": null }]
    },
    {
        "id": "4", "name": "2-child", "parent": "root-child", "children": [
            { "id": "1", "name": "root", "parent": null },
            { "id": "2", "name": "root-child", "parent": "root" }]
    },
    {
        "id": "5", "name": "4-child", "parent": "2-child", "children": [
            { "id": "1", "name": "root", "parent": null },
            { "id": "4", "name": "2-child", "parent": "root-child" },
            { "id": "2", "name": "root-child", "parent": "root" }]
    }
]

const oldnew = [
    {
        "id": "1", "name": "root", "parent": null, "children": [
            { "id": "2", "name": "root-child", "parent": "root" },
            { "id": "3", "name": "root-second-child", "parent": "root" }]
    },
    {
        "id": "2", "name": "root-child", "parent": "root", "children": [
            { "id": "4", "name": "2-child", "parent": "root-child" }]
    },
    { "id": "3", "name": "root-second-child", "parent": "root", "children": [] },
    {
        "id": "4", "name": "2-child", "parent": "root-child", "children": [
            { "id": "5", "name": "4-child", "parent": "2-child" }]
    },
    { "id": "5", "name": "4-child", "parent": "2-child", "children": [] }]


// const mapIt = (data) => {
//     const root = data.find(x => !x.parent)[0];

//     root.children.map((x, i, arr) => {


//     })
// }

// const reduceThisShit = (data) => {
//     return data.reduce((acc, x, i, arr) => {
//         if (arr[x.parent]) return [...acc, { [x.parent]: { ...arr[x.parent], children: [...arr[x.parent].children, x] } }]
//         if (!acc[x.id]) return [...acc, { [x.name]: x }]
//     }, []);
// }

// const makeTree = () => {
//     oldnew.reduce((curr, arr, i) => {
//         if (curr.parent == null) {
//             return [...arr, { [curr.name]: curr }]
//         }

//         if (!arr[curr.parent]) {
//             return [...arr, { [curr.parent]: "" }]
//         }
//     }, [])
// }

const hasChildren = (member) => member.children && member.children.length

const TreeNode = ({ members }) => (<div>
    {members.map((x, i, arr) => {
        const newX = arr.find(element => element.id == x.id)
        return (
            <div>
                <TreeItem nodeId={newX.id} label={newX.name}>
                    {hasChildren(newX) && <TreeNode key={newX.id} members={newX.children} />}
                </TreeItem>
            </div>
        )
    })}
</div>);

export default () => {
    return (
        <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}>
            <TreeNode members={oldnew} />
        </TreeView>
    )
}

const A = () => (
    <TreeItem nodeId="1" label="root">
        <TreeItem nodeId="2" label='root-child'>
            <TreeItem nodeId='4' label='2-child'>
                <TreeItem nodeId='5' label='4-child' />
            </TreeItem>
        </TreeItem>
        <TreeItem nodeId="3" label='root-second-child' />
    </TreeItem>
)
