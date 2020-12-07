import roleModel from '../api/role/role.model'

const roles = [
    {
        id: '1',
        name: 'root',
        hierarchy: []
    },
    {
        id: '2',
        name: 'root-child',
        hierarchy: ['root']
    },
    {
        id: '3',
        name: 'root-second-child',
        hierarchy: ['root']
    },
    {
        id: '4',
        name: '2-child',
        hierarchy: [
            'root-child',
            'root'
        ]
    },
    {
        id: '5',
        name: '4-child',
        hierarchy: [
            '2-child',
            'root-child',
            'root'
        ]
    }
]

export default async () => await roleModel.insertMany(roles);