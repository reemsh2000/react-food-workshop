import React from 'react'

 function Card(props) {
  const {id,name,description,price,categorey}=props
    return (
        <div>
             <li key={id} className="card">
            <h3>{name}</h3>
            <p>{description}</p>
            <span>£{price}</span><br/>
            <span>{categorey}</span>
            </li>
        </div>
    )
}
export default Card