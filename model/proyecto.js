import mongoose from "mongoose";

const proyectoSchema = new mongoose.Schema(
    {
        fecha:{
            type: Date,
            require: true
        },
        equipo1:{
            type: String,
            require: true
        },
        equipo2:{
            type: String,
            require: true
        },
        marcador1:{
            type: Number
        },
        marcador2:{
            type: Number
        },
        tipoevento:{
            type: String,
            require: true
        }
    }
);

export const proyecto = mongoose.model('cproyecto', proyectoSchema);
export default proyecto;