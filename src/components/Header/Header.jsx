import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div>
            <p className='welcome_message'>Bienvenido/a a nuestra tienda online!!!🛒</p>
            <div className='header_container'>
                <div className='name'>
                    <h1>Bebiu Clothes</h1>
                </div>
            </div>
        </div>
    )
}

export default Header