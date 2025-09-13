import { createRoot } from 'react-dom/client'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <>
    <Router>
      <App />
      <ToastContainer />
    </Router>
  </>
)


