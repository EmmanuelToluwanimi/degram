import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Following from './pages/Following';
import Followers from './pages/Followers';
import Chat from './pages/Chats';
import Messanger from './pages/Messanger';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />}/>
      <Route path="register" element={<Register />}/>
      <Route path="profile/:id" element={<Profile />}/>
      <Route path="profile/:id?tab=following" element={<Following />}/>
      <Route path="profile/:id?tab=followers" element={<Followers />}/>
      <Route path="conversations" element={<Chat />}/>
      <Route path="chat/:id" element={<Messanger />}/>

    </Routes>
  </BrowserRouter>
  )
}

export default App
