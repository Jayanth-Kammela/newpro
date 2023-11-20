import React from 'react'
import { CustomHover1, ntwistMenu } from '../../utils/utils'
import { Typography } from '@mui/material'

const IndusrtyMenu = () => {
  return (
    <React.Fragment>
        {
            ntwistMenu.map((item:string)=>{
                return(<Typography component={'a'} sx={{...CustomHover1.navLink}}>{item}</Typography>)
            })
        }
    </React.Fragment>
  )
}

export default IndusrtyMenu