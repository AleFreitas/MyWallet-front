import React from 'react';
import axios from 'axios';
import GlobalStyle from '../styles/globalStyles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import NewOperation from '../pages/NewOperation';
import { AuthProvider } from '../providers/auth';

export default function App() {
  return (
    <React.Fragment>
      <AuthProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/nova-entrada" element={<NewOperation operation="entry" />} />
            <Route path="/nova-saida" element={<NewOperation operation="exit" />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </React.Fragment>
  );
}