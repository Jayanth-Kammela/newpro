import React from 'react'
import styles from "../../index.module.css";
import { Box, Typography } from '@mui/material';

const ImageOrg = () => {
    return (
        <React.Fragment>
            <Box component={'div'} className='mt-16'>
                <Typography component={'p'} className={styles.txtorg}>Trusted by the world’s leading&nbsp;organizations&nbsp;↘︎</Typography>
            </Box>

            <div className="flex flex-wrap justify-around items-center">
                <div className=" lg:w-48 p-6">
                    <img className="w-full h-auto" src="https://github.githubassets.com/assets/3m-0151c2fda0ce.svg" alt="" />
                </div>
                <div className="lg:w-48 p-6">
                    <img className="w-full h-auto" src="https://github.githubassets.com/assets/kpmg-c249f20c5173.svg" alt="" />
                </div>
                <div className=" lg:w-48 p-6">
                    <img className="w-full h-auto" src="https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg" alt="" />
                </div>
                <div className=" lg:w-48 p-6">
                    <img className="w-full h-auto" src="https://github.githubassets.com/assets/sap-96248a56d312.svg" alt="" />
                </div>
                <div className=" lg:w-48 p-6">
                    <img className="w-full h-auto" src="https://github.githubassets.com/assets/pg-f1f19955c4e4.svg" alt="" />
                </div>
                <div className=" lg:w-48 p-6">
                    <img className="w-full h-auto" src="https://github.githubassets.com/assets/telus-df0c2109df99.svg" alt="" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default ImageOrg