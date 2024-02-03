import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

ReactDOM.createRoot(document.getElementById('wrap')).render(
  <React.StrictMode>
<Header/>
<Main/>

  </React.StrictMode>,
);

