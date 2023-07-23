import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home/Home';
import Products from '@/pages/Products';
import Checkout from '@/pages/Checkout';
import Signup from '@/pages/Signup';
import ProductDetails from '@/pages/ProductDetails';
import PrivateRoute from './PrivateRoute';
import AddBook from '@/pages/AddBook/AddBook';
import EditBook from '@/pages/EditBook/EditBook';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/allbooks',
        element: <Products />,
      },
      {
        path: '/addBook',
        element: <PrivateRoute><AddBook /></PrivateRoute>,
      },
      {
        path: '/book-details/:id',
        element:<PrivateRoute><ProductDetails /></PrivateRoute> ,
      },
      {
        path: '/edit/:id',
        element:<PrivateRoute><EditBook /></PrivateRoute> ,
      },
      {
        path: '/checkout',
        element: (
          <PrivateRoute>
            <Checkout />,
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
