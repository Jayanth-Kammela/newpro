import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
    return (
        <React.Fragment>
            <div className='flex justify-center items-center' style={{ height: '100vh' }}>
                <div className='mx-8' >
                    <Link to='/github'>GitHub</Link>
                </div>
                <div className="mx-8">
                    <Link to='/ntwist'>Ntwist</Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainPage