import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import './Mail.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ErrorIcon from '@mui/icons-material/Error';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import LabelIcon from '@mui/icons-material/Label';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PrintIcon from '@mui/icons-material/Print';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ReplyIcon from '@mui/icons-material/Reply';
import { selectOpenMail } from './features/mailSlice';
import { useSelector } from 'react-redux';
import NoEncryptionIcon from '@mui/icons-material/NoEncryption';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Mail() {
  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail)
  return (
    <div className='mail'>
      <div className="mail_tools">
        <div className="mail_toolsLeft">
          <IconButton onClick={() => navigate('/') }>
            <ArrowBackIcon fontSize='small'/>
          </IconButton>
          <IconButton>
            <ArchiveIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <MarkunreadIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <DriveFileMoveIcon />
          </IconButton>
          <IconButton>
            <LabelIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail_toolsRight">
          <IconButton>
            <ArrowBackIosIcon fontSize='small'/>
          </IconButton>
          <IconButton>
            <ArrowForwardIosIcon fontSize='small'/>
          </IconButton>
        </div>
      </div>
      <div className="mail_body">
        <div className="mail_bodyHeader">
          <div className="mail_bodyHeadertools">
            <div className="mail_bodyHeadertoolsLeft">
              <h3>{selectedMail?.subject}</h3>
            </div>
            <div className="mail_bodyHeadertoolsRight">
              <IconButton>
                <PrintIcon fontSize='small'/>
              </IconButton>
              <IconButton>
                <OpenInNewIcon fontSize='small'/>
              </IconButton>
            </div>
          </div>
          <div className="mail_bodyHeaderHead">
            <div className="bodyHeaderheadLeft_Left">
              <Avatar src={selectedMail?.title[0]} sx={{ width: 38, height: 38 }}>
                {selectedMail?.title[0]}
              </Avatar>
              <div className="mail_bodyHeaderHeadLeft">
                <p>{selectedMail?.title}</p>
              </div>
            </div>
            
            <div className="mail_bodyHeaderHeadRight">
              <p className='mail_time'>{selectedMail?.time}</p>
              <IconButton>
                <StarOutlineIcon fontSize='small'/>
              </IconButton>
              <IconButton>
                <ReplyIcon fontSize='small'/>
              </IconButton>
              <IconButton>
                <MoreVertIcon fontSize='small'/>
              </IconButton>
            </div>
          </div>
          <div className="mail_bodyHeaderPadlock">
            <NoEncryptionIcon color='warning' fontSize='1px'/>
            <p>to me <IconButton><ArrowDropDownIcon /></IconButton></p>
          </div>
        </div>
        <div className="mail_message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Mail;