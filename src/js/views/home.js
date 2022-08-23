import React, {useContext} from "react";
import {Context} from '../store/appContext'
import ListFilms from "../component/films/listFilms"
import ListSpecies from '../component/species/listSpecies'
import ListPeoples from "../component/people/listPeoples";
import ListPlanets from "../component/planets/listPlanets";
import ListStarships from "../component/startships/listStartships";
import Particles from "react-tsparticles";

import "../../styles/home.css";

export const Home = () => {
	const {store, actions}=useContext(Context)
	const styles = {
		root: {
		  fontFamily: "sans-serif",
		  textAlign: "center",
		  height: "100%",
		  background: "#222",
		  display: "flex",
		  justifyContent: "center",
		  alignItems: "center",
		}
	  };

	return (
		<div className="text-center text-white mt-5">
			<h1>Star Wars InfoBlog</h1>
			<h2 className="d-flex mt-5">Peliculas</h2>
			<ListFilms films={store.films.result} />
			<h2 className="d-flex mt-5">Personajes</h2>
			<ListPeoples peoples={store.peoples.results} />
			<h2 className="d-flex mt-5">Planetas</h2>
			<ListPlanets planets={store.planets.results} />
			<h2 className="d-flex mt-5">Naves</h2>
			<ListStarships starships={store.starships.results} />
			<h2 className="d-flex mt-5">Especies</h2>
			<ListSpecies species={store.species.results} />
			<div style={styles.root}>
				<Particles />
			</div>
		</div>
	)
};

