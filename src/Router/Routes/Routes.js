import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import Update from "../../Pages/MyReview/Update";
import Register from "../../Pages/Register/Register";
import ServicesDetails from "../../Pages/Services/ServicesDetails/ServicesDetails";
import NotFound from "../../Shared/NotFound/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Services from './../../Pages/Services/Services/Services';


const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:([
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('https://lawyer-services-server-project.vercel.app/services')
            },  
            {
                path:'/services',
                element:<Services></Services>,
                loader:() => fetch('https://lawyer-services-server-project.vercel.app/services/all')
            },            
            {
                path:'/services/:id',
                element:<ServicesDetails></ServicesDetails>,
                loader:({params}) => fetch(`https://lawyer-services-server-project.vercel.app/services/${params.id}`)
            },            
            {
                path:'/myreview',
                element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
            },  
            {
                path:'/myreview/:id',
                element:<Update></Update>,
                loader:({params}) => fetch(`https://lawyer-services-server-project.vercel.app/myreview/${params.id}`)
                
            },
            {
                path:'addservices',
                element:<PrivateRoute><AddServices></AddServices></PrivateRoute>,
                
            },                
            {
                path:'/blog',
                element:<Blog></Blog>
            },  

            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'*',
                element:<NotFound></NotFound>
            }
        ])
    }
])

export default routes;