import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../../store/appContext'

export default function ListPlanets(props){
    const {store,actions} = useContext(Context)
    const addFavorites = (item) => {
        actions.addFavorites({id:item.id, name:item.name, type:"Planets"})
    }
    return(
        <ul className="list-group list-group-horizontal overflow-auto todo">
            {props.planets?.map((planet,index)=>{
               return(
                   <li key={index} className="list-group-item bg-black m-3 todo">
                    <div className="card bg-black mb-5 anima todo" style={{width: "18rem"}}>
                        <Link to={`/planets/${planet.uid}`}>
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} onError={(e)=>{e.target.onerror = null; e.target.src=`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed97b542-8697-4d5c-a783-0dd8185c89d0/d15sn9h-b91d0d97-8378-4b8c-b943-dd1b39a21a84.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VkOTdiNTQyLTg2OTctNGQ1Yy1hNzgzLTBkZDgxODVjODlkMFwvZDE1c245aC1iOTFkMGQ5Ny04Mzc4LTRiOGMtYjk0My1kZDFiMzlhMjFhODQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TbpQRH5usavAhtJl_KJ7Tg7eyJBgiVM7fwz7iddfc_4`}} className="card-img-top todo" alt="..." />
                        </Link>
                        <div className="card-body todo">
                            <h5 className="card-title text-white todo">{planet.name}</h5>
                            <Link to={`/planets/${planet.uid}`} className="btn btn-warning todo">Detalles</Link>
                            <button type='button' className='btn btn-warning mx-4' onClick={()=>addFavorites(planet)}>❤</button>
                        </div>
                    </div>
                </li> 
               )
            })}
        </ul>
)
}