import axios from 'axios';
import React, { Component, useState } from 'react'
import "./estilo.css"

const Compression = () => {// etiqueta p
    const[inputs,setInputs]=useState(null);//estados que cambiaran cuando se agregue un nuevo archivo


    const onSubmit =() => {// se crea una funcion para enviar datos
        
        const body=new FormData();// guarda los archivos binarios
        body.append("file",inputs);
        console.log(body)
    
         axios
        .post("http://localhost:4000/archivos",body)//se realiza una peticion al backend
        .then(res=> console.log(res.data))// se realiza una primesa
        .catch(error=>{console.log(error)})// se captura un error
       

    };

    const onChange=(evento)=>{// actualiza el estado
    
       
        setInputs(evento);// se realiza un cambio de estado
       
    
       

        
    }
      
  //Parte grafica de la pagina de compresion
        return (

            <div className='container'>
               
                <div className="form-group text-center">
                <label> Elige la opcion para comprimir tus archivos</label>  
                    
                    <div className="m-b-15 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z" />
                            <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z" />
                        </svg>
                    </div>
                   
                    <input id="uattachment" type="file" onChange={evento=>{onChange(evento.target.files)}}  />
                    <br/>
                
                    <button  onClick={()=>{onSubmit()}} > comprimir </button>
                     
                    <div id="errorBlockAttachment" class="help-block"></div>
                
                   


                    </div>
                </div>

         
        )
        }
export default Compression;