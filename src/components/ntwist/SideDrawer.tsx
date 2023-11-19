import { Drawer, Box, IconButton, List, Accordion, Typography, AccordionDetails, ListItemText, styled } from '@mui/material'
import React from 'react'
import { accordionStyle, NtwistItems } from '../../utils/utils';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import styles from "../../index.module.css";

const SideDrawer = ({ forScreenWidth, open, forClick }: any) => {


    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
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

    const Items: string[] = ['AI Software', 'Blog', 'Contact Us',]

    return (
        <React.Fragment>
            {forScreenWidth && (
                <Drawer anchor="top" open={open} onClose={forClick}>
                    <ul style={{ height: 600 }}>
                        <Box sx={{ textAlign: 'end', mt: 2, mr: 2 }}>
                            <IconButton onClick={forClick}>
                                <CloseIcon />
                            </IconButton>
                        </Box>

                        <List>
                            <Typography sx={{ px: 2.1, py: 0.8, fontSize: '24px' }}>
                                Home
                            </Typography>
                        </List>

                        <List>
                            <Accordion sx={accordionStyle} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                    <Typography sx={{ fontSize: '24px' }}>Industries </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ padding: 0 }}>
                                    <Box component={'div'} className={styles.explore}>
                                        {NtwistItems.map((item, index) => (
                                            <ListItemText key={index} className={index === 0 ? '' : styles.exptxt}>
                                                {item.label}
                                            </ListItemText>
                                        ))}
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        </List>
                        <List>
                        {Items.map((item:string)=>{
                                return<Typography key={item} sx={{ px: 2.1, py: 0.8,fontSize:'24px' }}>
                                    {item}
                                </Typography>
                            })}
                        </List>
                    </ul>
                </Drawer>)}
        </React.Fragment>
    )
}

export default SideDrawer
