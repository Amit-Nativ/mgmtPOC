import roleModel from '../api/role/role.model'

const roles = [
    {
        id: '1',
        name: 'root'
    },
    {
        id: '2',
        name: 'root-child',
        parent: '1'
    },
    {
        id: '3',
        name: 'root-second-child',
        parent: '1'
    },
    {
        id: '4',
        name: '2-child',
        parent: '2'
    },
    {
        id: '5',
        name: '4-child',
        parent: '4'
    }
]

export default async () => {
    await roleModel.deleteMany();
    await roleModel.insertMany(roles);
}