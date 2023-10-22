import { useEffect, useState } from "react"
import { Link } from "react-router-dom"   

function ViewClients(){
    return(
        <main>
            <header className="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
                <div className="container-xl px-4">
                <div className="page-header-content">
                    <div className="row align-items-center justify-content-between pt-3">
                    <div className="col-auto mb-3">
                        <h1 className="page-header-title">
                        <div className="page-header-icon">
                            <i data-feather="user" />
                        </div>
                        Account Settings - Billing
                        </h1>
                    </div>
                    </div>
                </div>
                </div>
            </header>

            <div className="container-xl px-4 mt-4">
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        {/* Billing card 1*/}
                        <div className="card h-100 border-start-lg border-start-primary">
                        <div className="card-body">
                            <div className="small text-muted">Current monthly bill</div>
                            <div className="h3">$20.00</div>
                            <a className="text-arrow-icon small" href="#!">
                            Switch to yearly billing
                            <i data-feather="arrow-right" />
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        {/* Billing card 2*/}
                        <div className="card h-100 border-start-lg border-start-secondary">
                        <div className="card-body">
                            <div className="small text-muted">Next payment due</div>
                            <div className="h3">July 15</div>
                            <a className="text-arrow-icon small text-secondary" href="#!">
                            View payment history
                            <i data-feather="arrow-right" />
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        {/* Billing card 3*/}
                        <div className="card h-100 border-start-lg border-start-success">
                        <div className="card-body">
                            <div className="small text-muted">Current plan</div>
                            <div className="h3 d-flex align-items-center">Freelancer</div>
                            <a className="text-arrow-icon small text-success" href="#!">
                            Upgrade plan
                            <i data-feather="arrow-right" />
                            </a>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="card card-header-actions mb-4">
                    <div className="card-header">
                        Payment Methods
                        <button className="btn btn-sm btn-primary" type="button">
                        Add Payment Method
                        </button>
                    </div>

                    <div className="card-body px-0">
                    <div className="table-responsive table-billing-history">
                            <table className="table mb-0">
                                <thead>
                                <tr>
                                    <th className="border-gray-200" scope="col">
                                    Transaction ID
                                    </th>
                                    <th className="border-gray-200" scope="col">
                                    Date
                                    </th>
                                    <th className="border-gray-200" scope="col">
                                    Amount
                                    </th>
                                    <th className="border-gray-200" scope="col">
                                    Status
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>#39201</td>
                                    <td>06/15/2021</td>
                                    <td>$29.99</td>
                                    <td>
                                    <span className="badge bg-light text-dark">Pending</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#38594</td>
                                    <td>05/15/2021</td>
                                    <td>$29.99</td>
                                    <td>
                                    <span className="badge bg-success">Paid</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#38223</td>
                                    <td>04/15/2021</td>
                                    <td>$29.99</td>
                                    <td>
                                    <span className="badge bg-success">Paid</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#38125</td>
                                    <td>03/15/2021</td>
                                    <td>$29.99</td>
                                    <td>
                                    <span className="badge bg-success">Paid</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default ViewClients