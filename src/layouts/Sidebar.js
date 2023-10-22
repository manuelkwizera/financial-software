import React from "react";
import {Link} from 'react-router-dom';


const Sidebar = () => {
    return (
      <div id="layoutSidenav_nav">
        <nav className="sidenav shadow-right sidenav-light">
          <div className="sidenav-menu">
            <div className="nav accordion" id="accordionSidenav">
              <div className="sidenav-menu-heading d-sm-none">Account</div>
              <a className="nav-link d-sm-none" href="#!">
                <div className="nav-link-icon">
                  <i data-feather="bell" />
                </div>
                Alerts
                <span className="badge bg-warning-soft text-warning ms-auto">
                  4 New!
                </span>
              </a>
              <a className="nav-link d-sm-none" href="#!">
                <div className="nav-link-icon">
                  <i data-feather="mail" />
                </div>
                Messages
                <span className="badge bg-success-soft text-success ms-auto">
                  2 New!
                </span>
              </a>
            
              <div className="sidenav-menu-heading">Dashboard</div>
              
              <div className="dashboard-menu">
                <Link to="/" className="nav-link">
                  <div className="nav-link-icon"><i className="fas fa-chart-bar"></i></div>
                  Dashboard
                </Link>
              </div>

              <div className="client-menu">
                <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                  <div className="nav-link-icon"><i className="fas fa-users"></i></div>
                  Clients
                  <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                </a>
                <div className="collapse" id="collapsePages" data-bs-parent="#accordionSidenav">
                  <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPagesMenu">
                    <Link to="/clients" className="nav-link" href="pricing.html">Manage Clients</Link>
                    <Link to="add-client" className="nav-link">Add New Client</Link>
                  </nav>
                </div>
              </div>

              <div className="loan-management-menu">
                <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseApps" aria-expanded="false" aria-controls="collapseApps">
                  <div className="nav-link-icon">
                    <i data-feather="globe" />
                  </div>
                  Loans
                  <div className="sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" />
                  </div>
                </a>
                <div className="collapse" id="collapseApps" data-bs-parent="#accordionSidenav">
                  <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavAppsMenu">
                    {/* Nested Sidenav Accordion (Apps -> Knowledge Base)*/}
                    <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#appsCollapseKnowledgeBase" aria-expanded="false" aria-controls="appsCollapseKnowledgeBase">
                      Knowledge Base
                      <div className="sidenav-collapse-arrow">
                        <i className="fas fa-angle-down" />
                      </div>
                    </a>
                    <div className="collapse" id="appsCollapseKnowledgeBase" data-bs-parent="#accordionSidenavAppsMenu">
                      <nav className="sidenav-menu-nested nav">
                        <a className="nav-link" href="knowledge-base-home-1.html">Home 1</a>
                        <a className="nav-link" href="knowledge-base-home-2.html">Home 2</a>
                        <a className="nav-link" href="knowledge-base-category.html">Category</a>
                        <a className="nav-link" href="knowledge-base-article.html">Article</a>
                      </nav>
                    </div>
                    {/* Nested Sidenav Accordion (Apps -> User Management)*/}
                    <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#appsCollapseUserManagement" aria-expanded="false" aria-controls="appsCollapseUserManagement">
                      User Management
                      <div className="sidenav-collapse-arrow">
                        <i className="fas fa-angle-down" />
                      </div>
                    </a>
                    <div className="collapse" id="appsCollapseUserManagement" data-bs-parent="#accordionSidenavAppsMenu">
                      <nav className="sidenav-menu-nested nav">
                        <a className="nav-link" href="user-management-list.html">Users List</a>
                        <a className="nav-link" href="user-management-edit-user.html">Edit User</a>
                        <a className="nav-link" href="user-management-add-user.html">Add User</a>
                        <a className="nav-link" href="user-management-groups-list.html">Groups List</a>
                        <a className="nav-link" href="user-management-org-details.html">Organization Details</a>
                      </nav>
                    </div>
                    {/* Nested Sidenav Accordion (Apps -> Posts Management)*/}
                    <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#appsCollapsePostsManagement" aria-expanded="false" aria-controls="appsCollapsePostsManagement">
                      Posts Management
                      <div className="sidenav-collapse-arrow">
                        <i className="fas fa-angle-down" />
                      </div>
                    </a>
                    <div className="collapse" id="appsCollapsePostsManagement" data-bs-parent="#accordionSidenavAppsMenu">
                      <nav className="sidenav-menu-nested nav">
                        <a className="nav-link" href="blog-management-posts-list.html">Posts List</a>
                        <a className="nav-link" href="blog-management-create-post.html">Create Post</a>
                        <a className="nav-link" href="blog-management-edit-post.html">Edit Post</a>
                        <a className="nav-link" href="blog-management-posts-admin.html">Posts Admin</a>
                      </nav>
                    </div>
                  </nav>
                </div>
              </div>

              <div className="savings-management-menu">
                <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseFlows" aria-expanded="false" aria-controls="collapseFlows">
                  <div className="nav-link-icon">
                    <i data-feather="repeat" />
                  </div>
                  Savings
                  <div className="sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" />
                  </div>
                </a>
                <div className="collapse" id="collapseFlows" data-bs-parent="#accordionSidenav">
                  <nav className="sidenav-menu-nested nav">
                    <a className="nav-link" href="multi-tenant-select.html">Multi-Tenant Registration</a>
                    <a className="nav-link" href="wizard.html">Wizard</a>
                  </nav>
                </div>
              </div>

            </div>
          </div>
          <div className="sidenav-footer">
            <div className="sidenav-footer-content">
              <div className="sidenav-footer-subtitle">Logged in as:</div>
              <div className="sidenav-footer-title">Valerie Luna</div>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Sidebar; 