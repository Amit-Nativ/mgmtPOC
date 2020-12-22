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

const old = [
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

const makeTree = (data) => {
    var newTree = {};
    data.forEach(node => {
        Object.assign(newTree[node.id] = newTree[node.id] || {}, node);
        newTree[node.parent] = newTree[node.parent] || {};
        newTree[node.parent].children = newTree[node.parent].children || [];
        newTree[node.parent].children.push(newTree[node.id]);
    });
    return newTree;
}

console.log(makeTree(old));

const hasChildren = (member) => member.children && member.children.length

const TreeNode = ({ members }) => (<div>
    {members.map(x => (
        <div>
            <TreeItem nodeId={x.id} label={x.name}>
                {hasChildren(x) && <TreeNode key={x.id} members={x.children} />}
            </TreeItem>
        </div>
    ))}
</div>);

export default () => {
    return (
        <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}>
            <TreeNode members={roles} />
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
