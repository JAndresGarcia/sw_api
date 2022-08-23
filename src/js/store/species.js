export const speciesStore={
    species:{
        results:[]
    }
}

export function speciesActions( getStore, getActions, setStore){
    return {
        loadSpecies:async()=>{
        try{
            let results= await fetch("https://www.swapi.tech/api/species")
            if(results.ok) results= await results.json()
            else return
            const store=getStore()
            setStore({
                ...store,
                species:results
            })
        }
        catch(error){
            console.error(error)
        }
        },
        loadDetailsSpecies:async(uid)=>{
        try{
            let result= await fetch(`https://www.swapi.tech/api/species/${uid}`)
            if(result.ok) result= await result.json()
            else return
            const store=getStore()
            setStore({
                ...store,
                specie:result
            })
        }
        catch(error){
            console.error(error)
        }
        }
    }
}
