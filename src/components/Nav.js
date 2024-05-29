import React from "react";
import { Link } from "react-router-dom";

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function BasicExample() {
//     return (
//         <Navbar expand="lg" className="bg-body-tertiary">
//             <Container>
//                 <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav justify-content-end">
//                     <Nav className="me-auto justify-content-end">
//                         <Nav.Link><Link className="nav-link margin-link" aria-current="page" to="../quiz">Quiz</Link></Nav.Link>
//                         <Nav.Link><Link className="nav-link margin-link" to="../products">Products</Link></Nav.Link>
//                         <Nav.Link><Link className="nav-link margin-link upload-link" to="../upload">Upload</Link></Nav.Link>
//                         <Nav.Link><Link className="nav-link" to="../profile"><span
//                             class="material-icons profile">person</span>Profile</Link></Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default BasicExample;

export function Nav() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div>
                    <Link to=".."><img src="img/Logo.png" alt="Color Aura logo" class="logo" /></Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link margin-link" aria-current="page" to="../quiz">Quiz</Link>
                        <Link className="nav-link margin-link" to="../products">Products</Link>
                        <Link className="nav-link margin-link upload-link" to="../upload">Upload</Link>
                        <Link className="nav-link" to="../profile"><span
                            class="material-icons profile">person</span>Profile</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
