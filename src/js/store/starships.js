export const starshipsStore = {
    starships: [],
    starshipsFavorites: [],
}

export function starshipsAction(getStore, getActions, setStore) {
return {

    loadStarships: async () => {
        try {
            let results = await fetch("https://www.swapi.tech/api/starships")
            if (results.ok) results = await results.json()
            else return
            const store = getStore()
            setStore({
                ...store,
                starships: results
            })
        }
        catch (error) {
            console.error(error)
        }
    },
    loadStarship: async (uid) => {
        try {
            let result = await fetch(`https://www.swapi.tech/api/starships/${uid}`)
            if (result.ok) result = await result.json()
            else return
            const store = getStore()
            setStore({
                ...store,
                starship: result
            })
        }
        catch (error) {
            console.error(error)
        }
    }
}
}

