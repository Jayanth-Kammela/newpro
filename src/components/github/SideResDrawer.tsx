import { Drawer, List, Accordion, Typography, AccordionDetails, Box, MenuItem, ListItem, ListItemText, Divider, styled, IconButton, Button } from '@mui/material'
import React from 'react'
import { menuItems, MenuItemX, exploreItems, menuSections, menuSections1, accordionStyle } from '../../utils/utils'
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from "../../index.module.css";
import CloseIcon from '@mui/icons-material/Close';
import SearchDrawer from './SearchDrawer';

const SideResDrawer = ({ forScreenWidth, open, forClick, drawerOpen, toggleDrawer }: any) => {

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: any, isExpanded: boolean) => {
        console.log(event);
        setExpanded(isExpanded ? panel : false);
    };


    const AccordionSummary = styled((props: AccordionSummaryProps) => (
        <MuiAccordionSummary
            expandIcon={<ArrowForwardIosIcon sx={{ fontSize: '0.9rem' }} />}
            {...props}
        />
    ))(({ theme }: any) => ({
        flexDirection: 'row',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
            marginRight: theme.spacing(1),
        },
    }));

    return (
        <React.Fragment>
            {forScreenWidth && (
                <Drawer anchor="right" open={open} onClose={forClick}>
                    <ul style={{ width: 340 }}>
                        <Box sx={{ textAlign: 'end', mt: 2, mr: 2 }}>
                            <IconButton onClick={forClick}>
                                <CloseIcon />
                            </IconButton>
                        </Box>

                        <List>
                            <Accordion sx={accordionStyle} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                    <Typography className='txtwgt'>Product</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ padding: 0 }}>
                                    <Box component={'div'}>
                                        {menuItems.map((item: MenuItemX) => (
                                            <MenuItem key={item.primary} sx={{ px: 1.1, py: 0.8 }}>
                                                <ListItem sx={{ height: '40px' }}>
                                                    {item.icon && <Box sx={{ pr: 3 }}>{item.icon}</Box>}
                                                    <ListItemText
                                                        primary={<Typography variant="body1">{item.primary}</Typography>}
                                                        secondary={<Typography variant="caption">{item.secondary}</Typography>}
                                                    />
                                                </ListItem>
                                            </MenuItem>
                                        ))}
                                    </Box>

                                    <Box component={'div'} className={styles.explore}>
                                        {exploreItems.map((item, index) => (
                                            <ListItemText key={index} className={index === 0 ? '' : styles.exptxt}>
                                                {item.label}
                                            </ListItemText>
                                        ))}
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        </List>

                        <List>
                            <Accordion sx={accordionStyle} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                    <Typography className='txtwgt'>Solution</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ padding: 0 }}>
                                    {menuSections.map((section, index) => (
                                        <div key={index} className='px-2'>
                                            <Box component={'div'} className={styles.for}>
                                                <Typography variant="body1" component={'p'} sx={{ fontWeight: 'bold' }}>
                                                    {section.title}
                                                </Typography>
                                                {section.items.map((item) => (
                                                    <Typography key={item} variant="body2" component={'p'} sx={{ cursor: 'pointer' }}>{item}</Typography>
                                                ))}
                                            </Box>
                                            {index < menuSections.length - 1 && <Divider orientation="horizontal" flexItem sx={{ padding: 0.4 }} />}
                                        </div>
                                    ))}
                                </AccordionDetails>
                            </Accordion>
                        </List>

                        <List>
                            <Accordion sx={accordionStyle} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                    <Typography className='txtwgt'>Open Source</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ padding: 0 }}>
                                    {menuSections1.map((section, index) => (
                                        <div key={section.title} className='px-2'>
                                            <Box component={'div'} className={styles.for}>
                                                <Typography variant='body1' component={'p'} sx={{ fontWeight: 'bold' }}>
                                                    {section.title}
                                                </Typography>
                                                {section.items.map((item) => (
                                                    <Typography key={item} className={styles.exptxt} variant='caption' component={'p'} sx={{ cursor: 'pointer' }}>
                                                        {item}
                                                    </Typography>
                                                ))}
                                            </Box>
                                            {index < menuSections1.length - 1 && (
                                                <Divider orientation="horizontal" flexItem sx={{ padding: 0.4 }} />
                                            )}
                                        </div>
                                    ))}
                                </AccordionDetails>
                            </Accordion>
                        </List>

                        <List>
                            <ListItemText className='mx-4 txtwgt'>Pricing</ListItemText>
                        </List>

                        <div className={styles.btnContainer}>

                            <div className="py-3">
                                <SearchDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
                            </div>
                            
                            <Button fullWidth variant="contained" className={styles.btnstyle}>
                                Sign in
                            </Button>
                        </div>
                    </ul>
                </Drawer>
            )}
        </React.Fragment>
    )
}

export default SideResDrawer