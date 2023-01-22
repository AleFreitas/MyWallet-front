import { Link } from "react-router-dom";
import styled from 'styled-components';
import React from 'react';
import axios from 'axios';
import { AuthContext } from '../providers/auth';

export default function WalletLog(props) {
    return (
        <WalletLogDiv>
            <Log className={props.operations.length === 0 ? "EmptyLog" : ""}>
                {props.operations.length === 0 ? <p>Não há registros de entrada ou saída</p> : props.operations.map(i =>
                    <Operation>
                        <Data>{i.time}</Data>
                        <Name>{i.description}</Name>
                        <Price color={i.type === "entry" ? "#03AC00" : "#C70000"}>{parseInt(i.value).toFixed(2)}</Price>
                    </Operation>
                )}
            </Log>
            <Balance display={props.operations.length === 0 ? "none" : "flex"}>
                <p>SALDO</p>
                <span>{parseInt(props.balance).toFixed(2)}</span>
            </Balance>
        </WalletLogDiv>
    )
}

const WalletLogDiv = styled.div`
    background-color: #FFFFFF;
    width:100%;
    height:100vh;
    min-height: 40px;
    border-radius: 5px;
    padding:23px 12px 0px 12px;
    position:relative;
    .EmptyLog{
        display:flex;
        justify-content: center;
        align-items: center;
        font-family: 'Raleway',sans-serif;
        font-size: 20px;
        font-weight: 400;
        text-align: center;
        p{
            height: 46px;
            width: 180px;
            color:#868686;
        }
    }
`;

const Log = styled.div`
    height:90%;
    word-break: break-word;
    overflow-x: hidden;
    overflow-y: auto;
    display:flex;
    flex-direction: column;
`;

const Balance = styled.div`
    position:absolute;
    display:${props => props.display};
    justify-content: space-between;
    align-items: center;
    left:0;
    bottom:0;
    width:100%;
    height:32px;
    padding:0px 15px 0px 15px;
    p{
        font-family: 'Raleway',sans-serif;
        font-size: 17px;
        font-weight: 700;
        color:#000000;
    }
    span{
        font-family: 'Raleway',sans-serif;
        font-size: 17px;
        font-weight: 400;
        color:#03AC00;
    }
`;

const Operation = styled.div`
    display: flex;
    font-family: 'Raleway',sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    margin-bottom:20px;
`;

const Data = styled.div`
    color: #C6C6C6;
    width: 48px;
    display:flex;
    justify-content: center;
    align-items: center;
`;
const Name = styled.div`
    width:80%;
    color:#000000;
    display:flex;
    justify-content: flex-start;
    align-items: center;
`;
const Price = styled.div`
    width: 72px;
    color: ${props => props.color};
    display:flex;
    justify-content: flex-end;
    align-items: center;
`;