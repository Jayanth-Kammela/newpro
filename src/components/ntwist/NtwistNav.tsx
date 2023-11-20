import { useMediaQuery, Toolbar, Box, IconButton, useTheme, Drawer, List, TextField } from '@mui/material';
import React, { useState } from 'react'
import { Menu } from '@mui/icons-material';
import styles from "../../index.module.css";
import SearchIcon from '@mui/icons-material/Search';
import IndusrtyMenu from './IndusrtyMenu';
import { CustomHover1 } from '../../utils/utils';
import SideDrawer from './SideDrawer';
import CloseIcon from '@mui/icons-material/Close';

const NtwistNav = () => {

    const CustomStyles = {
        navLink: {
            mx: 2,
            cursor: 'pointer',
            position: "relative",
            fontSize: '14px',
            fontFamily: 'Open Sans',
            fontWeight: 'bold',
            color: '#FFFF'
        }
    }

    const [open, setOpen] = useState<boolean>(false);

    const theme = useTheme();
    const forScreenWidth = useMediaQuery(theme.breakpoints.down('md'));

    const forClick = () => {
        setOpen(!open);
    };

    const [indusOpen, setIndusOpenOpen] = useState(false);


    const handleToggleDrawer = () => {
        setIndusOpenOpen(!indusOpen);
    };

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };


    return (
        <React.Fragment>
            <div className="navbar">
            <Toolbar>
                
                {forScreenWidth ? null : <img className={styles.ntwisticon} src='https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png' />}
                {!forScreenWidth && (
                    <>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className={styles.navtxt}>
                                <Box component={'div'} sx={{ ...CustomStyles.navLink, ...CustomHover1.navLink }} >
                                    Home
                                </Box>
                            </div>

                            <div onMouseEnter={handleToggleDrawer} onMouseLeave={handleToggleDrawer} className={styles.navtxt}>
                                <Box component={'div'} sx={{ ...CustomStyles.navLink, ...CustomHover1.navLink }}>
                                    Industries
                                </Box>
                                <Drawer anchor="top" open={indusOpen} onClose={handleToggleDrawer} PaperProps={{ sx: { width: 340, height: '220px', position: 'absolute', left: '72%', top: 60, borderRadius: 2 } }}>
                                    <IndusrtyMenu />
                                </Drawer>
                            </div>

                            <div className={styles.navtxt}>
                                <Box component={'div'} sx={{ ...CustomStyles.navLink, ...CustomHover1.navLink }}>
                                    AI Software
                                </Box>
                            </div>

                            <div className={styles.navtxt}>
                                <Box component={'div'} sx={{ ...CustomStyles.navLink, ...CustomHover1.navLink }}>
                                    Blog
                                </Box>
                            </div>
                            <div className={styles.navtxt}>
                                <Box component={'div'} sx={{ ...CustomStyles.navLink, ...CustomHover1.navLink }}>
                                    Contact us
                                </Box>
                            </div>

                        </Box>
                    </>
                )}

                {forScreenWidth && (
                    <>
                        <img className={styles.ntwisticon} src='https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png' />
                        <Box sx={{ flexGrow: 0.98 }} />
                        <div className='px-4'>
                            <IconButton onClick={toggleDrawer} edge="end">
                                <SearchIcon />
                            </IconButton>
                        </div>
                        <div className='px-4'>
                            <IconButton onClick={forClick} edge="end">
                                <Menu sx={{ color: '#FFFF' }} />
                            </IconButton>
                        </div>
                    </>
                )}
            </Toolbar>
            </div>

            <SideDrawer forScreenWidth={forScreenWidth} open={open} forClick={forClick} indusOpen={indusOpen} handleToggleDrawer={handleToggleDrawer} />

            {forScreenWidth && (
                <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer}>
                    <ul style={{ height: 600 }}>
                        <Box sx={{ textAlign: 'end', mt: 2, mr: 2 }}>
                            <IconButton onClick={toggleDrawer}>
                                <CloseIcon />
                            </IconButton>
                        </Box>

                        <List>
                            <TextField variant='standard' fullWidth placeholder='Search...' autoComplete='off' type='search' sx={{ px: 2.1, py: 0.8, fontSize: '24px' }} InputProps={{
                                endAdornment: (
                                    <SearchIcon sx={{ color: 'black', marginRight: 1 }} />
                                ),
                            }} />
                        </List>
                    </ul>
                </Drawer>)}
        </React.Fragment>
    )
}

export default NtwistNav