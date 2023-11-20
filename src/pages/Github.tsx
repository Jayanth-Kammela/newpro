import React from 'react'
import styles from '../index.module.css';
import { Box, Container, Typography, } from '@mui/material';
import { Arrow, Love, Thick } from '../svgs/svg';
import { Bulid, CustomHover, Sponcard, bulidsteps, githubActionsData, githubActionsData1, githubVcardData, githubVcardData1, githubVcardData2, githubVcardData3, githubVcardData4, githubVcardData5, sponsors } from '../utils/utils';
import CallActionBtn from '../components/github/CallActionBtn';
import ImageOrg from '../components/github/ImageOrg';
import Footer from '../components/github/Footer';
import GitHubAction from '../components/github/GitHubAction';
import ImageVCard from '../components/github/ImageVCard';
import NavBar from '../components/github/NavBar';

const Github = () => {
    return (
        <React.Fragment>
            <main>

                <section>
                    <nav>
                        <NavBar />
                    </nav>
                </section>

                <section>
                    <Container>
                        <Box sx={{ padding: '60px' }} />

                        {/* <Box className='right-bg'/> */}

                        <Box component={'div'} className={`${styles.boxst} w-full lg:w-2/4 md:w-3/4 sm:w-auto py-4`}>
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

                        <Box component={'div'} sx={{ marginBottom: '88px' }}>
                            <Typography component={'p'} className={`${styles.bulittxt}`}>
                                Let’s build from&nbsp;here
                            </Typography>
                            <Typography component={'p'} className={`${styles.bulitsubtxt}`}>
                                The world’s leading AI-powered developer platform.
                            </Typography>
                        </Box>

                        <div>
                            <CallActionBtn />
                        </div>

                        <div>
                            <ImageOrg />
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
                            <div className={`${styles.axd} flex items-center`}>
                                <Typography component={'a'} sx={{ ...CustomHover.navLink, marginRight: 2 }} >Explore GitHub Copilot </Typography>
                                <Arrow />
                            </div>
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
                            <div className={`${styles.axd} flex items-center`}><Typography component={'a'} sx={{ ...CustomHover.navLink, marginRight: 2 }} >Read the report </Typography><Arrow /></div>
                        </Box>

                        <Box sx={{ padding: 5 }} />

                        <div>
                            <GitHubAction data={githubActionsData} />
                        </div>

                        <Box component={'div'} className='flex justify-evenly flex-col lg:flex-row md:flex-col sm:flex-col my-10'>
                            <ImageVCard data={githubVcardData} />
                            <ImageVCard data={githubVcardData1} />
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


                        <Box sx={{ padding: 5 }} />

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
                            <div className={`${styles.axd} flex items-center`}><a href="" className='mr-4'>Dive into GitHub Advanced Security </a>
                                <Arrow />
                            </div>
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

                        <div>
                            <GitHubAction data={githubActionsData1} />
                        </div>

                        <Box sx={{ padding: 5 }} />

                        <Box component={'div'} className='flex justify-evenly flex-col lg:flex-row md:flex-col sm:flex-col my-10'>
                            <ImageVCard data={githubVcardData2} />
                            <ImageVCard data={githubVcardData3} />
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

                        <Box sx={{ padding: 5 }} />

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
                            <div className={`${styles.axd} flex items-center`}><Typography component={'a'} sx={{ ...CustomHover.navLink, marginRight: 2 }} >Get started with GitHub Issues </Typography><Arrow /></div>
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
                            <div className={`${styles.axd} flex items-center`}><Typography component={'a'} sx={{ ...CustomHover.navLink, marginRight: 2 }} >Read the report </Typography><Arrow /></div>
                        </Box>


                        <Box sx={{ padding: 5 }} />

                        <Box component={'div'} className='flex justify-evenly flex-col lg:flex-row md:flex-col sm:flex-col my-10'>
                            <ImageVCard data={githubVcardData4} />
                            <ImageVCard data={githubVcardData5} />
                        </Box>


                        <Box component={'div'} className={`${styles.mainac} flex flex-col lg:flex-row justify-between rounded-xl`}>
                            <div className='flex flex-col justify-between p-16' style={{ zIndex: 1 }}>
                                <div className='w-full'>
                                    <p className={`${styles.subgitac}`}>
                                        <span className={styles.gitac}>GitHub Sponsors</span>lets you support your favorite open source maintainers and projects.
                                    </p>
                                </div>
                                <div className={`${styles.axd} flex items-center p-1`}>
                                    <Typography component={'a'} sx={{ ...CustomHover.navLink, marginRight: 2.2 }} >Invest with GitHub Sponsors</Typography>
                                    <Arrow />
                                </div>
                                <div>
                                </div>
                            </div>

                            <div className="overflow-hidden">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 w-100 lg:w-full md:w-1/2" style={{ transform: 'rotate(-20deg)', height: '400px' }}>
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
                                                        <Love />
                                                    </span>
                                                    <span>Sponsor</span>
                                                </span>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Box>

                        <Box sx={{ padding: 5 }} />

                        <Box component={'div'}>
                            <CallActionBtn />
                        </Box>

                        <Box sx={{ padding: 5 }} />

                        <Box component={'div'} sx={{ marginBottom: '88px' }}>
                            <Typography component={'p'} className={`${styles.milliontxt} w-4/5 lg:w-3/4 md:w-11/12 sm:w-11/12`}>
                                Over 100 million developers call GitHub home <sup>3</sup>
                            </Typography>
                            <Typography component={'p'} className={`${styles.bulitsubtxt} w-4/5 lg:w-3/4 md:w-4/5 sm:w-4/5 `}>
                                Whether you’re scaling your startup or just learning how to code, GitHub is your home. Join the world’s largest developer platform to build the innovations that empower humanity. Let’s build from here.
                            </Typography>
                        </Box>

                    </Container>

                    <div>
                        <Footer />
                    </div>

                </section>

            </main>
        </React.Fragment>
    )
}

export default Github