import {filmStore, filmsActions} from './films'
import { speciesActions, speciesStore } from './species';
import {planetStore, planetsActions} from './planets'
import { peoplesActions, peoplesStore } from './peoples';
import { starshipsAction, starshipsStore } from './starships';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			/*
			characters: [
			],*/
			...filmStore,
			...speciesStore,
			...planetStore,
			...peoplesStore,
			...starshipsStore,

			favorites:[]
		},
		actions: {
			/*
			fetchGetCharacter: async() => {
				const store = getStore();
				let response = await fetch("https://www.swapi.tech/api/peoples")
				response = await response.json()
				setStore({
					...store,
					characters: response
				});
			},*/
			...filmsActions(getStore, getActions, setStore),
			...speciesActions(getStore, getActions, setStore),
			...planetsActions(getStore, getActions, setStore),
			...peoplesActions(getStore, getActions, setStore),
			...starshipsAction(getStore, getActions, setStore),
			addFavorites: (item) => {
				const store = getStore();
				let favorites = [ ...store.favorites, item ]
				setStore( {...store, favorites} )
			},
			removeFavorites: (index) => {
				const store = getStore();
				let favorites = [...store.favorites ]
				favorites.splice(index,1)
				setStore( {...store, favorites} )
			}
		}
	};
};

export default getState;
