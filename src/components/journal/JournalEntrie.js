import React from 'react'

export const JournalEntrie = () => {
    return (
        <div className='journal__entrie pointer'>
            <div
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://comofriki.com/wp-content/uploads/2018/10/imagenes-sin-derechos-de-autor.jpg)'
                }}
            >

            </div>
            <div className='journal__entrie-boby'>
                <p className='journal__entrie-title'>
                    Un nuevo dia
                </p>
                <p className='journal__entrie-content'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                </p>
            </div>
            <div className='journal__entrie-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
