// ProductMenu.tsx
import React, { useState } from 'react';
import { Box, Divider, List, ListItem, ListItemText, Menu, MenuItem, Typography } from '@mui/material';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import LaptopOutlinedIcon from '@mui/icons-material/LaptopOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import styles from '../index.module.css';

interface MenuItem {
  icon: React.ReactElement;
  primary: string;
  secondary: string;
}

const menuItems: MenuItem[] = [
  { icon: <FiberManualRecordOutlinedIcon />, primary: 'Actions', secondary: 'Automate any workflow' },
  { icon: <ViewInArOutlinedIcon />, primary: 'Packages', secondary: 'Host and manage packages' },
  { icon: <VerifiedUserOutlinedIcon />, primary: 'Security', secondary: 'Find and fix vulnerabilities' },
  { icon: <LaptopOutlinedIcon />, primary: 'Codespaces', secondary: 'Instant dev environments' },
  { icon: <SmartToyOutlinedIcon />, primary: 'Copilot', secondary: 'Write better code with AI' },
  { icon: <CodeOutlinedIcon />, primary: 'Code review', secondary: 'Manage code changes' },
  { icon: <RadioButtonCheckedOutlinedIcon />, primary: 'Issues', secondary: 'Plan and track work' },
  { icon: <SmsOutlinedIcon />, primary: 'Discussions', secondary: 'Collaborate outside of code' },
];

interface ExploreItem {
  label: string;
}

const exploreItems: ExploreItem[] = [
  { label: 'Explore' },
  { label: 'All features' },
  { label: 'Documentation' },
  { label: 'Github Sklls' },
  { label: 'Blog' },
];




interface ProductMenuProps {
  open: boolean;
  handleMenuOpen: (isOpen: boolean) => void;
}

const ProductMenu: React.FC = () => {


  return (
    <React.Fragment>
      <Box component={'div'} sx={{ display: 'flex' }}>
        <Box component={'div'}>
          {menuItems.map((item: MenuItem) => (
            <MenuItem key={item.primary} sx={{ p: 1.1 }}>
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

        <Divider orientation="vertical" flexItem />

        <Box component={'div'} className={styles.explore}>
          {exploreItems.map((item, index) => (
            <ListItemText key={index} className={index === 0 ? '' : styles.exptxt}>
              {item.label}
            </ListItemText>
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ProductMenu;
