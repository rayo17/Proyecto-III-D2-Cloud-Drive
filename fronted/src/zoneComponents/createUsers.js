import React, { useState } from 'react'
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import { useNavigate } from 'react-router-dom';
import "./estilo.css"
const CreateUsers = () => {
 

    /* async componentDidMount() {
         const res = await axios.get("http://localhost:4000/appi/users")//realizando peticion
         console.log(res)
     }*/
    const [inputs, setInputs] = useState({ //VALIDANDO LOS DATOS DEL REGISTRO
        correo: "",
        costraseña: "",
    });
    const [message, setMessage] = useState();//se generan dos estados para los mensajes recibidos del backend 
    const [loading, setLoading] = useState(false);//

    const { correo, contraseña } = inputs;// se capturan del inputs los datos
    const onChange = (e) => {// funcion para  actualizar los inputs
        
        setInputs({ ...inputs, [e.target.name]: e.target.value })//se actualizan los valores
        
    }
    const onSubmit = async (e) => {//funcion que envia la peticion para validar usuario y contraseña al backend
        e.preventDefault();
        if (correo !== "" && contraseña !== "") {// se verifica si el usario y la contraseña
            console.log(contraseña);
            console.log(correo)
            const Usuario = {// se genera un objeto usuario para ser validado
                correo, //contiene el correo
                contraseña,//contraseña
            };
            setLoading(true);
            await axios
                .post("http://localhost:4000/registro", Usuario)// se realiza la peticion y se le envia el usaurio para ser validado
                .then(({ data }) => {// promesas
                    console.log(data)
                    setMessage(data.message)//se recibe el mensaje para ser mostrado
                    setInputs({ correo: "", contraseña: "" });// se actualizan los inputs en vacio
                    setTimeout(() => { // se estable un tiempo de retardo
                        setMessage("");
                        navigate("/");
                        setLoading(false);                        
                    }, 1500)

                })
                .catch((error) => {// se captura el error
                    console.error(error);
                    setMessage("lo siento hay un error");// mensaje error
                    setTimeout(() => {
                        setMessage("");
                        setLoading(false);
                    }, 1500);
                   
                });
            
        }
    };
    const navigate = useNavigate()

    return (
        <>
            <div className='text-center fondo1'> 

                <div className='container fondo2'>
                    <div className=''>

                        <h4 className='fw-bold text-center pt-5 mb-5 label'> Hola bienvenido</h4>


                        <div className='col-3 alinear fondo2'>
                            <img src="https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.pn " alt='' width="150" />
                        </div>


                        <div className='col-md-9 border-bottom-0 alinear formulario'>
                            <div className='card card-body alinear formulario'>
                                <form onSubmit={e => onSubmit(e)}>
                                    <div class="form-group row alinear">
                                        <label for="inputEmail3" className="col-sm-2 col-form-label label">Email</label>
                                        <div class="col-sm-10">
                                            <input type="email" onChange={e => onChange(e)} value={correo} id="correo" className="form-control" name='correo' placeholder="Email" />

                                        </div>
                                        <br />
                                        <br />
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword3" className="col-sm-2 col-form-label label">Password</label>
                                        <div class="col-sm-10">
                                            <input type="password" onChange={(e) => onChange(e)}  value={contraseña} class="form-control" id="contraseña" name="contraseña" placeholder="Password" />
                                        </div>

                                    </div>
                                    <br />
                                    <div>
                                        <div class="d-grid">
                                            <button type="submit" class="btn btn botonRegistre"> {loading ? "cargando..." : "Registrarse"}</button>
                                            {message && <div className='mensaje'>{message}</div>}
                                           
                                        </div>
                                       

                                    </div>
                                </form>
                                <div className='container w-100 my-5'>
                                    <div className='row text-center'>
                                        <div className='col-12 label'>
                                            Iniciar Sesion

                                        </div>
                                        <div className='row'>
                                            <div className='col'>
                                                <button className='btn btn-outline-primary w-100 my-1'>
                                                    <div className='row align-items-center'>
                                                        <div className='col-2'>
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png" alt='' width="30" />

                                                        </div>
                                                        <div className='col-10  text-center'>
                                                            Facebook

                                                        </div>


                                                    </div>
                                                </button>
                                                <button className='btn btn-outline-danger w-100 my-1'>
                                                    <div className='row align-items-center'>
                                                        <div className='col-2'>
                                                            <img src="https://antoniofernandez.com/assets/blog/node-google-login.png" alt='' width="32" />

                                                        </div>
                                                        <div className='col-10  text-center'>
                                                            Google

                                                        </div>


                                                    </div>
                                                </button>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div>


                    </div>

                </div>
            </div>
         
        </>

    )
}



export default CreateUsers;