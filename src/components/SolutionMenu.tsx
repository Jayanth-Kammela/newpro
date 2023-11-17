import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import styles from '../index.module.css';
import { menuSections } from '../utils/utils';

const SolutionMenu: React.FC = () => {

  return (
    <React.Fragment>
      {menuSections.map((section, index) => (
        <div key={index}>
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
    </React.Fragment>
  );
};

export default SolutionMenu;
