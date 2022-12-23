import express from 'express';

const router = express.Router();

// An illustrated sample for showing 'objects' on API
const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 22,
        height: 1.79
    },
    {
        firstName: "Anna",
        lastName: "Dinners",
        age: 24,
        height: 1.69
    }
];

// All routes here starting with '/users'
router.get('/', (req, res) => {
    res.send({ message: 'Router Users -> done' });
});

router.get('/sample', (req, res) => {
    return res.send(users);
});

router.post('/insert', (req, res) => {
    const user = req.body;
    
    users.push(user);

    res.send(user);
});

export default router;