import React from 'react'
import * as ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
// import App from './App';
// import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import JobDetails from './Components/JobDetails/JobDetails';
import { HelmetProvider } from 'react-helmet-async';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: ()=> fetch('/jobs.json')
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/job/:id',
        element: <JobDetails></JobDetails>,
        loader:()=> fetch('/jobs.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
