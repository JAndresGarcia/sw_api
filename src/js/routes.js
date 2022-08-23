import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import Layout from "./layout";
import Films from "./views/films";
import Planets from "./views/planets";
import Peoples from "./views/peoples";
import Species from "./views/species";
import Starships from "./views/starships";
import ListVehicles from "./component/vehicles/listvehicles";
import ViewSpecies from "./views/species/viewSpecies";
import ViewFilms from './views/films/viewFilms'
import ViewPeoples from './views/people/viewPeoples'
import ViewPlanets from './views/planets/viewPlanets'
import ViewStarships from './views/starships/viewStarships'
import DetailsStarships from './views/starships/detailsStarships'
import DetailsSpecies from "./views/species/detailsSpecies";
import DetailsFilms from './views/films/detailFilm'
import DetailsPeoples from './views/people/detailPeoples'
import DetailsPlanets from './views/planets/detailsPlanets'


import injectContext from "./store/appContext";

//create your first component
const AppRoutes = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/

	return (
		<div>
			<BrowserRouter>
					<Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route  path="planets" element={<Planets />}>
                                <Route default element={<ViewPlanets/>}/>
                                <Route path=':planetsId' element={<DetailsPlanets />}/>
                            </Route>
                            <Route  path="people" element={<Peoples />}>
                                <Route default element={<ViewPeoples />} />
                                <Route path=':peoplesId' element={<DetailsPeoples />} />
                            </Route> 
                            <Route path="species" element={<Species />}>
                                <Route default element={<ViewSpecies />} />
                                <Route path=":speciesId" element={<DetailsSpecies />} />
                            </Route>
                            <Route exact path="vehicles" element={<ListVehicles />} />
                            <Route exact path="films" element={<Films />}>
                                <Route default element={<ViewFilms />}/>
                                <Route path=":filmsId" element={<DetailsFilms />} />
                            </Route>
                            <Route exact path="starships" element={<Starships />} >
                                <Route default element={<ViewStarships />}/>
                                <Route path=":starshipsId" element={<DetailsStarships />} />
                            </Route>
                        </Route>
                </Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(AppRoutes);