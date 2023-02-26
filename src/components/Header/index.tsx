import React from 'react'
// import '../Header/index.scss'
import { Routes, Route } from 'react-router-dom'
import Converter from '../../pages/Converter'
import Exchange from '../../pages/Exchange'
import ErrorPage from '../../pages/Error'

import Layout from '../../router/Layout'

const Header: React.FC = () => {
    return (
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Converter />} />
                        <Route path="/Exchange" element={<Exchange />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                </Routes>
    )
}

export default Header