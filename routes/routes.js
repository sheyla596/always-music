import express from "express";

const router = express.Router();

router.get('/', (req, res) => res.send('Hola Mundo con Express y ES6!'));

export default router;