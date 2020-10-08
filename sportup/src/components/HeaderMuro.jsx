import React from 'react'
import { Link } from 'react-router-dom'
import foto from "../img/wilDelgado.jpg"

export const HeaderMuro = ({ HeaderMuro }) => {
    return (
        <body className=" hold-transition sidebar-mini">
        <div className="wrapperM">
          {/* <!-- Navbar --> */}
          <nav className="main-header navbar navbar-expand navbar-white navbar-light">
         
                
                {/* <!-- SEARCH FORM --> */}
                <form className="form-inline ml-3">
                <div className="input-group input-group-sm">
                    <input className=" form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                    <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                    </div>
                </div>
                </form>

                {/* <!-- Right navbar links --> */}
                <ul className="navbar-nav ml-auto">
                {/* <!-- Messages Dropdown Menu --> */}
                <li className="nav-item dropdown">
                    <Link className="nav-link" data-toggle="dropdown" href="#">
                    <span><i className=" fa fa-comments"></i></span>
                    <span className="badge badge-danger ">3</span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <Link href="#" className="dropdown-item">
                        {/* <!-- Message Start --> */}
                        <div className="media">
                        <img src={ foto} alt="User Avatar" className="img-size-50 mr-3 img-circle"/>
                        <div className="media-body">
                            <h3 className="dropdown-item-title">
                            Brad Diesel
                            <span className="float-right text-sm text-danger"><i className="fa fa-star"></i></span>
                            </h3>
                            <p className="text-sm">Call me whenever you can...</p>
                            <p className="text-sm text-muted"><i className="fa fa-clock mr-1"></i> 4 Hours Ago</p>
                        </div>
                        </div>
                        {/* <!-- Message End --> */}
                    </Link>
               
                    <div className="dropdown-divider"></div>
                    <Link href="#" className="dropdown-item dropdown-footer">See All Messages</Link>
                    </div>
                </li>
                {/* <!-- Notifications Dropdown Menu --> */}
                <li className="nav-item dropdown">
                    <Link className="nav-link" data-toggle="dropdown" href="#">
                    <span><i className="fa fa-bell"></i></span>
                    <span className="badge badge-warning navbar-badge">15</span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <span className="dropdown-item dropdown-header">15 Notifications</span>
                    <div className="dropdown-divider"></div>
                    <Link href="#" className="dropdown-item">
                        <i className="fa fa-envelope mr-2"></i> 4 new messages
                        <span className="float-right text-muted text-sm">3 mins</span>
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link href="#" className="dropdown-item">
                        <i className="fa fa-users mr-2"></i> 8 friend requests
                        <span className="float-right text-muted text-sm">12 hours</span>
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link href="#" className="dropdown-item">
                        <i className="fa fa-file mr-2"></i> 3 new reports
                        <span className="float-right text-muted text-sm">2 days</span>
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link href="#" className="dropdown-item dropdown-footer">See All Notifications</Link>
                    </div>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" data-widget="fullscreen" href="#" role="button">
                    <i class="fas fa-expand-arrows-alt"></i>
                    </Link>
                </li>
                
                </ul>
            </nav>
  {/* <!-- /.navbar --> */}
          </div>
        </body>
    )
}
