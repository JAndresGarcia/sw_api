import React from "react";
import { Link } from "react-router-dom";
import Star from '../../img/stars.png'

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-black">
			<Link to="/">
				<div className="image-container d-flex justify-content-start HomeStars">
				<img className='HomeStars mt-2' src={Star} alt="Home"/>
				</div>
			</Link>
		</nav>
	);
};


// Agregar button para darle favoritos
// Cuando le de al button deberia meter el id