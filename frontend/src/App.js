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
import CheckReg from './components/checkReg/CheckReg.jsx';
function App() {
  let routers=createBrowserRouter([
    {path:'',element:<Layout/>,children:[
   {index:true,element:<CheckReg> <Home/></CheckReg>},
   {path:'/home',element:<CheckReg><Home/></CheckReg>},
   {path:'/uploadImage',element:<Protected><UploadImage/></Protected>},//to make sure that nobody can access this page except registered user
   {path:'/login',element: <CheckReg><Login/></CheckReg>},
   {path:'/signup',element: <CheckReg> <SignUp/></CheckReg>},
   {path:'/forgetPassword',element:<CheckReg><ForgetPassword/></CheckReg> },
   {path:'/changePassword',element:<CheckReg><ChangePassword/></CheckReg> },
   {path:'/explanation',element:<Protected who="Student"><Explanation/></Protected>},//only students
   {path:'*',element:<Notfound/>}
    ]}
  ])
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
