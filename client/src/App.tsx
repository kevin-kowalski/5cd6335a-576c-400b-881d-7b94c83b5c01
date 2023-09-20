import './global.scss';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home</h1>
  },
  {
    path: '/cart',
    element: <h1>Cart</h1>
  }
]);

export default function App() {

  return (
    <RouterProvider router={router} />
  );
}
