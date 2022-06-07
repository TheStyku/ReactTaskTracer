import React from 'react'

function Historia({historia}) {
  return (
    <ul style={{listStyleType : 'none', maxWidth:'100%', padding:'0'}}>
      {historia.name ===""?(<div>Brak</div>):
       < > {historia.map((hist, id)=>( 
         <li key={id}>
           <><span>{hist.name}</span></>< > <span style={{float: 'right'}}>{hist.value}</span> </>
         </li>
        ))}
       </>}
       </ul>
  )
}

export default Historia