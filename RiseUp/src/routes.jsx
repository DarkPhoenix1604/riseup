import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/user/Home';
import CoursesPage from './components/user/coursespage';
import MockInterview from './components/user/mockInterview';
import SelfAssessment from './components/user/SelfAssessment';
import Login from './components/auth/login';
import Signup from './components/auth/signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/courses',
        element: <CoursesPage />,
      },
      {
        path: '/mock-interview',
        element: <MockInterview />,
      },
      {
        path: '/self-assessment',
        element: <SelfAssessment />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
]);

export default router;