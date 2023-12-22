import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Task3_Zentrades">
    <App />
  </BrowserRouter>
);