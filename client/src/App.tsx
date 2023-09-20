import Layout from './Layout';
import './global.scss';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <h1>Home</h1>
      </Layout>
    )
  },
  {
    path: '/cart',
    element: (
      <Layout>
        <h1>Cart</h1>
      </Layout>
    )
  }
]);

export default function App() {

  return (
    <RouterProvider router={router} />
  );
}
