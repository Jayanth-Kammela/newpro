import { Box, Divider, List, ListItem, ListItemText, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import styles from '../index.module.css';

interface MenuItem {
  title: string;
  items: string[];
}

const SolutionMenu: React.FC = () => {
  const menuSections: MenuItem[] = [
    {
      title: 'For',
      items: ['Enterprise', 'Teams', 'Starts', 'Education'],
    },
    {
      title: 'By Solution',
      items: ['CI/CD & Automation', 'DevOps', 'DevSecOps'],
    },
    {
      title: 'Resources',
      items: ['Learning Pathways', 'White papers, Ebooks, Webinars', 'Customer Stories', 'Partners'],
    },
  ];


  return (
    <React.Fragment>
      {menuSections.map((section, index) => (
        <div key={index}>
          <Box component={'div'} className={styles.for}>
            <Typography variant="body1" component={'p'} sx={{ fontWeight: 'bold' }}>
              {section.title}
            </Typography>
            {section.items.map((item) => (
              <Typography key={item} variant="body2" component={'p'} sx={{cursor:'pointer'}}>{item}</Typography>
            ))}
          </Box>
          {index < menuSections.length - 1 && <Divider orientation="horizontal" flexItem sx={{ padding: 0.4 }} />}
        </div>
      ))}
    </React.Fragment>
  );
};

export default SolutionMenu;
