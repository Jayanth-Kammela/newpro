// import React from 'react'
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


// const App = () => {
//   return (
//     <React.Fragment>
//       <section style={{ background: 'black' }}>
//         <VerticalTimeline>
//           <VerticalTimelineElement
//             position="right"
//             className="vertical-timeline-element--work"
//             contentStyle={{
//               background: `rgb(100,111,212)`,
//               borderRadius: "10px",
//             }}
//             lineColor={{ color: "#ff0000" }}
//             contentArrowStyle={{
//               borderRight: "7px solid  rgb(0,0,0)",
//             }}
//             dateClassName={"text-white"}
//             iconStyle={{
//               background: "rgb(0,0,0)",
//               color: "#fff",
//             }}
//             icon={<FiberManualRecordIcon />}
//           >
//             <h1>App</h1>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             position="right"
//             className="vertical-timeline-element--work"
//             contentStyle={{
//               background: `rgb(100,111,212)`,
//               borderRadius: "10px",
//             }}
//             lineColor={{ color: "#ff0000" }}
//             contentArrowStyle={{
//               borderRight: "7px solid  rgb(0,0,0)",
//             }}
//             dateClassName={"text-white"}
//             iconStyle={{
//               background: "rgb(0,0,0)",
//               color: "#fff",
//             }}
//             icon={<FiberManualRecordIcon />}
//           >
//             <h1>App</h1>
//           </VerticalTimelineElement>
//         </VerticalTimeline>
//       </section>
//     </React.Fragment>
//   )
// }

// export default App

import React, { useRef, useState } from 'react';
import { Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, useMediaQuery, useTheme, Button, TextField } from '@mui/material';
import { Menu, Settings, Info, ContactMail, Home } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useHover } from './hooks/useHover';
import ProductMenu from './components/ProductMenu';
import SolutionMenu from './components/SolutionMenu';

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

const App = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const forScreenWidth = useMediaQuery(theme.breakpoints.down('md'));

  const forClick = () => {
    setOpen(!open);
  };

  const dropdownRefProduct = useRef(null);
  const [isProductMenuOpen, setProductMenuOpen] = useState(false);

  const closeHoverMenuProduct = () => {
    setProductMenuOpen(false);
  };

  useHover(dropdownRefProduct, closeHoverMenuProduct);

  const dropdownRefSolution = useRef(null);
  const [isSolutionMenuOpen, setSolutionMenuOpen] = useState(false);

  const closeHoverMenuSolution = () => {
    setSolutionMenuOpen(false);
  };

  useHover(dropdownRefSolution, closeHoverMenuSolution);




  return (
    <React.Fragment>
      <section>
        <Toolbar>
          {!forScreenWidth && (
            <>
              <GitHubIcon sx={{ width: 32, height: 32, cursor: 'pointer', color: '#FFFF' }} />
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                  <Typography sx={{ ...CustomStyles.navLink }}
                   onMouseOver={() => setProductMenuOpen(true)}
                   onMouseLeave={() => setProductMenuOpen(false)}
                  >
                    Product
                  </Typography>

                  {isProductMenuOpen && <ProductMenu/>}
                </div>
                <div>
                  <Typography sx={{ ...CustomStyles.navLink }}
                   onMouseOver={() => setSolutionMenuOpen(true)}
                   onMouseLeave={() => setSolutionMenuOpen(false)}
                  >
                    Solutions
                  </Typography>

                  {isSolutionMenuOpen && <SolutionMenu/>}
                </div>
                <Typography component={'p'} sx={{ ...CustomStyles.navLink }}>About</Typography>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <TextField autoComplete='off' placeholder='Search or jump to...' InputProps={{
                sx: {
                  height: "2em",
                  background: '#0d1117',
                  color:'#c9d1d9'
                }
              }} type='search' />
              <Button variant='text' component={Button} sx={{ textTransform: 'none', color: '#FFFF' }}>Sign in</Button>
              <Button variant='outlined'component={Button} sx={{ textTransform: 'none', color: '#FFFF', }}>Sign up</Button>
            </>
          )}
          {forScreenWidth && (
            <>
            <GitHubIcon sx={{ width: 32, height: 32, cursor: 'pointer', color: '#FFFF' }} />
              <Box sx={{ flexGrow: 1 }} />
              <Button variant='text' component={Button} sx={{ textTransform: 'none', color: '#FFFF' }}>Sign in</Button>
              <Button variant='outlined'component={Button} sx={{ textTransform: 'none', color: '#FFFF', }}>Sign up</Button>
              <IconButton onClick={forClick} edge="end" >
                <Menu />
              </IconButton>
            </>
          )}
        </Toolbar>

      </section>
      {forScreenWidth &&
        <Drawer anchor="right" open={open} onClose={forClick} >
          <List sx={{ width: 280 }}>
            <ListItem>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Service" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ContactMail />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </List>
        </Drawer>
      }
      {/* <ProductMenu/> */}
    </React.Fragment>
  )
}

export default App