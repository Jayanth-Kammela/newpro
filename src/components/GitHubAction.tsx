import { Box } from '@mui/material'
import React from 'react'
import styles from "../index.module.css";
import { GitHubActionProps } from '../utils/utils';
import { Arrow } from '../svgs/svg';




const GitHubAction = (data: GitHubActionProps) => {
    const { mainhead, subhead, actiontxt, imageurl } = data.data;

    return (
        <React.Fragment>
            <Box component={'div'} className={`${styles.mainac} flex flex-col lg:flex-row md:flex-row  rounded-xl`}>
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
                    <img className='h-full' src={imageurl} alt="" />
                </div>
            </Box>
        </React.Fragment>
    )
}

export default GitHubAction