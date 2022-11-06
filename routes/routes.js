import express from 'express'

export const router = express.Router();

router.get('/', (req,res) => {
    res.send('HOLA DESDE LA RAIZ - MARCADOR DE DEPORTES ⏳🎮🎰🎲⚽')
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