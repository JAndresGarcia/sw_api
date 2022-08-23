export const vehiclesStore={
    vehicles:[],
    vehicleFavorite:[]
}

export function vehiclesActions(getStore, getActions, setStore){
    return {
        loadVehiclesList:()=>{
            console.log("Carga de vehicles")
        }
    }
}