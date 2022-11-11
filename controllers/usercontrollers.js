import {user} from '.. /models/user.js';

//guardar usuario en mongodb

export const reguser = (req, res) => {
  const user1 = user(req.body);
  user1
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ massage: error }));
};

// mostrar informacion 
export const mosuser = (req, res) =>{

  user
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({massage:error}));
}

//me muestra la informacion de un ususario

export const showoneuser = (req, res) => {
  const { id }= req.params;
  user
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({massage:error}));
};

// actualizar un usuario

export const updateoneuser = (req, res) => {
  const { id }= req.params;
  const { nomuser, password, correo } = req.body;
  user
    .updateOne({_id: id}, {$set: {nomuser, password, correo}})
    .then((data) => res.json(data))
    .catch((error) => res.json({massage:error}));
};

// borrar usuario

export const deluser  = (req, res) => {
  const { id } = req.params;
  user
    .deleteOne({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({massage:error}));
};