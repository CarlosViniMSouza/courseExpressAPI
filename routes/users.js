import express from 'express';

const router = express.Router();

// All routes here starting with '/users'
router.get('/', (req, res) => {
    res.send({ message: 'Router Users -> done' });
});

export default router;