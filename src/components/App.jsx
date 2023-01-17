import React from 'react';
import axios from 'axios';
import GlobalStyle from '../styles/globalStyles';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from '../pages/Login';

export default function App() {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
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