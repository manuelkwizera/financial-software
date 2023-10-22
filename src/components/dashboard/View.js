import { useEffect, useState } from "react"
import { Link } from "react-router-dom"   

function Dashboard(){
    return(
        <main>
            <div className="container-xl px-4 mt-5">
                <div className="d-flex justify-content-between align-items-sm-center flex-column flex-sm-row mb-4">
                    <div className="me-4 mb-3 mb-sm-0">
                    <h1 className="mb-0">Dashboard</h1>
                    <div className="small">
                        <span className="fw-500 text-primary">Friday</span>· September 20,
                        2021 · 12:16 PM
                    </div>
                    </div>
                    <div className="input-group input-group-joined border-0 shadow" style={{ width: "16.5rem" }}>
                    <span className="input-group-text">
                        <i data-feather="calendar" />
                    </span>
                    <input className="form-control ps-0 pointer" id="litepickerRangePlugin" placeholder="Select date range..."/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-start-lg border-start-primary h-100">
                        <div className="card-body">
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                            <div className="small fw-bold text-primary mb-1">
                                Earnings (monthly)
                            </div>
                            <div className="h5">$4,390</div>
                            <div className="text-xs fw-bold text-success d-inline-flex align-items-center">
                                <i className="me-1" data-feather="trending-up" />
                                12%
                            </div>
                            </div>
                            <div className="ms-2">
                            <i className="fas fa-dollar-sign fa-2x text-gray-200" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-start-lg border-start-secondary h-100">
                        <div className="card-body">
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                            <div className="small fw-bold text-secondary mb-1">
                                Average sale price
                            </div>
                            <div className="h5">$27.00</div>
                            <div className="text-xs fw-bold text-danger d-inline-flex align-items-center">
                                <i className="me-1" data-feather="trending-down" />
                                3%
                            </div>
                            </div>
                            <div className="ms-2">
                            <i className="fas fa-tag fa-2x text-gray-200" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-start-lg border-start-success h-100">
                        <div className="card-body">
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                            <div className="small fw-bold text-success mb-1">Clicks</div>
                            <div className="h5">11,291</div>
                            <div className="text-xs fw-bold text-success d-inline-flex align-items-center">
                                <i className="me-1" data-feather="trending-up" />
                                12%
                            </div>
                            </div>
                            <div className="ms-2">
                            <i className="fas fa-mouse-pointer fa-2x text-gray-200" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-start-lg border-start-info h-100">
                        <div className="card-body">
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                            <div className="small fw-bold text-info mb-1">
                                Conversion rate
                            </div>
                            <div className="h5">1.23%</div>
                            <div className="text-xs fw-bold text-danger d-inline-flex align-items-center">
                                <i className="me-1" data-feather="trending-down" />
                                1%
                            </div>
                            </div>
                            <div className="ms-2">
                            <i className="fas fa-percentage fa-2x text-gray-200" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Dashboard;