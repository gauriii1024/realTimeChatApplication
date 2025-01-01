import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp.jsx';
import HomePage from './components/HomePage.jsx';
import Login from './components/Login.jsx';

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
  return (
    <div className="App">
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
