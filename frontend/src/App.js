import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Notfound from './components/Notfound/Notfound.jsx';
import Protected from './components/Protected/Protected.jsx';
import { AuthContextProvider } from './contexts/Auth.context.jsx';
import { Toaster } from 'react-hot-toast';
import UploadImage from './components/UploadImage/UploadImage.jsx';
import ForgetPassword from './components/ForgetPassword/SendCode.jsx';
import ChangePassword from './components/ForgetPassword/ChangePassword.jsx';
import Explanation from './components/Explanation/Explanation.jsx';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
function App() {
  let checkLogin=JSON.parse(localStorage.getItem('user'));
 let getRole="";
  if(checkLogin){
   getRole = jwtDecode(checkLogin.token,"login123").role;}
  let routers=createBrowserRouter([
    {path:'',element:<Layout/>,children:[
   {index:true,element:checkLogin?<UploadImage/>:<Home/>},
   {path:'/home',element:checkLogin?<UploadImage/>:<Home/>},
   {path:'/uploadImage',element:<Protected><UploadImage/></Protected>},//to make sure that nobody can access this page except registered user
  {path:'/test',element:<UploadImage/>},
   {path:'/login',element:checkLogin?<UploadImage/>:<Login/>},
   {path:'/signup',element:checkLogin?<UploadImage/>:<SignUp/>},
   {path:'/forgetPassword',element:checkLogin?<UploadImage/>:<ForgetPassword/>},
   {path:'/changePassword',element:checkLogin?<UploadImage/>:<ChangePassword/>},
   {path:'/explanation',element:getRole==="Student"?<Explanation/>:<Protected><UploadImage/></Protected>},//only students
   {path:'*',element:<Notfound/>}
    ]}
  ])
useEffect(()=>{},{checkLogin})
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
