import express from "express";
import cors from "cors";
import router from './routes.js'
const router = express.Router()

//import blogRoutes from './routes/routes.js'

const app = express ();
app.use(cors());
app.use(express.json());
app.use('/user',router);

router.get('/', function (req,res){
    res.send('HOLA DESDE LA RAIZ')
})

router.get('/login', function (req,res){
    res.send('HOLA DESDE EL LOGIN')
})

router.post('/agregar', function (req,res){
    res.send('MENSAJE AÑADIDO')
})

router.delete('/delete', function (req,res){
    res.send('MENSAJE BORRADO')
})

router.delete('/', function (req,res){
    res.send('HOLA DESDE EL POST')
})
app.use('/usuarios',blogRoutes)

app.get("/", (req,res)=>{
    res.send("MARCADOR DE DEPORTES ⏳🎮🎰🎲⚽")
})

app.listen(5000, ()=> {
    console.log('Servidor Corriendo en http://localhost:5000/')
})