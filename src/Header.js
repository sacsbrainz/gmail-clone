import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar, IconButton } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
        
    }
  return (
    <div className='header'>
        <div className="header_left">
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" srcSet='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png 2x' alt="" />
            
        </div>
        <div className="header_middle">
            <SearchIcon />
            <input placeholder='Search mail' type="text" />
            <ArrowDropDownIcon className='header_inputCaret'/>
        </div>
        <div className="header_right">
            <IconButton>
                <HelpOutlineIcon/>
            </IconButton>
            <IconButton>
                <SettingsIcon/>
            </IconButton>
            <IconButton>
                <AppsIcon />
            </IconButton>
            <Avatar onClick={signOut} src={user?.photoUrl} sx={{ width: 30, height: 30 }}>
                {user?.displayName[0]}
            </Avatar>
        </div>
    
    </div>
  )
}

export default Header