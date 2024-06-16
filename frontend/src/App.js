import { RouterProvider, createBrowserRouter } from 'react-router-dom'; // Import RouterProvider and createBrowserRouter for routing
import './App.css'; // Import global CSS file
import Layout from './components/Layout/Layout.jsx'; // Import Layout component
import Home from './components/Home/Home.jsx'; // Import Home component
import Login from './components/Login/Login.jsx'; // Import Login component
import SignUp from './components/SignUp/SignUp.jsx'; // Import SignUp component
import Notfound from './components/Notfound/Notfound.jsx'; // Import Notfound component
import Protected from './components/Protected/Protected.jsx'; // Import Protected component for route protection
import { AuthContextProvider } from './contexts/Auth.context.jsx'; // Import AuthContextProvider for authentication context
import { Toaster } from 'react-hot-toast'; // Import Toaster for toast notifications
import UploadImage from './components/UploadImage/UploadImage.jsx'; // Import UploadImage component
import ForgetPassword from './components/ForgetPassword/SendCode.jsx'; // Import ForgetPassword component
import ChangePassword from './components/ForgetPassword/ChangePassword.jsx'; // Import ChangePassword component
import Explanation from './components/Explanation/Explanation.jsx'; // Import Explanation component
import CheckReg from './components/checkReg/CheckReg.jsx'; // Import CheckReg component for registration check

function App() {
  // Create router configuration
  let routers = createBrowserRouter([
    {
      path: '', 
      element: <Layout/>, 
      children: [
        { index: true, element: <CheckReg><Home/></CheckReg> }, // Home route with registration check
        { path: '/home', element: <CheckReg><Home/></CheckReg> }, // Home route with registration check
        { path: '/uploadImage', element: <Protected><UploadImage/></Protected> }, // UploadImage route with protection to ensure only registered users can access
        { path: '/login', element: <CheckReg><Login/></CheckReg> }, // Login route with registration check
        { path: '/signup', element: <CheckReg><SignUp/></CheckReg> }, // SignUp route with registration check
        { path: '/forgetPassword', element: <CheckReg><ForgetPassword/></CheckReg> }, // ForgetPassword route with registration check
        { path: '/changePassword', element: <CheckReg><ChangePassword/></CheckReg> }, // ChangePassword route with registration check
        { path: '/explanation', element: <Protected who="Student"><Explanation/></Protected> }, // Explanation route with protection to ensure only students can access
        { path: '*', element: <Notfound/> } // Notfound route for handling unknown paths
      ]
    }
  ])

  return (
    <>
      <AuthContextProvider> 
        {/* Wrap RouterProvider with AuthContextProvider to provide authentication context */}
        <RouterProvider router={routers}></RouterProvider> 
      </AuthContextProvider>
      <Toaster/> {/* Add Toaster for toast notifications */}
    </>
  )
}

export default App; // Export App component as default export
