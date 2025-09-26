import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "./index.css"
import App from './App';
import CreateContextPro from './hooks/CreateContextPro';

const queryClient = new QueryClient()

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

createRoot(rootElement).render(

  <Router>
    <CreateContextPro>
      <QueryClientProvider client={queryClient} >
        <App />
        <ToastContainer />
      </QueryClientProvider>
    </CreateContextPro>
  </Router>
)