// ProductMenu.tsx
import React from 'react';
import { Box, Divider, ListItem, ListItemText, MenuItem, Typography } from '@mui/material';
import styles from '../index.module.css';
import { MenuItemX, exploreItems, menuItems } from '../utils/utils';

const ProductMenu: React.FC = () => {

  return (
    <React.Fragment>
      <Box component={'div'} sx={{ display: 'flex' }}>
        <Box component={'div'}>
          {menuItems.map((item: MenuItemX) => (
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
