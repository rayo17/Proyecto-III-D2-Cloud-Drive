import React, { Component } from 'react'
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'bootstrap';
export default class CreateUsers extends Component {
    async componentDidMount() {
        const res = await axios.get("http://localhost:4000/appi/users")//realizando peticion
        console.log(res)
    }
    render() {
        return (

            <div className='row'>
                <div className='col-md-6'>
                <div className='card card-body'>
                    <form>
                        <div className="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
                              
                            </div>
                           
                        </div>
                        <div className="form-group row">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword3" placeholder="Password" />
                                <br/>
                            </div>
                        </div>
                        <br/>
                        <div className="form-group row">
                            <div class="col-sm-2">Checkbox</div>
                            <div class="col-sm-10">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" /> Check me out
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button type="submit" class="btn btn-primary">Sign in</button>
                            </div>
                        </div>
                    </form>
                    </div>


                </div>
            

            </div>
        )
    }
}
