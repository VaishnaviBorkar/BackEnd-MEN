import React from 'react'
import {Link} from 'react-router-dom'

const Edit = () => {
    return (
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                        {/* <h3>Hello world</h3> */}
                    <nav className="navbar navbar-light bg-light">
                      <h2 className="navbar-brand">Todo Aplication</h2>
                    <form className="form-inline">
                        <Link to={'/'}>
                    <input className="form-control mr-sm-2 btn btn-success" type="submit"  value="Home" />
                  </Link>
                   </form>
                  </nav>
             </div>
            
            </div>
             
        </div>
    )
}
export default Edit;