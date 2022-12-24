import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// An illustrated sample for showing 'objects' on API
var users = [];

// All routes here starting with '/users'
router.get('/', (req, res) => {
    return res.send(users);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const userFound = users.find(user => user.id === id);

    console.log(`User requested is: ${id.firstName}`);

    return res.send(userFound);
});

router.post('/insert', (req, res) => {
    const user = req.body;
    
    users.push({ id: uuidv4(), ...user });

    return res.send(user);
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    users = users.filter(user => user.id !== id);

    res.send(`User ${id} deleted!`);
});

router.patch('/:id', (req, res) => {
    
});

export default router;