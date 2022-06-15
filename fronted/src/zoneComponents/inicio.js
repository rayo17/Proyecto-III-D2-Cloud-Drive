
import { Link } from 'react-router-dom'
import "./estilo.css"
import { useNavigate} from 'react-router-dom'
import { useState } from 'react'




const Inicio=()=>{
    
        const[inputs,setInputs]=useState({ //VALIDANDO LOS DATOS DEL REGISTRO
            correo: "",
            costraseña:"",
        });
        const[message,seMessage]=useState();
        const [loading,setLoading]=useState(false);
       
        const {correo,contraseña}=inputs; 
        const onChange=(e)=>{
            setInputs({...inputs,[e.target.name]:e.target.value})
        }
        const onSubmit=(e)=>{
            e.preventDefault();
            if(correo !==""&& contraseña!==""){
                const usuario={
                    correo,
                    contraseña,
                };
                setLoading(true);
                
            }
        };
        const navigate=useNavigate()
    
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
                            <form onSubmit={e=> onSubmit(e)}>
                                <div class="form-group row alinear">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label label">Email</label>
                                    <div class="col-sm-10">
                                        <input type="email" onChange={e=> onChange(e)} className="form-control" id="inputEmail4" placeholder="Email" />

                                    </div>
                                    <br />
                                    <br />
                                </div>
                                <div class="form-group row">
                                    <label for="inputPassword3" className="col-sm-2 col-form-label label">Password</label>
                                    <div class="col-sm-10">
                                        <input type="password" onChange={(e)=> onChange(e)} class="form-control" name="contraseña" id="inputPassword3" placeholder="Password" />
                                    </div>

                                </div>
                                <br />
                                <div>
                                    <div class="d-grid">
                                        <button  onClick={()=> navigate("/compresion")} class="btn btn-primary">inicio de sesion</button>
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
