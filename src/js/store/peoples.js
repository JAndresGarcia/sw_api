export const peoplesStore={
    peoples:{
        results: [],
        result: {}
    }
}

export function peoplesActions( getStore, getActions, setStore){
    const baseURL = "https://www.swapi.tech/api/people"
    return {
        loadPeoples:async()=>{
        try{
            let results= await fetch(`${baseURL}?page=1&limit=100`)
            if(results.ok) results= await results.json()
            else return
            const store=getStore()
            setStore({
                ...store,
                peoples:results
            })
        }
        catch(error){
            console.error(error)
        }
        },
        loadPeople:async(uid)=>{
        try{
            let result= await fetch(`https://www.swapi.tech/api/people/${uid}`)
            if(result.ok) result= await result.json()
            else return
            const store=getStore()
            setStore({
                ...store,
                people:result
            })
        }
        catch(error){
            console.error(error)
        }
        }
    }
}
