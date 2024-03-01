import { useState } from 'react'
import { Outlet } from "react-router-dom"

import { Nav } from '../components/Nav.jsx'

export const RootLayout = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleMenuIconTransform = () => {
        const menuIcon = document.querySelector('.menu-icon');
        menuIcon.classList.toggle('open');
        setToggleMenu(!toggleMenu)
    }

  return (
    <>
        <Nav 
            toggleMenuIconTransform={toggleMenuIconTransform}
            toggleMenu={toggleMenu}
        />
        <main>
            <Outlet />
        </main>
    </>
  )
}
