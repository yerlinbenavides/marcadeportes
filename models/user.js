import mongoose from "mongoose";

const userSchema = new mongoose.Schema (
    {
        nomuser: {
            type: String,
            require: true
        },
        correo: {
            type: String,
            require:true,
            unique: true
        },
        password:{
            type: String,
            require: true
        }
    },
    {
      timestamps: true,
      versionKey: false,
    }
);

export const user = mongoose.model('users', userSchema)
export default user;