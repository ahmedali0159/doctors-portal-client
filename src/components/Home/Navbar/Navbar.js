import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="container  collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link mr-4 active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-4 active" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-4 active" href="#">Dental services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-4 text-white" href="#">Reviews</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-4 text-white" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-4 text-white" href="#">Contact Us</a>
        </li>
      </ul>
  </div>
</nav>

    );
};

export default Navbar;