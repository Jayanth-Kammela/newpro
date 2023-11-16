import React, { useState } from 'react';
import styles from './index.module.css';
import {
  Toolbar,
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
  Button,
  Container,
  Typography,
  TextField,
  InputAdornment,
  styled,
  FormGroup,
  Divider,
  Stack,
} from '@mui/material';
import { Menu, Settings, Info, ContactMail, Home } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ProductMenu from './components/ProductMenu';
import SolutionMenu from './components/SolutionMenu';
import OpenSourceMenu from './components/OpenSourceMenu';
import { Thick } from './svgs/svg';
import { bulidsteps, sponsors } from './utils/utils';


const App = () => {

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

  type Sponcard = {
    name: string;
    avatar: string;
    githubUsername: string;
  }

  type Bulid = {
    text: string;
    time: string
  }

  const [open, setOpen] = useState<boolean>(false);
  const isMdScreen = useMediaQuery('(max-width: 750px)');

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

  const Txt = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
    },
  });

  return (
    <React.Fragment>
      <main>
        <section>
          <Toolbar>
            <GitHubIcon sx={{ width: 32, height: 32, cursor: 'pointer', color: '#FFFF' }} />
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
                <Box sx={{ flexGrow: 1 }} />
                <Button variant="text" component={Button} sx={{ textTransform: 'none', color: '#FFFF' }}>
                  Sign in
                </Button>
                <Button variant="outlined" component={Button} sx={{ textTransform: 'none', color: '#FFFF' }}>
                  Sign up
                </Button>
                <IconButton onClick={forClick} edge="end">
                  <Menu />
                </IconButton>
              </>
            )}

          </Toolbar>
        </section>
        {forScreenWidth && (
          <Drawer anchor="right" open={open} onClose={forClick}>
            <List sx={{ width: 280 }}>
              <ListItem>
                <Home />
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem>
                <Settings />
                <ListItemText primary="Service" />
              </ListItem>
              <ListItem>
                <Info />
                <ListItemText primary="Blog" />
              </ListItem>
              <ListItem>
                <ContactMail />
                <ListItemText primary="About" />
              </ListItem>
            </List>
          </Drawer>
        )}

        <section>
          <Container>
            <Box sx={{ padding: '60px' }} />

            <Box component={'div'} className={`${styles.boxst} w-full lg:w-2/4 md:w-3/4 sm:w-full py-4`}>
              <img
                src="https://github.githubassets.com/assets/eyebrow-23@2x-563f292d9e30.png?width=44&format=webpll"
                alt=""
                className={styles.frimg}
              />
              <div>
                <Typography variant="h4" component="p" className={`${styles.unitxt}`}>
                  GitHub Universe: AI. Security. DevEx
                </Typography>
                <Typography variant="h5" component="p" className={styles.subtxt}>
                  Register for free and join us on Nov 8-9
                </Typography>
              </div>
            </Box>

            <Box component={'div'} sx={{ marginBottom: '96px' }}>
              <Typography component={'p'} className={`${styles.bulittxt}`}>
                Let’s build from&nbsp;here
              </Typography>
              <Typography component={'p'} className={`${styles.bulitsubtxt}`}>
                The world’s leading AI-powered developer platform.
              </Typography>
            </Box>

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

            {/* <Box component={'div'} sx={{ display: 'flex', marginBottom: 2 }}>
              <FormGroup row sx={{ marginRight: '30px' }}>
                <Txt type='email' placeholder='Email address' className={styles.txtfield} autoComplete='off'
                  variant="outlined"
                />
                <Button className={styles.btnend} variant='contained'>Sign up for GitHub</Button>
              </FormGroup>
              <Divider orientation="vertical" flexItem sx={{ background: '#FFFF', marginRight: '30px' }} />
              <Button variant='outlined' className={styles.enbtn}>Start a free enterprice trial</Button>
            </Box> */}

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

            <Box sx={{ padding: 7.2 }} />

            <Box component={'div'} className=" w-full sm:w-full md:w-8/12 lg:w-100 xl:w-9/12  p-4">
              <Typography variant='h2' component={'p'} className={`text-3xl lg:text-4xl xl:text-5xl ${styles.protxt}`}>
                Productivity
              </Typography>

              <h2 className={` ${styles.innotxt1}`}>
                <span className={` ${styles.innotxt}`}>Accelerate innovation</span><br />
                Our AI-powered platform increases the pace of software development.
              </h2>
            </Box>

            <Box sx={{ padding: 6.2 }} />

            <div className="relative">
              <Box component={'div'} className={`${styles.imgt} rounded bg-cover bg-no-repeat w-full h-84vh`} />
              <img className='absolute top-80 right-0 w-1/2 lg:w-1/3 md:w-1/3 sm:w-1/3 h-50vh rounded-lg' src="https://github.githubassets.com/assets/illu-copilot-sidebar-3d2efb504577.png" alt="" />
            </div>


            <Box sx={{ padding: 5 }} />

            <Box component={'div'}>
              <div className='w-full lg:w-5/12 md:w-2/4 sm:w-4/6'>
                <h2 className={styles.copttxt}><span className={styles.copt}>GitHub Copilot</span>
                  empowers developers to complete tasks 55% faster with contextualized AI coding assistance across workflows.</h2>
              </div>
              <div className={`${styles.axd} flex items-center`}><a href="" className='mr-4'>Explore GitHub Copilot </a><svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg></div>
            </Box>

            <Box sx={{ padding: 5 }} />

            <Box component={'div'}>
              <span className={`${styles.did} rounded-full p-1`}>Did you know?</span>
              <h3 className={`${styles.txt22} w-full sm:w-5/12 md:min-w-[400px]  xl:min-w-[600px]`}>
                22% increase
              </h3>
              <Typography className={`${styles.txt22sub} w-100 sm:w-5/12 md:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px]`} component={'p'}>
                in developer productivity after three years with GitHub
              </Typography>
              <div className={`${styles.axd} flex items-center`}><a href="" className='mr-4'>Read the report </a><svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg></div>
            </Box>

            <Box sx={{ padding: 5 }} />

            <Box component={'div'} className={`${styles.mainac} flex flex-col lg:flex-row justify-between rounded-xl`}>
              <div className='flex flex-col justify-between p-16'>
                <div className='w-full'>
                  <p className={`${styles.subgitac}`}>
                    <span className={styles.gitac}>GitHub Actions</span> automates your build, test, and deployment workflow with simple and secure CI/CD.
                  </p>
                </div>
                <div className={`${styles.axd} flex items-center p-1`}>
                  <a href="" className='mr-4'>Discover GitHub Actions</a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                    <path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path>
                  </svg>
                </div>
                <div>
                </div>
              </div>
              <div>
                <img src="https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png?width=653&format=webpll" alt="" />
              </div>
            </Box>

            <Box component={'div'} className='flex justify-evenly flex-col lg:flex-row md:flex-col sm:flex-col my-10'>

              <Box component={'div'} className={`${styles.mainac} lg:w-1/2 flex flex-col justify-between rounded-xl mb-6 sm:mb-6 md:mb-6 lg:mr-5`}>
                <div className='flex flex-col justify-between p-16'>
                  <div className='w-full'>
                    <p className={`${styles.subgitac}`}>
                      <span className={styles.gitac}>GitHub Codespaces</span>  offers a complete dev environment in seconds. Code, build, test, and open pull requests from any repo.
                    </p>
                  </div>
                  <div className={`${styles.axd} flex items-center p-1`}>
                    <a href="" className='mr-4'>Check out GitHub Codespaces </a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                      <path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <div>
                  </div>
                </div>
                <div>
                  <img src="https://github.githubassets.com/assets/illu-codespaces-1d2d17e8b2b7.png?width=1209&format=webpll" alt="" />
                </div>
              </Box>

              <Box component={'div'} className={`${styles.mainac} lg:w-1/2 flex flex-col justify-between rounded-xl mb-6 sm:mb-6 md:mb-6 lg:ml-5`}>
                <div className='flex flex-col justify-between p-16'>
                  <div className='w-full'>
                    <p className={`${styles.subgitac}`}>
                      <span className={styles.gitac}>GitHub Mobile
                      </span> fits your projects in your pocket, so you never miss a beat while on the go.
                    </p>
                  </div>
                  <div className={`${styles.axd} flex items-center p-1`}>
                    <a href="" className='mr-4'>Download GitHub Mobile</a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                      <path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <div>
                  </div>
                </div>
                <div>
                  <img src="https://github.githubassets.com/assets/illu-mobile-4d51d19f769e.png?width=1208&format=webpll" alt="" />
                </div>
              </Box>

            </Box>

            <Box component={'div'} className=" w-full sm:w-full md:w-8/12 lg:w-100 xl:w-9/12  p-4">
              <Typography variant='h2' component={'p'} className={`text-3xl lg:text-4xl xl:text-5xl ${styles.protxt}`}>

                Application security
              </Typography>

              <h2 className={` ${styles.innotxt1}`}>
                <span className={` ${styles.innotxtapl}`}>Empower developers</span><br />
                With GitHub, you can secure code in minutes.
              </h2>
            </Box>


            <div className={`${styles.mainac} rounded-xl`}>
              <div className="relative">
                <img className='absolute top-80 right-0 w-0 sm:w-0 md:w-5/12 lg:w-1/3 h-50vh rounded-lg' src="https://github.githubassets.com/assets/illu-ghas-list-84af1f1ce2b8.png" alt="" />
              </div>
              <div className="px-10 py-6">
                <div className={styles.yml}>cmake.yml</div>
                <span className={styles.yml}>on: push</span>
              </div>
              <Box component={'div'} className={`flex flex-col sm:flex-row p-10`}>
                <div className="flex-grow">
                  <div className={`${styles.bulidbox} flex justify-between p-5 rounded-xl mx-4 my-4`}>
                    <div className='flex'>
                      <Thick />
                      <span className='bulidtxt'>Build</span>
                    </div>
                    <div className='timecl'>
                      1m 21s
                    </div>
                  </div>
                </div>

                <div className="flex-grow">
                  <div className={`${styles.bulidbox} flex flex-col p-5 rounded-xl mx-4 my-4`}>
                    {bulidsteps.map((item: Bulid) => (
                      <div className="flex justify-between pb-3" key={item.text}>
                        <div className='flex'>
                          <Thick />
                          <span className='bulidtxt'>{item.text}</span>
                        </div>
                        <div className='timecl'>
                          {item.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Box>
            </div>


            <Box sx={{ padding: 5 }} />

            <Box component={'div'}>
              <div className='w-full lg:w-5/12 md:w-2/4 sm:w-4/6'>
                <h2 className={styles.copttxt}><span className={styles.copt}>GitHub Advanced Security</span>
                  enables you to find and fix vulnerabilities with ease and ship secure code quickly.</h2>
              </div>
              <div className={`${styles.axd} flex items-center`}><a href="" className='mr-4'>Dive into GitHub Advanced Securityt </a><svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg></div>
            </Box>

            <Box sx={{ padding: 5 }} />

            <Box component={'div'}>
              <span className={`${styles.did1} rounded-full p-1`}>Did you know?</span>
              <h3 className={`${styles.txt7x} w-full sm:w-5/12 md:min-w-[400px]  xl:min-w-[600px]`}>
                7x faster
              </h3>
              <Typography className={`${styles.txt22sub} w-100 sm:w-5/12 md:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px]`} component={'p'}>
                vulnerability fixes with GitHub<sup>1</sup>
              </Typography>
            </Box>

            <Box sx={{ padding: 5 }} />

            <Box component={'div'} className={`${styles.mainac} flex flex-col lg:flex-row justify-between rounded-xl`}>
              <div className='flex flex-col justify-between p-16'>
                <div className='w-full'>
                  <p className={`${styles.subgitac}`}>
                    <span className={styles.gitac}>GitHub Advanced Security </span> enables you to find and fix vulnerabilities with ease and ship secure code quickly.
                  </p>
                </div>
                <div className={`${styles.axd} flex items-center p-1`}>
                  <a href="" className='mr-4'>Dive into GitHub Advanced Securitys</a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                    <path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path>
                  </svg>
                </div>
                <div>
                </div>
              </div>
              <div>
                <img src="https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=772&format=webpll" alt="" />
              </div>
            </Box>

            <Box sx={{ padding: 5 }} />

            <Box component={'div'} className='flex justify-evenly flex-col lg:flex-row md:flex-col sm:flex-col my-10'>

              <Box component={'div'} className={`${styles.mainac} lg:w-1/2 flex flex-col justify-between rounded-xl mb-6 sm:mb-6 md:mb-6 lg:mr-5`}>
                <div className='flex flex-col justify-between p-16'>
                  <div className='w-full'>
                    <p className={`${styles.subgitac}`}>
                      <span className={styles.gitac}>Dependabot  </span>makes it easy to find and fix vulnerable dependencies in your supply chain.
                    </p>
                  </div>
                  <div className={`${styles.axd} flex items-center p-1`}>
                    <a href="" className='mr-4'>Explore Dependabot </a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                      <path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <div>
                  </div>
                </div>
                <div>
                  <img src="https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=724&format=webpll" alt="" />
                </div>
              </Box>

              <Box component={'div'} className={`${styles.mainac} lg:w-1/2 flex flex-col justify-between rounded-xl mb-6 sm:mb-6 md:mb-6 lg:ml-5`}>
                <div className='flex flex-col justify-between p-16'>
                  <div className='w-full'>
                    <p className={`${styles.subgitac}`}>
                      <span className={styles.gitac}>Secret scanning
                      </span>automatically looks for partner patterns and prevents fraudulent use of accidentally committed secrets.
                    </p>
                  </div>
                  <div className={`${styles.axd} flex items-center p-1`}>
                    <a href="" className='mr-4'>Read about secret scanning</a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                      <path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <div>
                  </div>
                </div>
                <div>
                  <img src="https://github.githubassets.com/assets/illu-secret-scanning-2-88fb429376d6.png?width=724&format=webpll" alt="" />
                </div>
              </Box>

            </Box>

            <Box sx={{ padding: 5 }} />

            <Box component={'div'} className=" w-full sm:w-full md:w-8/12 lg:w-100 xl:w-9/12  p-4">
              <Typography variant='h2' component={'p'} className={`text-3xl lg:text-4xl xl:text-5xl ${styles.protxt}`}>
                Collaboration
              </Typography>

              <h2 className={` ${styles.innotxt1}`}>
                <span className={` ${styles.innotxtsup}`}>Supercharge collaboration</span><br />
                GitHub helps your teams work more efficiently together.
              </h2>
            </Box>

            <div className="relative">
              <Box component={'div'} className={`${styles.imgbar} rounded bg-cover bg-no-repeat w-full h-84vh`} />
              <img className='absolute top-80 right-0 w-1/2 lg:w-2/5 md:w-1/3 sm:w-1/3 h-50vh rounded-lg' src="https://github.githubassets.com/assets/illu-projects-2-26077f1dd188.png" alt="" />
            </div>


            <Box sx={{ padding: 5 }} />

            <Box component={'div'}>
              <div className='w-full lg:w-5/12 md:w-2/4 sm:w-4/6'>
                <h2 className={styles.copttxt}><span className={styles.copt}>GitHub Issues and GitHub Projects</span>
                  supply project management tools that adapt to your team alongside your code.</h2>
              </div>
              <div className={`${styles.axd} flex items-center`}><a href="" className='mr-4'>Get started with GitHub Issues </a><svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg></div>
            </Box>

            <Box sx={{ padding: 5 }} />

            <Box component={'div'}>
              <span className={`${styles.did80} rounded-full p-1`}>Did you know?</span>
              <h3 className={`${styles.txt80} w-full sm:w-5/12 md:min-w-[400px]  xl:min-w-[600px]`}>
                80%
              </h3>
              <Typography className={`${styles.txt22sub} w-100 sm:w-5/12 md:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px]`} component={'p'}>
                reduction in onboarding time with GitHub <sup>2</sup>
              </Typography>
              <div className={`${styles.axd} flex items-center`}><a href="" className='mr-4'>Read the report </a><svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg></div>
            </Box>


            <Box sx={{ padding: 5 }} />


            <Box component={'div'} className='flex justify-evenly flex-col lg:flex-row md:flex-col sm:flex-col my-10'>

              <Box component={'div'} className={`${styles.mainac} lg:w-1/2 flex flex-col justify-between rounded-xl mb-6 sm:mb-6 md:mb-6 lg:mr-5`}>
                <div className='flex flex-col justify-between p-16'>
                  <div className='w-full'>
                    <p className={`${styles.subgitac}`}>
                      <span className={styles.gitac}>GitHub Discussions</span>creates space to ask questions and have open-ended conversations.
                    </p>
                  </div>
                  <div className={`${styles.axd} flex items-center p-1`}>
                    <a href="" className='mr-4'>Jump into GitHub Discussions</a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                      <path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <div>
                  </div>
                </div>
                <div>
                  <img src="https://github.githubassets.com/assets/illu-discussions-2-b915a6dd867e.png?width=724&format=webpll" alt="" />
                </div>
              </Box>

              <Box component={'div'} className={`${styles.mainac} lg:w-1/2 flex flex-col justify-between rounded-xl mb-6 sm:mb-6 md:mb-6 lg:ml-5`}>
                <div className='flex flex-col justify-between p-16'>
                  <div className='w-full'>
                    <p className={`${styles.subgitac}`}>
                      <span className={styles.gitac}>Pull requests
                      </span>allow real-time communication and collaboration about code changes.
                    </p>
                  </div>
                  <div className={`${styles.axd} flex items-center p-1`}>
                    <a href="" className='mr-4'>Check out pull requests</a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                      <path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <div>
                  </div>
                </div>
                <div>
                  <img src="https://github.githubassets.com/assets/illu-pull-requests-2-280cc958fc05.png?width=724&format=webpll" alt="" />
                </div>
              </Box>

            </Box>



            <Box component={'div'} className={`${styles.mainac} flex flex-col lg:flex-row justify-between rounded-xl`}>
              <div className='flex flex-col justify-between p-16' style={{ zIndex: 1 }}>
                <div className='w-full'>
                  <p className={`${styles.subgitac}`}>
                    <span className={styles.gitac}>GitHub Sponsors</span>lets you support your favorite open source maintainers and projects.
                  </p>
                </div>
                <div className={`${styles.axd} flex items-center p-1`}>
                  <a href="" className='mr-4'>Invest with GitHub Sponsors</a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                    <path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path>
                  </svg>
                </div>
                <div>
                </div>
              </div>

              <div className="overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 w-100 lg:w-full md:w-1/2" style={{ transform: 'rotate(-20deg)',height:'400px' }}>
                  {sponsors.map((sponsor: Sponcard) => (
                    <div className={`${styles.percard} rounded-lg p-2 max-w-xs text-center`} key={sponsor.name}>
                      <img
                        src={sponsor.avatar}
                        width="96"
                        height="96"
                        className="mx-auto rounded-full mb-2"
                        alt={`${sponsor.name} avatar`}
                      />
                      <div className="mb-2">
                        <span className="font-bold text-lg nameper">{sponsor.name}</span>
                      </div>
                      <button
                        type="button"
                        className="text-white rounded-lg px-4 py-2 btncard"
                      >
                        <span className="flex items-center">
                          <span className="">
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              data-view-component="true"
                              className="octicon octicon-heart"
                              fill="#FFFF"
                            >
                              <path
                                d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"
                              ></path>
                            </svg>
                          </span>
                          <span>Sponsor</span>
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </Box>





          </Container>
        </section>
      </main>
    </React.Fragment>
  );
};

export default App;
