import express from 'express';
import mongoose from 'mongoose';
import {reguser, mosuser, showoneuser, updateoneuser} from '../controllers/usercontrollers.js';
import {db} from '../dbmongos.js';

import { user } from "../models/user.js";
export const router = express.Router();

//let user1 = new user()

// aqui vamos con el usuario

router.post('/suser', reguser);
router.get('/muser', mosuser);
router.get('/muser/:id', showoneuser);
router.put('updateuser/:id', updateoneuser);

router.get('/', (req,res) => {
    res.send('MARCADOR DE DEPORTES ⏳🎮🎰🎲⚽')
})

router.get('/login', (req,res) => {
    res.send('HOLA DESDE EL LOGIN 🎲')
})

router.post('/agregar', (req,res) => {
    res.send('MENSAJE AÑADIDO')
})

router.delete('/delete', (req,res) => {
    res.send('MENSAJE BORRADO 😒')
})

router.delete('/', (req,res) => {
    res.send('HOLA DESDE EL POST')
})

export default router;