import React from 'react';
import './SendMail.css';
import MinimizeIcon from '@mui/icons-material/Minimize';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddToDriveOutlinedIcon from '@mui/icons-material/AddToDriveOutlined';
import ImageIcon from '@mui/icons-material/Image';
import LockClockIcon from '@mui/icons-material/LockClock';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from '@mui/material';
import { useForm } from 'react-hook-form';
import { closeSendMessage } from './features/mailSlice';
import { useDispatch } from 'react-redux';
import {db} from './firebase';
import firebase from 'firebase/compat/app';

function SendMail() {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = (formData) => {
        console.log(formData)
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        dispatch(closeSendMessage());
    }
    const dispatch = useDispatch();
  return (
    <div className='sendMail'>
        <div className="sendMail_header">
            <div className="sendMail_headerLeft">
                <h3>New Message</h3>
            </div>
            <div className="sendMail_headerRight">
                <IconButton >
                    <MinimizeIcon className='himg' fontSize='small'/>
                </IconButton>
                <IconButton>
                    <OpenInFullIcon className='himg' fontSize='small'/>
                </IconButton>
                <IconButton>
                    <CloseIcon className='sendMail_close himg' fontSize='small' onClick={() => dispatch(closeSendMessage())}/>
                </IconButton>
            </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name='to' placeholder='To' type="email" {...register("to", {required: true})}/>{errors.to && <p className='sendMail_error'>To Is Required!!</p>}
            <input name='subject' placeholder='Subject' type="text" {...register("subject", {required: true})}/> {errors.subject && <p className='sendMail_error'>A Subject Is Required!!</p>}
            <input name='message' placeholder='Message.....' type="text" className='sendMail_massage' {...register("message", {required: true})}/> {errors.message && <p className='sendMail_error'>A Message Is Required!!</p>}
            <div className="sendMail_bottom">
                <div className="sendMail_optionsLeft">
                    <div className="sendMail_options">
                        <Button
                        className='sendMail_send'
                        variant='contained'
                        color='primary'
                        type='submit'
                        >
                            Send<ArrowDropDownOutlinedIcon fontSize='small' />
                        </Button>
                        <FormatColorTextOutlinedIcon fontSize='5px'/>
                       
                        <AttachFileOutlinedIcon fontSize='5px'/>
                        <LinkOutlinedIcon fontSize='5px'/>
                        <EmojiEmotionsOutlinedIcon fontSize='5px'/>
                        <AddToDriveOutlinedIcon fontSize='5px'/>
                        <ImageIcon fontSize='5px'/>
                        <LockClockIcon fontSize='5px'/>
                        <BorderColorOutlinedIcon fontSize='5px'/>

                    </div>
                </div>
                <div className="sendMail_optionsRight">

                    <MoreVertOutlinedIcon fontSize='5px'/> 
                    <DeleteIcon fontSize='5px'/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SendMail;