import React, { Component } from 'react'

export default class Compression extends Component {
    render() {
        return (
            <div>
                <div class="form-group">
                    <label class="control-label">Actualizar archivos:</label>
                    <div class="m-b-15">
                        <input id="uattachment" type="file" name="uattachment" multiple class="file-loading" />
                        <div id="errorBlockAttachment" class="help-block"></div>

                    </div>
                </div>

            </div>
        )

    }
}
