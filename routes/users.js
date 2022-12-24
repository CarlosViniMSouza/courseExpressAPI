import express from 'express';
import {  
    getUsersList, getUser,
    createUser,
    deleteUser,
    updateUser
} from '../controllers/users.js';

const routers = express.Router();

// All routes here starting with '/users'
routers.get('/', getUsersList);
routers.get('/:id', getUser);
routers.post('/', createUser);
routers.delete('/:id', deleteUser);
routers.patch('/:id', updateUser);

export default routers;