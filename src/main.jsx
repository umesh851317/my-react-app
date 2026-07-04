// import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import UserData from "./Context/userData.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserData>    {/* context passing for user data globally in app  */}
      <App />
    </UserData>
  </BrowserRouter>
)
