import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page';
import './index.css';
import Home from './components/Home';
import Apropos from './components/Apropos';
import Root from './routes/Root';

const router = createBrowserRouter([
     {
          path: '/',
          element: <Root />,
          errorElement: <ErrorPage />,
          // headerElement: <Header />,
          // loader: rootLoader,
          children: [
               // {
               //      path: 'contacts/:contactId',
               //      // element: <Contact />,
               // },
               {
                    path: '/',
                    element: <Home />,
               },
               {
                    path: '/about',
                    element: <Apropos />,
               },
               // {
               //      path: 'ficheLogement/:id',
               //      element: <FicheLogement />,
               // },
          ],
     },
     // {
     //      path: '/about',
     //      element: <Home />,
     // },
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
