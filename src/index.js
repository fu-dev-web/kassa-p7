import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page';
import './index.css';
import Home from './components/Home';
import Apropos from './components/Apropos';
import Root from './routes/Root';
import FicheLogement from './components/FicheLogement';

const router = createBrowserRouter([
     {
          path: '/',
          element: <Root />,
          errorElement: <ErrorPage />,
          children: [
               {
                    path: '/',
                    element: <Home />,
               },
               {
                    path: '/about',
                    element: <Apropos />,
               },
               {
                    path: 'ficheLogement/:id',
                    element: <FicheLogement />,
               },
          ],
     },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <React.StrictMode>
          <RouterProvider router={router} />
          {/* <BrowserRouter>
               <Root />
          </BrowserRouter> */}
     </React.StrictMode>
);
