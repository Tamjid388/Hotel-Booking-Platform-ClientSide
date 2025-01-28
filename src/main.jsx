import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Router.jsx';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { Authprovider } from './Providers/Authprovider.jsx';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Authprovider>
       
  
<QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
    </QueryClientProvider>
</Authprovider>
 
  </StrictMode>,
)
