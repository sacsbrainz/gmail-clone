import { Checkbox, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './EmailList.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InboxIcon from '@mui/icons-material/Inbox';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Section from './Section';
import EmailRow from './EmailRow';
import {db} from './firebase';

function EmailList() {
    const [emails, setEmails] = useState([])
    useEffect(() =>{
        db.collection('emails').orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
            setEmails(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data:doc.data(),
                }
            ))
        ));
    },[]);
  return (
    <div className='emailList'>
        <div className="emailList_settings">
            <div className="emailList_settingsLeft">
                <Checkbox size='small' />
                <IconButton>
                    <ArrowDropDownIcon fontSize='small' />
                </IconButton>
                <IconButton>
                    <RefreshIcon fontSize='small' />
                </IconButton>
                <IconButton>
                    <MoreVertIcon fontSize='small' />
                </IconButton>
            </div>
            <div className="emailList_settingsRight">
                <IconButton>
                    <ArrowBackIosIcon fontSize='small' />
                </IconButton>
                <IconButton>
                    <ArrowForwardIosIcon fontSize='small' />
                </IconButton>
            </div>
        </div>
        <div className="emailList_sections">
            <Section Icon={InboxIcon} title={'Primary'} color='red' selected />
            <Section Icon={SupervisorAccountIcon} title={'Social'} color='#1A73E8'  />
            <Section Icon={LocalOfferIcon} title={'Promotions'} color='green'  />
        </div>
        <div className="emailList_list">
            {emails.map(({id, data:{to, subject,message,timestamp}}) => (
                <EmailRow 
                    id={id}
                    key={id}
                    title={to}
                    subject={subject}
                    description={message}
                    time={new Date(timestamp?.seconds * 1000).toUTCString()}
                />))}
        </div>
    </div>
  )
}

export default EmailList;