import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Notfound from './components/Notfound/Notfound.jsx';
import { useEffect } from 'react';
import Protected from './components/Protected/Protected.jsx';
import { AuthContextProvider } from './contexts/Auth.context.jsx';
import { Toaster } from 'react-hot-toast';
import UploadImage from './components/UploadImage/UploadImage.jsx';
function App() {
  let checkLogin=localStorage.getItem('user');
  let routers=createBrowserRouter([
    {path:'',element:<Layout/>,children:[
   {index:true,element:checkLogin?<UploadImage/>:<Home/>},
   {path:'/home',element:checkLogin?<UploadImage/>:<Home/>},
   {path:'/uploadImage',element:<Protected><UploadImage/></Protected>},//to make sure that nobody can access this page except registered user
   {path:'/login',element:checkLogin?<UploadImage/>:<Login/>},
   {path:'/signup',element:checkLogin?<UploadImage/>:<SignUp/>},
   {path:'*',element:<Notfound/>}
    ]}
  ])
  useEffect(()=>{
  },[localStorage])
  return (
    <>
    <AuthContextProvider>
    <RouterProvider router={routers}></RouterProvider> 
    </AuthContextProvider>
    <Toaster/>
    </>
  )
}

export default App;
