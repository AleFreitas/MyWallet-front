import React from 'react';
import axios from 'axios';
import GlobalStyle from '../styles/globalStyles';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import NewOperation from '../pages/NewOperation';

export default function App() {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/cadastro" element={<Register />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/nova-entrada" element={<NewOperation operation="entry"/>}/>
          <Route path="/nova-saida" element={<NewOperation operation="exit"/>}/>
          {/*
          <Route path="/sessoes/:idFilme" element={<SecondPage time={timeTable} setTime={setTimeTable}/>}/>
          <Route path="/assentos/:idSessao" element={<ThirdPage ticket={ticketDetails} setTicket={setTicketDetails}/>}/>
          <Route path="/sucesso" element={<FourthPage ticket={ticketDetails} setTicket={setTicketDetails}/>}/>
          */}
          </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}