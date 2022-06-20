
import { Link } from 'react-router-dom'
import "./estilo.css"
import axios from "axios";
import { useNavigate} from 'react-router-dom'
import { useState } from 'react'





const Inicio=()=>{
    const [inputs, setInputs] = useState({ //Estados de entrada
        correo: "",//correo
        costraseña: "",// contraseña
    });
    const [message, setMessage] = useState();// estados de los mensajes
    const [loading, setLoading] = useState(false);

    const { correo, contraseña } = inputs; // se capturan el valor de los estados inputs
    const onChange = (e) => { //funcion que cambia el estado de los inputs
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {// funcion que envia los datos a para ser validados por el backend
        e.preventDefault();
        if (correo !== "" && contraseña !== "") {// se verifican los datos antes de enviar
            console.log(contraseña);
            console.log(correo)
            const Usuario = { //se crea un objeto usuario con sus componenets para ser validado
                correo,
                contraseña,
            };
            setLoading(true);
            await axios
                .post("http://localhost:4000/login", Usuario)//se realiza la peticion post
                .then(({ data }) => {
                    console.log(data)
                    setMessage(data.message)// se capta el mensaje del backend
                    setInputs({ correo: "", contraseña: "" });// los espacios del corro y contraseña se restablecen
                    setTimeout(() => {
                        setMessage("");
                        setLoading(false);  
                        console.log(Usuario.id)
                        navigate(`/compresion/${data?.usuario.id} `);// a la hora de enviar el form este envia el usuario al area de compersion de archivos
                                             
                    }, 1500)

                })//captura el error
                .catch((error) => {
                    console.error(error);
                    setMessage("lo siento hay un error");
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
        <div className='text-center fondo'>

            <div className='container fondo2'>
                <div className=''>
                    <div className='alinear'>


                    </div>

                    <h4 className='fw-bold text-center pt-5 mb-5 label'> Hola bienvenido</h4>


                    <div className='col-3 alinear fondo2'>
                        <img src="https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.png" width="150" />
                    </div>


                    <div className='col-md-9 border-bottom-0 alinear formulario'>
                        <div className='card card-body alinear formulario'>
                            <form onSubmit={e => onSubmit(e)}>
                                <div class="form-group row alinear">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label label">Email</label>
                                    <div class="col-sm-10">
                                        <input type="email" onChange={e=> onChange(e)} name="correo" value={correo} className="form-control" id="inputEmail4" placeholder="Email" />

                                    </div>
                                    <br />
                                    <br />
                                </div>
                                <div class="form-group row">
                                    <label for="inputPassword3" className="col-sm-2 col-form-label label">Password</label>
                                    <div class="col-sm-10">
                                        <input type="password" value={contraseña} onChange={(e)=> onChange(e)} class="form-control" name="contraseña" id="inputPassword3" placeholder="Password" />
                                    </div>

                                </div>
                                <br />
                                <div>
                                    <div class="d-grid">
                                        <button type='submit' class="btn btn-primary"> { loading? "cargando":"iniciar sesion"} </button>
                                        {message && <div className='mensaje'>{message}</div>}
                                        
                                    </div>
                                    <div className='my-3 label'>
                                        <span> si no tienes cuenta puedes registrarte aqui <Link to="createUsers">Registrarse</Link></span>
                                        <br />

                                        <span> <Link to="createUsers">Recuperar Contraseña</Link></span>
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
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png" width="30" />

                                                    </div>
                                                    <div className='col-10  text-center'>
                                                        Facebook

                                                    </div>


                                                </div>
                                            </button>
                                            <button className='btn btn-outline-danger w-100 my-1'>
                                                <div className='row align-items-center'>
                                                    <div className='col-2'>
                                                        <img src="https://antoniofernandez.com/assets/blog/node-google-login.png" width="32" />

                                                    </div>
                                                    <div className='col-10  text-center'>
                                                        Google

                                                    </div>


                                                </div>
                                            </button>

                                        </div>
                                        <div className='col'></div>

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
        {message && <div className='style'>{message}</div>}
        </>


    )
}

    export default  Inicio;
