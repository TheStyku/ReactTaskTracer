import React from 'react'


function Saldo({saldo}) {
    return (
        <div className='Saldo'>
            <h3 className='Wplywy'>Wpływy:<br />
                <p style={{ color: 'green' }}> {saldo.wplywy}</p>
            </h3>
            <h3 className='Wyplywy'>Wypływy:<br />
                <p style={{ color: 'red' }}> {saldo.wyplywy}</p>
            </h3>
        </div>
    )
}

export default Saldo