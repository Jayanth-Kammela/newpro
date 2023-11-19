import { Box } from '@mui/material'
import React from 'react'
import styles from "../../index.module.css";

const Ntwistfooter = () => {
    return (
        <React.Fragment>
            <Box component={'div'} className={styles.footer}>
                <div className='py-2'>
                    <img className={`${styles.ntwisticon} mx-auto`} src='https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png' />
                </div>
                <div className='py-2'>
                    <ul className='lg:flex md:flex sm:flex lg:flex-row md:flex-col sm:flex-col justify-center'>
                        <li className='px-2'>Home</li>
                        <li className='px-2'>About us</li>
                        <li className='px-2'>Contact us</li>
                        <li className='px-2'>Privacy Policy</li>
                        <li className='px-2'>Sitemap</li>
                    </ul>
                </div>
                <div className={`${styles.fttxt} py-2`}>
                    9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
                </div>
                <div className={`${styles.fttxt} py-2`}>
                    © 2022. Ntwist Inc.
                </div>
            </Box>
        </React.Fragment>
    )
}

export default Ntwistfooter