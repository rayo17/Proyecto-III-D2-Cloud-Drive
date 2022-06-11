import React, { Component } from 'react'

export default class Inicio extends Component {
  render() {
    return (
        <div className='row'>
                <div className='col-md-6'>
                <div className='card card-body'>
                    <form>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
                              
                            </div>
                           
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword3" placeholder="Password" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-10">
                                <button type="submit" class="btn btn-primary">Sign in</button>
                            </div>
                        </div>
                    </form>
                    </div>


                </div>
                <div>
                <div class="form-group">
                    <label class="control-label">Actualizar archivos:</label>
                    <div class="m-b-15">
                        <input id="uattachment" type="file" name="uattachment" multiple class="file-loading"/>
                            <div id="errorBlockAttachment" class="help-block"></div>
                    </div>
                </div>
            </div>

            </div>
    
    )
  }
}
