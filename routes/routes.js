import express from 'express';
import {reguser, mosuser, showoneuser, updateoneuser, deluser, deluser} from '../controllers/usercontrollers.js';
import { regproyecto, shproyecto, shoneproyectos, delproyecto, upproyecto } from '../controllers/proyectcontollers.js';


export const router = express.Router();


// aqui vamos con el usuario

router.post('/suser', reguser);
router.get('/muser', mosuser);
router.get('/muser/:id', showoneuser);
router.put('/updateuser/:id', updateoneuser);
router.delete('/deluser/:id', deluser)

//rutas para los eventos deportivos

router.post('/regproyecto', regproyecto);
router.get('/shproyecto', shproyecto);
router.get('/shoneproyectos/:id', shoneproyectos);
router.delete('/delproyecto/:id', delproyecto);
router.put('/upproyecto/:id', upproyecto)

export default router;