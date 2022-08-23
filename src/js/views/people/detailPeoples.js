import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../store/appContext'
import '../../../styles/index.css'

export default function Detailspeoples() {
  const { store, actions } = useContext(Context)
  const params = useParams()
  const { people } = store;
  useEffect(async () => {
    console.log("Component did mount")
    await actions.loadPeople(params.peoplesId)
  })
  return (
    <div className="container bg-black text-white">
    {people ?
      (
      <div className="row">
        <div className="col-6 left">
          <img src={'https://starwars-visualguide.com/assets/img/characters/' + `${params.peoplesId}` + '.jpg'} className="card-img-top" alt="..." />
        </div>
        <div className="col-6 right">
              <div className='contenido'>
                <div className='titule text-center'>
                  <strong className='display-1 text-warning'>{people.result.properties.name}</strong>
                </div>
                <div className='d-inline justify-content-between description'>
                  <strong className='h2'>Altura:</strong><p className='descrip'>{people.result.properties.height} cm</p>
                  <strong className='h2'>Genero:</strong><p className='descrip'>{people.result.properties.gender}</p>
                  <strong className='h2'>Planeta hogar:</strong><p className='descrip'>{people.result.properties.homeworld}</p>
                  <strong className='h2'>BirthYear:</strong><p className='descrip'>{people.result.properties.birth_year}</p>
                </div>
              </div>
        </div>
      </div>
            )
            : ""}
    </div>
  )
}