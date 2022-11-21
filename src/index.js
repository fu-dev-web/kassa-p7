import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page';
import './index.css';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';
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
                    element: <Home />,
               },
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
