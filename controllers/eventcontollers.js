import{evento}from'.. /models/evento.js';

//Registrar un evento deportivo
exportconstregevento=(req,res) => {
    constcevento=evento(req. cuerpo);
    cevento
      . salvar()
      . then((data)=>res. json(datos))
      . catch((error)=>res. json({message:error }));
  };

//Mostrar los eventos deportivos de la BD

exportconstshevento=(req,res) => {
   
     evento
     . encontrar()
     . then((data)=>res. json(datos))
     . catch((error)=>res. json({message:error})); 
 }


//Mostrar un evento deportivo especifico

exportconstshonevent=(req,res) => {
    const{id}=req. Parámetros;
    evento
      . findById(id)
      . then((data)=>res. json(datos))
      . catch((error)=>res. json({message:error }));
  };


//Borrar un evento deportivo

exportconstdelevento=(req,res) => {
    const{id}=req. Parámetros;
    evento
      . deleteOne({_id:id })
      . then((data)=>res. json(datos))
      . catch((error)=>res. json({message:error }));
  };



//Actualizar un evento deportivo

exportconstupevento=(req,res) => {
    const{id}=req. Parámetros;
    const{fecha,equipo1,equipo2,marcador1,marcador2,tipoevento}=req. cuerpo;
    evento
      . updateOne({_id:id},{$set:{fecha,equipo1,equipo2,marcador1,marcador2,tipoevento} })
      . then((data)=>res. json(datos))
      . catch((error)=>res. json({message:error }));
  };

//ExportarRegevento predeterminado de exportación;