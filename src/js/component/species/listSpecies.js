import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../../store/appContext'

export default function ListSpecies(props){
    const {store,actions} = useContext(Context)
    const addFavorites = (item) => {
        actions.addFavorites({id:item.id, name:item.name, type:"people"})
    }
    return(
            <ul className="list-group list-group-horizontal overflow-auto todo">
                {props.species?.map((specie,index)=>{
                   return(
                    <li key={index} className="list-group-item bg-black m-3 todo">
                        <div className="card mb-5 anima todo" style={{width: "18rem"}}>
                            <Link to={`/species/${specie.uid}`}>
                            <img src={'https://starwars-visualguide.com/assets/img/species/'+`${specie.uid}`+'.jpg'} className="card-img-top todo" alt="..." />
                            </Link>
                            <div className="card-body todo">
                                <h5 className="card-title text-white todo">{specie.name}</h5>
                                <Link to={`/species/${specie.uid}`} className="btn btn-warning todo">Detalles</Link>
                                <button type='button' className='btn btn-warning mx-4' onClick={()=>addFavorites(specie)}>❤</button>
                            </div>
                        </div>
                    </li> 
                   )
                })}
            </ul>
    )
}