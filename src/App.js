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
import Feedback from './internal-pages/feedback/Feedback';
import StudentFeedback from './internal-pages/student-feedback/StudentFeedback';
import EmployeFeedback from './internal-pages/employe-feedback/EmployeFeedback';

function App() {

  const router = createBrowserRouter([
    {
      path: '/treemiti',
      element: <React.Fragment>
        <Navbar />
        <Main />
        <Footer />
      </React.Fragment>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/treemiti',
          element: <Root />
        },
        {
          path: '/treemiti/course/:id/:id',
          element: <CourseDetails />
        },
        {
          path: '/treemiti/about/:id/:id',
          element: <StudentSupport />
        },
        {
          path: '/treemiti/career-guidance',
          element: <CareerGuidance />
        },
        {
          path: '/treemiti/feedback',
          element: <Feedback/>,
          children: [
            {
              path: '/treemiti/feedback/student-feedback',
              element: <StudentFeedback/>
            },
            {
              path: '/treemiti/feedback/employe-feedback',
              element: <EmployeFeedback/>
            }
          ]
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
