import { Box, Button, Stack, Divider, styled, TextField, useMediaQuery } from '@mui/material'
import React from 'react'
import styles from "../../index.module.css";

const CallActionBtn = () => {

    const isMdScreen = useMediaQuery('(max-width: 750px)');

    const Txt = styled(TextField)({
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: 'none',
            },
        },
    });

    return (
        <React.Fragment>
            {isMdScreen ? <Box component={'div'}>
                <div className='my-4'>
                    <Txt type='email' placeholder='Email address' className={`${styles.txtfield1} w-full`} autoComplete='off'
                        variant="outlined"
                    />
                </div>
                <div className='my-4'>
                    <Button className={`${styles.btnend1} w-full my-20`} variant='contained'>Sign up for GitHub</Button>
                </div>
                <div>
                    <Button variant='outlined' className={`${styles.enbtn1} w-full`}>Start a free enterprice trial</Button>
                </div>
            </Box>
                : <Stack direction={'row'} sx={{ marginBottom: 2 }}>
                    <Txt type='email' placeholder='Email address' className={styles.txtfield} autoComplete='off'
                        variant="outlined"
                    />
                    <Button className={styles.btnend} variant='contained'>Sign up for GitHub</Button>
                    <Divider orientation="vertical" flexItem sx={{ background: '#FFFF', marginRight: '30px', marginLeft: '30px' }} />
                    <Button variant='outlined' className={styles.enbtn}>Start a free enterprice trial</Button>
                </Stack>}
        </React.Fragment>
    )
}

export default CallActionBtn