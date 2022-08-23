import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../store/appContext'
import '../../../styles/index.css'

export default function DetailsFilms() {
  const { store, actions } = useContext(Context)
  const params = useParams()
  const { film } = store;
  useEffect(async () => {
    console.log("Component did mount")
    await actions.loadDetailsFilms(params.filmsId)
  })
  return (
    <div className="container bg-black text-white">
    {film ?
      (
      <div className="row">
        <div className="col-6 left">
          <img src={'https://starwars-visualguide.com/assets/img/films/' + `${params.filmsId}` + '.jpg'} className="card-img-top" alt="..." />
        </div>
        <div className="col-6 right">
              <div className='contenido'>
                <div className='titule text-center'>
                  <strong className='display-1 text-warning'>{film.result.properties.title}</strong>
                </div>
                <div className='d-inline justify-content-between description'>
                  <strong className='h2'>Director:</strong><p className='descrip'>{film.result.properties.director}</p>
                  <strong className='h2'>Productores:</strong><p className='descrip'>{film.result.properties.producer}</p>
                  <strong className='h2'>Fecha de salida:</strong><p className='descrip'>{film.result.properties.release_date}</p>
                </div>
              </div>
        </div>
      </div>
            )
            : ""}
    </div>
  )
}