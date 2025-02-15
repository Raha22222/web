import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import App from './App.tsx';
import Products from './Products.tsx';
import ProductDetails from './ProductDetails.tsx';
import DiscordRedirect from './DiscordRedirect.tsx';
import LoadingSpinner from './components/LoadingSpinner.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      await new Promise(resolve => setTimeout(resolve, 800)); // Simulate loading
      return null;
    },
  },
  {
    path: "/products",
    element: <Products />,
    loader: async () => {
      await new Promise(resolve => setTimeout(resolve, 800)); // Simulate loading
      return null;
    },
  },
  {
    path: "/products/:productId",
    element: <ProductDetails />,
    loader: async () => {
      await new Promise(resolve => setTimeout(resolve, 800)); // Simulate loading
      return null;
    },
  },
  {
    path: "/discord",
    element: <DiscordRedirect />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AnimatePresence mode="wait">
      <RouterProvider router={router} fallbackElement={<LoadingSpinner />} />
    </AnimatePresence>
  </StrictMode>
);