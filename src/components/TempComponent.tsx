import { List, ListItem } from '@mui/material'
import React,{useState} from 'react'

const CustomStyles = {
    navLink: {
      mx: 2,
      cursor: 'pointer',
      position: 'relative',
      fontSize: '14px',
      fontFamily: 'Open Sans',
      fontWeight: 'bold',
      color: '#FFFF',
    },
  };
  
  interface TemProps{
    title:string;
    Component?:any
  }
const TempComponent:React.FC<TemProps> = ({title,Component}) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleProductMenuOpen = (isOpen: boolean) => {
        setOpen(isOpen);
      };
      
  return (
    <div>
      <Component open={open} handleMenuOpen={handleProductMenuOpen} />
      <List sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <ListItem
      sx={{ ...CustomStyles.navLink }}
      onMouseEnter={() => handleProductMenuOpen(true)}
     
    >
     <div  onMouseLeave={() => {handleProductMenuOpen(false)}}> {title}</div> 
    </ListItem>
  </List>
    </div>
  )
}

export default TempComponent