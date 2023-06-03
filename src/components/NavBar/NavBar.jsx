import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const NavBar = () => {
    return (
        <div className='division_top'>
            <nav>
                <ul>
                    <div className='links'>
                    <li><a href="http://localhost:5173">Inicio</a></li>
                    <li><a href="http://localhost:5173">Productos</a></li>
                    <li><a href="http://localhost:5173">Ofertas</a></li>
                    <li><a href="http://localhost:5173">Contacto</a></li>
                    </div>
                    <div className='notification_bar'>
                    <li><SearchOutlinedIcon/></li>
                    <li><NotificationsNoneOutlinedIcon/></li>
                    <li><CartWidget/></li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar