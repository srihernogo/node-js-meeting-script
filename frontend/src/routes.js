import { Navigate } from 'react-router-dom';
import Layouts from './layouts';
import Views from './views';

const routes = [
  {
    path: '/',
    element: <Layouts.Meeting />,
    children: [
      { path: '/', element: <Navigate to="/join" /> },
      { path: 'meeting', element: <Views.Meeting /> },
      { path: 'join', element: <Views.Join /> },
      { path: '*', element: <Navigate to="/join" /> },
    ],
  },
];

export default routes;
