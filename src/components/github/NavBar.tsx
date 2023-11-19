import { Toolbar, Box, Drawer, Button, IconButton, useMediaQuery, useTheme, TextField, InputAdornment } from '@mui/material'
import React, { useState } from 'react'
import OpenSourceMenu from './OpenSourceMenu'
import ProductMenu from './ProductMenu'
import SolutionMenu from './SolutionMenu'
import styles from "../../index.module.css";
import { Menu } from '@mui/icons-material';
import SideResDrawer from './SideResDrawer'
import { GitHub } from '../../svgs/svg'
import SearchDrawer from './SearchDrawer'

const NavBar = () => {

    const CustomStyles = {
        btnNav: {
            background: '#30A2FF',
            color: '#ffff',
            padding: '5px 22px 5px 22px',
            fontSize: '14px',
            borderRadius: '18px',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            margin: '0px 4px 0px 4px',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#ffff',
                color: '#30A2FF',
                border: '1px solid #30A2FF'
            }
        },
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

    const [isProductMenuOpen, setProductMenuOpen] = useState(false);


    const handleToggleDrawer = () => {
        setProductMenuOpen(!isProductMenuOpen);
    };

    const [isSolutionMenuOpen, setSolutionMenuOpen] = useState(false);

    const handleToggleDrawer1 = () => {
        setSolutionMenuOpen(!isSolutionMenuOpen);
    };

    const [isSourceMenuOpen, setSourceMenuOpen] = useState(false);

    const handleToggleDrawer2 = () => {
        setSourceMenuOpen(!isSourceMenuOpen);
    };

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };



    return (
        <React.Fragment>
            <Toolbar>
                {forScreenWidth ? null : <GitHub />}
                {!forScreenWidth && (
                    <>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div onMouseEnter={handleToggleDrawer} onMouseLeave={handleToggleDrawer} className={styles.navtxt}>
                                <Box component={'div'} sx={{ ...CustomStyles.navLink }} >
                                    Product
                                </Box>
                                <Drawer anchor="top" open={isProductMenuOpen} onClose={handleToggleDrawer} PaperProps={{ sx: { width: 500, height: 'auto', position: 'absolute', left: 80, top: 60, borderRadius: 2 } }}>
                                    <ProductMenu />
                                </Drawer>
                            </div>

                            <div onMouseEnter={handleToggleDrawer1} onMouseLeave={handleToggleDrawer1} className={styles.navtxt}>
                                <Box component={'div'} sx={{ ...CustomStyles.navLink }}>
                                    Solutions
                                </Box>
                                <Drawer anchor="top" open={isSolutionMenuOpen} onClose={handleToggleDrawer1} PaperProps={{ sx: { width: 300, height: '380px', position: 'absolute', left: 170, top: 60, borderRadius: 2 } }}>
                                    <SolutionMenu />
                                </Drawer>
                            </div>

                            <div onMouseEnter={handleToggleDrawer2} onMouseLeave={handleToggleDrawer2} className={styles.navtxt}>
                                <Box component={'div'} sx={{ ...CustomStyles.navLink }}>
                                    Open Source
                                </Box>
                                <Drawer anchor="top" open={isSourceMenuOpen} onClose={handleToggleDrawer2} PaperProps={{ sx: { width: 300, height: '340px', position: 'absolute', left: 280, top: 60, borderRadius: 2 } }}>
                                    <OpenSourceMenu />
                                </Drawer>
                            </div>

                            <Box component={'div'} sx={{ ...CustomStyles.navLink }} className={styles.navtxt}>Pricing</Box>
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />

                        <div>
                            <SearchDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
                        </div>

                        <Button variant="text" component={Button} sx={{ textTransform: 'none', color: '#FFFF' }}>
                            Sign in
                        </Button>
                        <Button variant="outlined" component={Button} sx={{ textTransform: 'none', color: '#FFFF' }}>
                            Sign up
                        </Button>
                    </>
                )}

                {forScreenWidth && (
                    <>
                        <Button variant="outlined" component={Button} sx={{ textTransform: 'none', color: '#FFFF' }}>
                            Sign up
                        </Button>
                        <Box sx={{ flexGrow: 1 }} />
                        <GitHub />
                        <Box sx={{ flexGrow: 1 }} />
                        <IconButton onClick={forClick} edge="end">
                            <Menu sx={{ color: '#FFFF' }} />
                        </IconButton>
                    </>
                )}
            </Toolbar>

            <SideResDrawer forScreenWidth={forScreenWidth} open={open} forClick={forClick} drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
        </React.Fragment >
    )
}

export default NavBar