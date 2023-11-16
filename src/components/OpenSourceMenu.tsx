import { Box, Divider, Menu, Typography } from '@mui/material';
import React from 'react';
import styles from '../index.module.css';

interface MenuItem {
  title: string;
  items: string[];
}

const OpenSourceMenu: React.FC = () => {
  const menuSections: MenuItem[] = [
    {
      title: 'GitHub Sponsors',
      items: ['Fund open source developers'],
    },
    {
      title: 'The ReadME Project',
      items: ['GitHub community articles'],
    },
    {
      title: 'Repositories',
      items: ['Topics', 'Trending', 'Collections'],
    },
  ];


  return (
    <React.Fragment>
        {menuSections.map((section, index) => (
          <div key={section.title}>
            <Box component={'div'} className={styles.for}>
              <Typography variant='body1' component={'p'} sx={{ fontWeight: 'bold' }}>
                {section.title}
              </Typography>
              {section.items.map((item) => (
                <Typography key={item} className={styles.exptxt} variant='caption' component={'p'} sx={{cursor:'pointer'}}>
                  {item}
                </Typography>
              ))}
            </Box>
            {index < menuSections.length - 1 && (
              <Divider orientation="horizontal" flexItem sx={{ padding: 0.4 }} />
            )}
          </div>
        ))}
    </React.Fragment>
  );
};

export default OpenSourceMenu;
