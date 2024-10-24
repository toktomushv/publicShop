import React from 'react'
import Main from "../pages/Main/Main";
import Admin from "../pages/Admin/Admin";
import {Routes, Route} from "react-router-dom"

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element ={<Main />} />
        <Route path="/admin" element ={<Admin />} />    
      </Routes>
    </>
  )
}

export default MyRoutes;
