import React from 'react'

function Historia({historia}) {
  return (
      
      historia.name==='Zaupy'?(<div>Brak</div>):
       <div> {historia.map((hist, id)=>( 
         <li key={id}>
           <span>{hist.name} {hist.value}</span>
         </li>))}
       </div>
  )
}

export default Historia