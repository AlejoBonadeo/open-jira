import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import { useContext } from "react";
import { UiContext } from "../../context/ui";

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = () => {
  
  const { isMenuOpen, closeSideBar } = useContext(UiContext)
  

  return (
    <Drawer
        anchor="left"
        open={isMenuOpen}
        onClose={closeSideBar}
    >
        <Box sx={{width: 250}}>

            <Box sx={{ padding: '5px 10px'}}>
                <Typography variant="h4">Menu</Typography>
            </Box>
            <List>
                {
                    menuItems.map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 ? <MailOutlineIcon/> : <InboxOutlinedIcon/>}
                            </ListItemIcon>    
                            <ListItemText primary={text} />
                        </ListItem>
                    ))
                }
            </List>
            <Divider/>
            <List>
                {
                    menuItems.map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 ? <MailOutlineIcon/> : <InboxOutlinedIcon/>}
                            </ListItemIcon>    
                            <ListItemText primary={text} />
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    </Drawer>
  )
}
