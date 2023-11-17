import { Box } from '@mui/material'
import React from 'react'
import styles from "../index.module.css";
import { Arrow } from '../svgs/svg';
import { GitHubActionProps } from '../utils/utils';


const ImageVCard = (data: GitHubActionProps) => {
    const { mainhead, subhead, actiontxt, imageurl } = data.data;
    return (
        <React.Fragment>
            <Box component={'div'} className={`${styles.mainac} lg:w-1/2 flex flex-col justify-between rounded-xl mb-6 sm:mb-6 md:mb-6 lg:mr-2 ml-2`}>
                <div className='flex flex-col justify-between p-16'>
                    <div className='w-full'>
                        <p className={`${styles.subgitac}`}>
                            <span className={styles.gitac}>{mainhead}</span>{subhead}
                        </p>
                    </div>
                    <div className={`${styles.axd} flex items-center p-1`}>
                        <a href="" className='mr-4'>{actiontxt}</a>
                        <Arrow/>
                    </div>
                    <div>
                    </div>
                </div>
                <div>
                    <img src={imageurl} alt="" />
                </div>
            </Box>
        </React.Fragment>
    )
}

export default ImageVCard