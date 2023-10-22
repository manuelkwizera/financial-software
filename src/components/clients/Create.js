import { useEffect, useState } from "react"
import { Link } from "react-router-dom"   

function CreatClient(){
    return(
        <main>
            <header className="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
            <div className="container-xl px-4">
                <div className="page-header-content">
                <div className="row align-items-center justify-content-between pt-3">
                    <div className="col-auto mb-3">
                    <h1 className="page-header-title">
                        <div className="page-header-icon">
                        <i data-feather="user-plus" />
                        </div>
                        Add User
                    </h1>
                    </div>
                    <div className="col-12 col-xl-auto mb-3">
                    <a className="btn btn-sm btn-light text-primary" href="user-management-list.html"><i className="me-1" data-feather="arrow-left" />Back to Users List</a>
                    </div>
                </div>
                </div>
            </div>
            </header>
            <div className="container-xl px-4 mt-4">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card mb-4">
                            <div className="card-header">Account Details</div>
                            <div className="card-body">
                                <form>
                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputFirstName">First name</label>
                                            <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" defaultValue="" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                                            <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" defaultValue="" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                                        <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" defaultValue="" />
                                    </div>                                  
                                    <button className="btn btn-primary" type="button">Add user</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </main>
    )
}
export default CreatClient