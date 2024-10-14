import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "./components/ui/button";
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Dashboard from './components/pages/Dashboard'
import PageNotfound from './components/pages/PageNotfound'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/"element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<PageNotfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}