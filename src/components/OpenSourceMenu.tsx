import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import styles from '../index.module.css';
import { menuSections1 } from '../utils/utils';

const OpenSourceMenu: React.FC = () => {


  return (
    <React.Fragment>
      {menuSections1.map((section, index) => (
        <div key={section.title}>
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
    </React.Fragment>
  );
};

export default OpenSourceMenu;
