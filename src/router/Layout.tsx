import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../router/index.scss'

const Layout: React.FC = () => {
    const setActiveLink = ({ isActive }: any) => {
        return isActive ? 'appHeaderNavActive' : ''
    }

    return (
        <>
            <header className="appHeader">
                <div className="appHeaderContainer">
                    <nav className="appHeaderNav">
                        <NavLink to="/" className={setActiveLink}>
                            Конвертация валют
                        </NavLink>
                        <NavLink to="/Exchange" className={setActiveLink}>
                            Курсы валют
                        </NavLink>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    )
}
export default Layout
