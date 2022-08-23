import React from 'react'

export default function CardComponent(props){

    return (<div className="card" style={{width: "18rem"}}>
    <ul className="list-group list-group-flush">
      <li className="list-group-item"> Nombre{props.name} </li>
      <li className="list-group-item"> Marca{props.name}</li>
      <li className="list-group-item"> Color {props.color}</li>
    </ul>
    <div className="card-footer">
      Card footer
    </div>
  </div>)

    
}