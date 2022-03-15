import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectsendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const dispatch = useDispatch();
  const sendMessageIsOpen = useSelector(selectsendMessageIsOpen)
  const user = useSelector(selectUser)

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch (login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, [])
  

  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ): (
        <div className="app">
          <Header />
          <div className="app_body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<EmailList />}/>
              <Route path="/mail" element={<Mail />}/>
            </Routes>
          </div>
          {sendMessageIsOpen &&  <SendMail />}
        </div>
      )}
      
    </BrowserRouter>
  );
}

export default App;
