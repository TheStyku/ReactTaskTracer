import React from 'react'

function Historia({historia}) {
  return (
      
      historia.name==='Zaupy'?(<div>Brak</div>):
       <div className='Tak'> {historia.map((hist, id)=>( 
         <ul style={{listStyleType : 'none', maxWidth:'100%', padding:'0'}}>
         <li key={id}>
           <span className='Historia1'>{hist.name}</span><span className='Historia2'> {hist.value}</span>
         </li>
         </ul>))}
       </div>
  )
}

export default Historia