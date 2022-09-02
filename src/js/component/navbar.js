import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Star from '../../img/stars.png'
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-black">
			<Link to="/">
				<img className='HomeStars mt-2' src={Star} alt="Home" />
			</Link>
			<div className="dropdown favoritos">
				<button className="btn btn-warning dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favoritos
				</button>
				<ul className="dropdown-menu bg-black" aria-labelledby="dropdownMenuButton1">
					{store.favorites.map((fav, index) => {
						return (
							<li className="text-white" onClick={() => actions.removeFavorites(index)}>{fav.name}</li>
						)
					})}
				</ul>
			</div>
		</nav>

	);
};


// Agregar button para darle favoritos
// Cuando le de al button deberia meter el id