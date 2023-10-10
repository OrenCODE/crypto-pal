import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import MainPage from 'pages/MainPage.tsx';
import LoginPage from 'pages/LoginPage.tsx';
import InfoPage from 'pages/InfoPage.tsx';
import AddTestimonialPage from 'pages/AddTestimonialPage.tsx';

import PrivateRoute from 'components/PrivateRoute.tsx';

import store from './store';
import { Provider } from 'react-redux';
import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<App />}>
         <Route index={true} path="/" element={<MainPage />} />
         <Route path="/info" element={<InfoPage />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="" element={<PrivateRoute />}>
            <Route path="/add" element={<AddTestimonialPage />} />
         </Route>
      </Route>,
   ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
   <Provider store={store}>
      <React.StrictMode>
         <RouterProvider router={router} />
      </React.StrictMode>
   </Provider>,
);
