import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../../store/appContext'

export default function ListPeoples(props){
    const {store,actions} = useContext(Context)
    const addFavorites = (item) => {
        actions.addFavorites({id:item.id, name:item.name, type:"Peoples"})
    }
    return(
            <ul className="list-group list-group-horizontal overflow-auto todo">
                {props.peoples?.map((people,index)=>{
                   return(
                       <li key={index} className="list-group-item bg-black m-3 todo">
                        <div className="card mb-5 anima" style={{width: "18rem"}}>
                            <Link to={`/people/${people.uid}`}>
                            <img src={'https://starwars-visualguide.com/assets/img/characters/'+`${people.uid}`+'.jpg'} className="card-img-top todo" alt="..." />
                            </Link>
                            <div className="card-body todo">
                                <h5 className="card-title text-white todo">{people.name}</h5>
                                <Link to={`/people/${people.uid}`} className="btn btn-warning todo">Detalles</Link>
                                <button type='button' className='btn btn-warning mx-4' onClick={()=>addFavorites(people)}>❤</button>
                            </div>
                        </div>
                    </li> 
                   )
                })}
            </ul>
    )
}