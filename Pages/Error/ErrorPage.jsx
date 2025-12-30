import React from 'react'
import { useNavigate } from "react-router";

function ErrorPage() {
    const navigate = useNavigate();
  const handleRedirect = ()=>{
    // navigate("/");  // route to home or base
    navigate(-1);
  } 
    return (
    <div>
      <h1>404</h1>
      <h2>Page not found</h2>
      <button onClick={handleRedirect}>Go to home</button>
    </div>
  )
}

export default ErrorPage;
