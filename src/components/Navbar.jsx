function Navbar() {
    return (
        <>

            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Pritom .</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Skills</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>

                        <div class="d-lg-flex col-lg-3 justify-content-lg-end">
                            <button class="btn btn-success">Git Hub</button>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
};

export default Navbar;