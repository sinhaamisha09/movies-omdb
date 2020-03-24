import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-light bg-dark mb-5">
			
			  <div className="container">
			     <div className="navbar-header">
		            <Link className="navbar-brand text-white text-lg brand-text" to="/">
		              Movies App
		            </Link>
		          </div>
			     <ul className="navbar-nav ml-auto text-white text-lg brand-text d-inline-block">
			   
			      <li className="nav-item d-inline-block mr-4">
		              <i className="fab fa-imdb fa-5x" id="imdb-logo" />
		          </li>
		
			    </ul>
			  </div>
			</nav>
		</div>
	);
};

export default Navbar;


 // <li className="nav-item dropdown">
	// 		        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	// 		          Dropdown
	// 		        </a>
	// 		        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
	// 		          <a className="dropdown-item" href="#">Action</a>
	// 		          <a className="dropdown-item" href="#">Another action</a>
	// 		          <div className="dropdown-divider"></div>
	// 		          <a className="dropdown-item" href="#">Something else here</a>
	// 		        </div>
	// 		      </li>