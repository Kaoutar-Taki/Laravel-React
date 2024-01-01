import {createBrowserRouter} from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Users from '../pages/Users';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Layout from '../layouts/Layout';

export const router = createBrowserRouter([
    {
        element:
        <Layout />,
        children:[
            {
                path:'/',
                element:<Home />,
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/signup',
                element:<SignUp />,
            },
            {
                path:'/users',
                element:<Users />,
            },
            {
                path:'*',
                element: <NotFound />,
            }
        ]
    }
])
