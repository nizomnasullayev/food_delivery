import { createRoot } from 'react-dom/client'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createContext } from 'react';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <>
    <Router>
        <QueryClientProvider client={queryClient} >
          <App />
          <ToastContainer />
        </QueryClientProvider>
    </Router>
  </>
)


