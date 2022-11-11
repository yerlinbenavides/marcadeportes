import { proyecto } from '.. /models/proyecto.js';

//Registrar un proyecto deportivo

export const regproyecto=(req, res) => {
    const cproyecto = proyecto (req.body);
    cproyecto
      .save()
      .then((data) => res.json(datos))
      .catch((error) => res.json({message:error }));
  };

//Mostrar los eventos deportivos de la BD

export const shproyecto = (req,res) => {
   
     proyecto
     .find()
     .then((data) => res.json(datos))
     .catch((error) => res.json({message:error})); 
 }


//Mostrar un evento deportivo especifico

export const shoneproyectos = (req,res) => {
    const{ id } = req.Params;

    proyecto
      .findById(id)
      .then((data) => res.json(datos))
      .catch((error) => res.json({message:error }));
  };


//Borrar un evento deportivo

export const delproyecto = (req,res) => {
    const{ id } = req.Params;

    proyecto
      .deleteOne({_id: id })
      .then((data) => res.json(datos))
      .catch((error)=>res.json({ message:error }));
  };



//Actualizar un evento deportivo

export const upproyecto = (req, res) => {
    const {id} = req.Params;
    const { fecha,equipo1,equipo2,marcador1,marcador2,tipoevento } = req.body;

    proyecto
      . updateOne({ _id: id}, {$set: { fecha, equipo1, equipo2, marcador1, marcador2, tipoevento } })
      . then((data) => res.json(datos))
      . catch((error) => res.json({message: error }));
  };

//ExportarRegevento predeterminado de exportación;
export default regproyecto;