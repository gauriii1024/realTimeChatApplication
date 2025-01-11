import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp.jsx';
import HomePage from './components/HomePage.jsx';
import Login from './components/Login.jsx';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';

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
  const [socket, setSocket] = useState(null)
  const {authUser} = useSelector(store => store.user)
  useEffect (() => {
    if (authUser) {
      const socket = io('http://localhost:8080', {
        path: '/socket.io',
      }) ;
      setSocket(socket)
    }
  }, [authUser])
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
