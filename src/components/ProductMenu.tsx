import React from 'react';
import { Box, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import styles from '../index.module.css';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import LaptopOutlinedIcon from '@mui/icons-material/LaptopOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

const menuItems = [
  { icon: <FiberManualRecordOutlinedIcon />, primary: 'Actions', secondary: 'Automate any workflow' },
  { icon: <ViewInArOutlinedIcon />, primary: 'Packages', secondary: 'Host and manage packages' },
  { icon: <VerifiedUserOutlinedIcon />, primary: 'Security', secondary: 'Find and fix vulnerabilities' },
  { icon: <LaptopOutlinedIcon />, primary: 'Codespaces', secondary: 'Instant dev environments' },
  { icon: <SmartToyOutlinedIcon />, primary: 'Copilot', secondary: 'Write better code with AI' },
  { icon: <CodeOutlinedIcon />, primary: 'Code review', secondary: 'Manage code changes' },
  { icon: <RadioButtonCheckedOutlinedIcon />, primary: 'Issues', secondary: 'Plan and track work' },
  { icon: <SmsOutlinedIcon />, primary: 'Discussions', secondary: 'Collaborate outside of code' },
];

const ProductMenu = () => {
  return (
    <React.Fragment>
      <Box component={'div'} className={styles.productmenuhead}>
        <Box component={'div'} className={styles.dflex}>
          <Box component={'div'}>
            <List>
              {menuItems.map((item, index) => (
                <ListItem key={index}>
                  {item.icon && <Box className={styles.iconmargin}>{item.icon}</Box>}
                  <div>
                    <ListItemText primary={<Typography variant='body1'>{item.primary}</Typography>} secondary={<Typography variant='caption'>{item.secondary}</Typography>} />
                  </div>
                </ListItem>
              ))}
            </List>
          </Box>

          <Divider orientation="vertical" flexItem sx={{ padding: 2 }} />

          <Box component={'div'} className={styles.explore}>
            <Typography variant='h6' component={'p'}>
              Explore
            </Typography>
            <Typography className={styles.exptxt} variant='body2' component={'p'}>
              All features
            </Typography>
            <Typography className={styles.exptxt} variant='body2' component={'p'}>
              Documentation
            </Typography>
            <Typography className={styles.exptxt} variant='body2' component={'p'}>
              Github Sklls
            </Typography>
            <Typography className={styles.exptxt} variant='body2' component={'p'}>
              Blog
            </Typography>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ProductMenu;
