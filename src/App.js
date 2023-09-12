import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import Navbar from './layout/navbar/Navbar';
import Main from './layout/main/Main';
import Footer from './layout/footer/Footer';
import Root from './root/Root';
import CourseDetails from './internal-pages/course-details/CourseDetails';
import StudentSupport from './internal-pages/student-support/StudentSupport';
import ErrorPage from './error-page/ErrorPage';
import CareerGuidance from './internal-pages/career-guidance/CareerGuidance';

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/treemiti',
      element: <React.Fragment>
        <Navbar/>
        <Main/>
        <Footer/>
      </React.Fragment>,
      errorElement: <ErrorPage/>,
      children:[
        {
          path: '/treemiti',
          element: <Root/>
        },
        {
          path: '/treemiti/course/:id',
          element: <CourseDetails/>
        },
        {
          path: '/treemiti/:id',
          element: <StudentSupport/>
        },
        {
          path: '/treemiti/career-guidance',
          element: <CareerGuidance/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
