import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartButton from './Button';


 const Navbar = props => {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">
            <img src="../lap.png" alt="LOGO"  className="navbar-brand img-fluid logo"  />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page" href="#">Products </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" href="#">Link</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
         
          </ul>
          <Link  to="/cart" className="d-flex" style={{textDecoration:'none'}}>    

            <CartButton     >
                <Span className="mr-2">
                  <i className="fas fa-cart-plus " />  
                </Span>
                 my cart     
            </CartButton>


          </Link>
        </div>
      </div>
    </nav>

    );
}

export default Navbar;




const Span = styled.span`
margin-right : 1em;
`;

