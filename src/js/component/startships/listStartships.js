import React from 'react'
import {Link} from 'react-router-dom'

export default function ListStarships(props){

    return(
            <ul className="list-group list-group-horizontal overflow-auto todo">
                {props.starships?.map((starship,index)=>{
                   return(
                       <li key={index} className="list-group-item bg-black m-3 todo">
                        <div className="card mb-5 anima todo" style={{width: "18rem"}}>
                            <Link to={`/starships/${starship.uid}`} >
                            <img src={'https://starwars-visualguide.com/assets/img/starships/'+`${starship.uid}`+'.jpg'} onError={(e)=>{e.target.onerror = null; e.target.src=`https://via.placeholder.com/600x600`}} className="card-img-top todo" alt="..." />
                            </Link>
                            <div className="card-body todo">
                                <h5 className="card-title text-white todo">{starship.name}</h5>
                                <Link to={`/starships/${starship.uid}`} className="btn btn-warning todo">Detalles</Link>
                            </div>
                        </div>
                    </li> 
                   )
                })}
            </ul>
    )
}