import React from 'react'

function Historia({ historia }) {
  return (
    <ul style={{ listStyleType: 'none', maxWidth: '100%', padding: '0' }}>
      {Array.isArray(historia) && !historia.length === true ? (<div style={{ textAlign: 'center' }}>Brak</div>) :
        < > {historia.map((hist, id) => (
          <li className='Cards' key={id}>
            <><span>{hist.name}</span></>
            < > {hist.value < 0?(<span style={{ float: 'right', color: 'red' }}>{hist.value}</span>):
            <span style={{ float: 'right', color: 'green' }}>{hist.value}</span>
            } </>
          </li>
        ))}
        </>}
    </ul>
  )
}

export default Historia