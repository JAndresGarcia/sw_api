export const planetStore={
    planets:[],
    planetsFavorite:[]
}

export function planetsActions(getStore, getActions, setStore){
    return {
        loadPlanets:async()=>{
            try{
                let results= await fetch("https://www.swapi.tech/api/planets")
                if(results.ok) results= await results.json()
                else return
                const store=getStore()
                setStore({
                    ...store,
                    planets:results
                })
            }
            catch(error){
                console.error(error)
            }
            },
        loadPlanet:async(uid)=>{
            try{
                let result= await fetch(`https://www.swapi.tech/api/planets/${uid}`)
                if(result.ok) result= await result.json()
                else return
                const store=getStore()
                setStore({
                    ...store,
                    planet:result
                })
            }
            catch(error){
                console.error(error)
            }
        }
    }
}

export const filmStore={
    films:[],
}

export function filmsActions(getStore, getActions, setStore){
    return {
        loadFilms:async()=>{
            try{
                let result= await fetch("https://www.swapi.tech/api/films")
                if(result.ok) result= await result.json()
                else return
                const store=getStore()
                setStore({
                    ...store,
                    films:result
                })
            }
            catch(error){
                console.error(error)
            }
            },
        loadDetailsFilms:async(uid)=>{
            try{
                let result= await fetch(`https://www.swapi.tech/api/films/${uid}`)
                if(result.ok) result= await result.json()
                else return
                const store=getStore()
                setStore({
                    ...store,
                    film:result
                })
            }
            catch(error){
                console.error(error)
            }
        }
    }
}

 


