import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import LoginForm from "./Components/LoginForm"
import Register from "./Components/Register"
import ContactUs from "./Components/ContactUs"
import Dashboard from "./Components/Dashboard"
import Gallery from "./Components/Gallery"
import Cart from "./Components/Cart"
import Error_page from "./Components/Error_page"
import Faq from './Components/Faq';
import AllCourses from './Components/AllCourses';
import AllCoursesGrid from './Components/AllCoursesGrid';
import SpecificCourse from './Components/SpecificCourse';
import Instructor from './Components/Instructor';

import CoursesCart from './CoursesCart';
import { Context } from './Components/context/Context';
import StripeContainer from './Components/StripeContainer';
import InstructorSpecific from './Components/InstructorSpecific';
import { CourseVideos } from './Components/CourseVideos';
import Header from './Components/AdminDashboard/Header';
import Profile from './Components/AdminDashboard/Profile';
import Users from './Components/AdminDashboard/Users';
import Analytics from './Components/AdminDashboard/Analytics';
import Settings from './Components/AdminDashboard/Settings';
import DarkMode_1 from './Components/AdminDashboard/DarkMode_1';
import ResetPassword from './Components/ResetPassword';
import UsersDetail from './Components/AdminDashboard/UsersDetail';
import Events from './Components/Events';
import { EventSpecific } from './Components/EventSpecific';

import { EventsCard } from './Components/EventsCard';
const isLoggedIn = window.localStorage.getItem("loggedIn");
const router = createBrowserRouter([
 
  {
    path: "/",
    element: <App/>
  },

  
  
  {
    path: "about",
    element: <AboutUs/>,
    
    
    
  },

  {
    path: "analytic",
    element: <Analytics/>,
    
    
  },

  {
    path: "darkmode",
    element: <DarkMode_1/>,
    
    
  },

  {
    path: "resetpassword",
    element: <ResetPassword/>,
    
    
  },

  {
    path: "userdetails",
    element: <UsersDetail/>,
    
    
  },

  {
    path: "contact",
    element: <ContactUs/>,
    
    
  },


  {
    path: "dashboard",
    element: <Dashboard/>,
    
    
  },
  {
    path: "cart",
    element: <Cart/>,
    
    
  },


  {
    path: "coursecart",
    element: <CoursesCart/>, 
    
  },

  {
    path: "setting",
    element: <Settings/>, 
    
  },
  

  {
    path: "coursevideo",
    element: <CourseVideos/>,
    
    
  },

  // {
  //   path: "/specificCourse/:id",
  //   element: <SpecificCourse/>,
    
    
  // },



  {
    path: "/specificCourse/:productId",
    element: <SpecificCourse/>,
    
  },
 


  {
    path: "/courses",
    element: <AllCourses/>,
 
  },
  {
    path: "/specificInstructor/:InstructorId",
    element: <InstructorSpecific/>,
    
  },

  {
    path: "/eventspecific/:EventId",
    element:<EventSpecific/>
  },

  
  
  {
    path: "/specificInstructor/:InstructorId",
    element: <InstructorSpecific/>,
    
  },


  {
    path: "*",
    element: <Error_page/>,
    
    
  },

  {
    path: "admin",
    element: <Header/>,
    
    
  },

  

  {
    path: "faq",
    element: <Faq/>,
    
    
  },
  {
    path: "gallery",
    element: <Gallery/>,
    
    
  },
  {
    path: "instructor",
    element: <Instructor/>,
    
    
  },

  {
    path: "stripe",
    element: <StripeContainer/>,
    
    
  },

  {
    path: "users",
    element: <Users/>,
    children:[
      {
        isLoggedIn:true ? <Users/> : <LoginForm/>
      }
    ]
    
    
  },


  {
    path: "register",
    element: <Register/>,
    
    
  },

  {
    path: "grid",
    element: <AllCoursesGrid/>,
    
    
  },

  {
    path: "profile",
    element: <Profile/>,
    
    
  },

  {
    path: "login",
    element: <LoginForm/>,
    
    
  },

  {
    path: "/home",
    element: <App/>,
    
  },
  {
    path: "events",
    element: <Events/>,
  },
  {
    path: "eventscard",
    element:<EventsCard/>
  },
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
  <React.StrictMode>
 <Context>
 <RouterProvider router={router} /> 

 </Context>
  
  
  </React.StrictMode>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
