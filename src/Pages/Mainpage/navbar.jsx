import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light  " style={{ backgroundColor: "#63d9f0fa" }}>
            <div className="container d-flex">
                <span className="navbar-brand"><b>Products</b></span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav  ">
                        <li className="nav-item">
                            <Link className="text-dark text-decoration-none font-weight-bolder" to="/" style={{ marginLeft: "20px" }} ><b>Table</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="text-dark text-decoration-none font-weight-bolder" to="basket" style={{ marginLeft: "20px" }}><b>Basket</b></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar