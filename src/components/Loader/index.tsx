import React from 'react'
import '../Loader/index.scss'

const Loader: React.FC = (value) => {
    return (
        <div className="ldsEllipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
export default Loader
