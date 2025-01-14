import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp.jsx';
import HomePage from './components/HomePage.jsx';
import Login from './components/Login.jsx';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import { setSocket } from './redux/socketSlice.js';
import { setOnlineUSers } from './redux/userSlice.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/register",
    element: <SignUp/>
  },
  {
    path: "/login",
    element: <Login/>
  },
])

function App() {
  const dispatch = useDispatch()
  const {socket} = useSelector(store => store.socket)
  const {authUser} = useSelector(store => store.user)
  useEffect (() => {
    if (authUser) {
      const socket = io('http://localhost:8080', {
        query: {
          userId: authUser._id,
        }
      });
      dispatch(setSocket(socket))

      socket.on('getOnlineUsers', (onlineUsers) => {
        dispatch(setOnlineUSers)
      });
      return () => socket.close();
    }else {
      if (socket) {
        socket.close()
        setSocket(setSocket(null))
      }
    }
  }, [authUser])
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
