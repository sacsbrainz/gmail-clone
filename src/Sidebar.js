import React from 'react';
import './Sidebar.css';
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SendIcon from '@mui/icons-material/Send';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LabelIcon from '@mui/icons-material/Label';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import SidebarOption from './SidebarOption';
import DuoIcon from '@mui/icons-material/Duo';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className='sidebar'>
        <Button startIcon={<AddIcon fontSize='large'/>} className='sidebar_compose' onClick={() => dispatch(openSendMessage())}>Compose</Button>
        <SidebarOption Icon={InboxIcon} title='Inbox' number={17} selected={true}/>
        <SidebarOption Icon={StarIcon} title='Starred' number={6}/>
        <SidebarOption Icon={AccessTimeFilledIcon} title='Snoozed' number={3}/>
        <SidebarOption Icon={SendIcon} title='Sent' number={9}/>
        <SidebarOption Icon={InsertDriveFileIcon} title='Draft' number={4}/>
        <SidebarOption Icon={LabelIcon} title='[Imap]/Sent' number={1}/>
        <SidebarOption Icon={LabelIcon} title='[Imap]/Trash' number={1}/>
        <SidebarOption Icon={LabelIcon} title='Junk' number={3}/>
        <SidebarOption Icon={ExpandMoreIcon} title='More' number={3}/>

        <div className="sidebar_meet">
          <p>Meet</p>

          <SidebarOption Icon={VideocamIcon} title='New meeting'/>
          <SidebarOption Icon={KeyboardIcon} title='Join a meeting' />
        </div>


        <div className="sidebar_footer">
          <div className="sidebar_footerIcons">
            <IconButton>
              <PersonIcon />
            </IconButton>
            <IconButton>
              <DuoIcon />
            </IconButton>
          </div>
        </div>
    </div>
  )
}

export default Sidebar;