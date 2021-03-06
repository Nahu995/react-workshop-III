import React from 'react'

 const NewPlaylist = (props) => (
    <div className="well">
      <form className="form-horizontal" onSubmit={props.handleSubmit}>
        <fieldset>
          <legend>New Playlist</legend>
          {(props.flag)? <div className="alert alert-warning">Please enter a name</div> :  null}
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input value={props.inputValue} onChange={props.handleChange} className="form-control" type="text"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success" disabled = {props.validate} >
              Create Playlist
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
    );

    
export default NewPlaylist