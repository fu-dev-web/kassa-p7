import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page';
import './index.css';
// import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
// import Survey from './pages/Survey';
import Root, { loader as rootLoader } from './routes/Root';
import Contact from './routes/contact';

const router = createBrowserRouter([
     {
          path: '/',
          element: <Root />,
          errorElement: <ErrorPage />,
          loader: rootLoader,
          children: [
               {
                    path: 'contacts/:contactId',
                    element: <Contact />,
               },
          ],
     },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <React.StrictMode>
          <RouterProvider router={router} />
     </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
