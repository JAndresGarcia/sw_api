import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../store/appContext'
import '../../../styles/index.css'

export default function Detailsstarships() {
  const { store, actions } = useContext(Context)
  const params = useParams()
  const { starship } = store;
  useEffect(async () => {
    console.log("Component did mount")
    await actions.loadStarship(params.starshipsId)
  })
  return (
    <div className="container bg-black text-white">
    {starship ?
      (
      <div className="row">
        <div className="col-6 left">
          <img src={'https://starwars-visualguide.com/assets/img/starships/' + `${params.starshipsId}` + '.jpg'} onError={(e)=>{e.target.onerror = null; e.target.src=`https://via.placeholder.com/600x600`}} className="card-img-top" alt="..." />
        </div>
        <div className="col-6 right">
              <div className='contenido'>
                <div className='titule text-center'>
                  <strong className='display-1 text-warning'>{starship.result.properties.name}</strong>
                </div>
                <div className='d-inline justify-content-between description'>
                  <strong className='h2'>Clase de Nave:</strong><p className='descrip'>{starship.result.properties.starship_class}</p>
                  <strong className='h2'>Creador:</strong><p className='descrip'>{starship.result.properties.manufacturer}</p>
                  <strong className='h2'>Capacidad de pasajeros:</strong><p className='descrip'>{starship.result.properties.passengers}</p>
                </div>
              </div>
        </div>
      </div>
            )
            : ""}
    </div>
  )
}