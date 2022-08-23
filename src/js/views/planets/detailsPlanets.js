import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../store/appContext'
import '../../../styles/index.css'

export default function DetailsPlanets() {
  const { store, actions } = useContext(Context)
  const params = useParams()
  const { planet } = store;
  useEffect(async () => {
    console.log("Component did mount")
    await actions.loadPlanet(params.planetsId)
  })
  return (
    <div className="container bg-black text-white">
    {planet ?
      (
      <div className="row">
        <div className="col-6 left">
          <img src={'https://starwars-visualguide.com/assets/img/planets/' + `${params.planetsId}` + '.jpg'} onError={(e)=>{e.target.onerror = null; e.target.src=`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed97b542-8697-4d5c-a783-0dd8185c89d0/d15sn9h-b91d0d97-8378-4b8c-b943-dd1b39a21a84.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VkOTdiNTQyLTg2OTctNGQ1Yy1hNzgzLTBkZDgxODVjODlkMFwvZDE1c245aC1iOTFkMGQ5Ny04Mzc4LTRiOGMtYjk0My1kZDFiMzlhMjFhODQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TbpQRH5usavAhtJl_KJ7Tg7eyJBgiVM7fwz7iddfc_4`}} className="card-img-top" alt="..." />
        </div>
        <div className="col-6 right">
              <div className='contenido'>
                <div className='titule text-center'>
                  <strong className='display-1 text-warning'>{planet.result.properties.name}</strong>
                </div>
                <div className='d-inline justify-content-between description'>
                  <strong className='h2'>Población:</strong><p className='descrip'>{planet.result.properties.population}</p>
                  <strong className='h2'>Periodo rotacional:</strong><p className='descrip'>{planet.result.properties.rotation_period}</p>
                  <strong className='h2'>Periodo orbital:</strong><p className='descrip'>{planet.result.properties.orbital_period} días</p>
                  <strong className='h2'>Gravedad:</strong><p className='descrip'>{planet.result.properties.gravity}</p>
                  <strong className='h2'>Tipo de terreno:</strong><p className='descrip'>{planet.result.properties.terrain}</p>
                  <strong className='h2'>Clima:</strong><p className='descrip'>{planet.result.properties.climate}</p>
                  <strong className='h2'>Diametro:</strong><p className='descrip'>{planet.result.properties.diameter}</p>
                </div>
              </div>
        </div>
      </div>
            )
            : ""}
    </div>
  )
}