import React from 'react'
import {Link} from 'react-router-dom'

export default function ListFilms(props){

    return(
        <ul className="list-group list-group-horizontal overflow-auto todo">
            {props.films?.map((film,index)=>{
               return(
                <li key={index} className="list-group-item bg-black m-3 todo">
                    <div className="card mb-5 anima todo" style={{width: "18rem"}}>
                        <Link to={`/films/${film.uid}`}>
                        <img src={'https://starwars-visualguide.com/assets/img/films/'+`${film.uid}`+'.jpg'} className="card-img-top todo" alt="..." />
                        </Link>
                        <div className="card-body todo">
                            <h5 className="card-title text-white todo">{film.properties.title}</h5>
                            <Link to={`/films/${film.uid}`} className="btn btn-warning todo">Detalles</Link>
                        </div>
                    </div>
                </li> 
               )
            })}
        </ul>
)
}

