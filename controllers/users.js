import { v4 as uuidv4 } from 'uuid';

let users = [];

// GETs
export const getUsersList = (req, res) => {
    res.send(users);
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const userFound = users.find((user) => user.id === id);

    res.send(userFound);
}

// POST
export const createUser = (req, res) => {
    const user = req.body;
    
    users.push({ id: uuidv4(), ...user });

    res.send(user);
}

// DELETE
export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User ${id} deleted!`);
}

// PATCH
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send('User updated!');
}
