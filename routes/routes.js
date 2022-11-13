import express from 'express';
import { regusuario, showuser, shuserone, upuser, deluser } from '../controllers/usercontrollers.js';
import { regproyecto, shproyecto, shoneproyectos, delproyecto, upproyecto } from '../controllers/proyectcontollers.js';
import { db } from '../dbmongo.js'

export const router = express.Router();


// aqui vamos con el usuario

router.post('/suser', regusuario);
router.get('/muser', showuser);
router.get('/muser/:id', shuserone);
router.put('/updateuser/:id', upuser);
router.delete('/deluser/:id', deluser)

//rutas para los eventos deportivos

router.post('/regproyecto', regproyecto);
router.get('/shproyecto', shproyecto);
router.get('/shoneproyectos/:id', shoneproyectos);
router.delete('/delproyecto/:id', delproyecto);
router.put('/upproyecto/:id', upproyecto)

export default router;