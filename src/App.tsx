import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import Menu from "./components/Menu"
import Layout from "./components/Layout"



function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Menu/>}/>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
   </React.Fragment>
  );
}

export default App;
