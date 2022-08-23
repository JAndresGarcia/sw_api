import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../store/appContext'
import '../../../styles/index.css'

export default function DetailsSpecies() {
  const { store, actions } = useContext(Context)
  const params = useParams()
  const { specie } = store;
  useEffect(async () => {
    console.log("Component did mount")
    await actions.loadDetailsSpecies(params.speciesId)
  })
  return (
    <div className="container bg-black text-white">
    {specie ?
      (
      <div className="row">
        <div className="col-6 left">
          <img src={'https://starwars-visualguide.com/assets/img/species/' + `${params.speciesId}` + '.jpg'} className="card-img-top" alt="..." />
        </div>
        <div className="col-6 right">
              <div className='contenido'>
                <div className='titule text-center'>
                  <strong className='display-1 text-warning'>{specie.result.properties.name}</strong>
                </div>
                <div className='d-inline justify-content-between description'>
                  <strong className='h2'>Lenguaje:</strong><p className='descrip'>{specie.result.properties.language}</p>
                  <strong className='h2'>Clasificación:</strong><p className='descrip'>{specie.result.properties.classification}</p>
                  <strong className='h2'>Altura promedio:</strong><p className='descrip'>{specie.result.properties.average_height} cm</p>
                  <strong className='h2'>Tiempo de vida:</strong><p className='descrip'>{specie.result.properties.average_lifespan} años</p>
                  <strong className='h2'>Origen:</strong><p className='descrip'>{specie.result.properties.homeworld ? <img className="planetica" src={'https://starwars-visualguide.com/assets/img/planets/' + `${params.speciesId}` + '.jpg'} onError={(e)=>{e.target.onerror = null; e.target.src=`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed97b542-8697-4d5c-a783-0dd8185c89d0/d15sn9h-b91d0d97-8378-4b8c-b943-dd1b39a21a84.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VkOTdiNTQyLTg2OTctNGQ1Yy1hNzgzLTBkZDgxODVjODlkMFwvZDE1c245aC1iOTFkMGQ5Ny04Mzc4LTRiOGMtYjk0My1kZDFiMzlhMjFhODQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TbpQRH5usavAhtJl_KJ7Tg7eyJBgiVM7fwz7iddfc_4`}}/> : ""}</p>
                </div>
              </div>
        </div>
      </div>
            )
            : ""}
    </div>
  )
}