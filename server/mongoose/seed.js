import roleModel from '../api/role/role.model'

const roles = [
    {
        id: '1',
        name: 'root',
        parent: null
    },
    {
        id: '2',
        name: 'root-child',
        parent: 'root'
    },
    {
        id: '3',
        name: 'root-second-child',
        parent: 'root'
    },
    {
        id: '4',
        name: '2-child',
        parent: 'root-child'
    },
    {
        id: '5',
        name: '4-child',
        parent: '2-child'
    }
]

export default async () => {
    await roleModel.deleteMany();
    await roleModel.insertMany(roles);
}