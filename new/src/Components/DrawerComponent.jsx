import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
const PAGES=["Products","Services","About us","Contact us","Login","SignUp"];
const DrawerComponent = () => { 
const [openDrawer,setOpenDrawer]= useState(false);

  return (
    <React.Fragment>
        <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
            <List>
                {
                    PAGES.map((page,index)=>(
                
                <ListItemButton onClick={()=>setOpenDrawer(false)} key={index}>
                    <ListItemIcon>
                         <ListItemText>{page}</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                ))}
            </List>
        </Drawer>
<IconButton sx={{color:'white', marginLeft:"auto"}} 
onClick={()=>setOpenDrawer(!openDrawer)}>

<MenuIcon/>
</IconButton>
    </React.Fragment>
  )
}

export default DrawerComponent