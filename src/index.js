import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";

var root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
    );

// Deprecation notice: ReactDOM.render is no longer supported in React 18
// import ReactDOM from 'react-dom';
// ReactDOM.render(
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>
//     , document.getElementById('root'));