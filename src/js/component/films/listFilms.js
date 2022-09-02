import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../../store/appContext'

export default function ListFilms(props){
    const {store,actions} = useContext(Context)
    const addFavorites = (item) => {
        actions.addFavorites({id:item.id, name:item.properties.title, type:"films"})
    }
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
                            <button type='button' className='btn btn-warning mx-4' onClick={()=>addFavorites(film)}>❤</button>
                        </div>
                    </div>
                </li> 
               )
            })}
        </ul>
)
}

