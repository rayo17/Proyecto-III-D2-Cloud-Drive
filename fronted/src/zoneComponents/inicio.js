import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Inicio extends Component {
    render() {
        return (
            <div className='container '>
                <div className='row'>
                    <div className='text-end'>


                    </div>
                    <h4 className='fw-bold text-center pt-5 mb-5'> Hola bienvenido</h4>
                    <div className='col-md-6'>
                        <div className='card card-body'>
                            <form action='createUsers'>
                                <div class="form-group row">
                                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />

                                    </div>

                                </div>
                                <div class="form-group row">
                                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                                    <div class="col-sm-10">
                                        <input type="password" class="form-control" id="inputPassword3" placeholder="Password" />
                                    </div>

                                </div>
                                <br/>
                                <div >
                                    <div class="d-grid">
                                        <button type="submit" class="btn btn-primary">inicio de sesion</button>
                                    </div>
                                    <div className='my-3'>
                                        <span> si no tienes cuenta puedes registrarte aqui <Link to="createUsers">Registrarse</Link></span>
                                        <br/>
                                        
                                    <span> <Link  to="createUsers">Recuperar Contraseña</Link></span>
                                    </div>
                                </div>
                            </form >
                            <div className='container w-100 my-5'>
                                <div className='row text-center'>
                                    <div className='col-12'>
                                        Iniciar Sesion

                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <button className='btn btn-outline-primary w-100 my-1'>
                                                <div className='row align-items-center'>
                                                    <div className='col-2'>
                                                        <img src="imag/logoFacebook.png" width="32"/>

                                                    </div>
                                                    <div className='col-10  text-center'>
                                                        Facebook

                                                    </div>
                                            

                                                </div>
                                            </button>
                                            <button className='btn btn-outline-danger w-100 my-1'>
                                                <div className='row align-items-center'>
                                                    <div className='col-2'>
                                                        <img src="imag/logoFacebook.png" width="32"/>

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

                    <div class="form-group">
                        <label class="control-label">Actualizar archivos:</label>
                        <div class="m-b-15">
                            <input id="uattachment" type="file" name="uattachment" multiple class="file-loading" />
                            <div id="errorBlockAttachment" class="help-block"></div>

                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
