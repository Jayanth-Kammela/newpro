import { Button, Drawer, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { DrawerProps } from '../../utils/utils';



const SearchDrawer: React.FC<DrawerProps> = ({ toggleDrawer, drawerOpen }) => {
    return (
        <React.Fragment>
            <div>
                <Button fullWidth
                    startIcon={<SearchIcon />}
                    endIcon={'/'}
                    variant="contained"
                    sx={{
                        height: '2.2em',
                        textTransform: 'none',
                        color: '#FFFFFFBF',
                        background: '#27374D',
                        ':hover': {
                            background: '#27374D',
                        },
                    }}
                    onClick={toggleDrawer}
                >
                    Search or jump to..
                </Button>
                <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer}>

                    <TextField type='search'
                        InputProps={{
                            startAdornment: (
                                <SearchIcon sx={{ color: 'black', marginRight: 1 }} />
                            ),
                        }}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{ marginBottom: 2, px: 2 }}
                    />

                </Drawer>
            </div>
        </React.Fragment>
    )
}

export default SearchDrawer