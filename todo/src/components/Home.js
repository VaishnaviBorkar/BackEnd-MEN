import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                        {/* <h3>Hello world</h3> */}
                    <nav className="navbar navbar-light bg-light">
                      <h2 className="navbar-brand">Todo Aplication</h2>
                    <form className="form-inline">
                    <Link to={'edit'}>
                    <input className="form-control mr-sm-2 btn btn-success" type="submit"  value="Update"  />
                   </Link>
                   </form>
                  </nav>
             </div>
            </div>
            <div className="row" style={{paddingTop:"20px"}}>
                <div className="col-md-6 offset-md-3">
                  <div className="card">
                  <div className="card-body">
                            <form action="POST">
                                <div className="form-group">
                                    <h1>
                                    <label htmlFor="todo">Add Todo in List</label></h1>
                                    <img src="https://img.icons8.com/bubbles/100/000000/todo-list.png" alt="img not found"/>
                                    <input type="text" name="todo" id="todo" className="form-control"/>
                                </div>
                                <input type="submit" value="Add" className="btn btn-success" />
                            </form>
                        </div>
                  </div>
                </div>
            </div>
            <div className="row" style={{paddingTop:"20px"}}>
               <div className="col-md-12 ">
                   <div className="card mt-2">
                       <ol className="list-group">
                        <li className="list-group-item text-primary f1">Going to school
                        <button className="btn btn-outline-danger btn-sm float-right">Delete</button>
                        <button className="btn btn-outline-primary btn-sm float-right">Edit</button>
                        </li>
                        <li className="list-group-item text-primary f1">Going to Market
                        <button className="btn btn-outline-danger btn-sm float-right">Delete</button>
                        </li>
                        <li className="list-group-item text-primary f1">Study
                        <button className="btn btn-outline-danger btn-sm float-right">Delete</button>
                        </li>
                       </ol>

                   </div>
              

                </div>
              
            </div>
             
        </div>
    )
}
export default Home;