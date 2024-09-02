import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.tsx';
import Test from './Test/Test.tsx';
import Results from './Components/Results/Results';


const router = createBrowserRouter([
  {
    path: "*",
    element: <App/>,
  },
  {
    path: "/Test",
    element: <Test/>,
  },
  {
    path: "/Results",
    element: <Results/>,
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
