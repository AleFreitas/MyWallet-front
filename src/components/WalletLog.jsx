import { Link } from "react-router-dom";
import styled from 'styled-components';
import React from 'react';
import axios from 'axios';
import { AuthContext } from '../providers/auth';

export default function WalletLog() {
    const { token } = React.useContext(AuthContext)
    const [operations, setOperations] = React.useState([])
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    React.useEffect(() => {
        const getOperations = axios.get("https://projeto14-mywallet.onrender.com/user-balance", config);
        getOperations.then(ans => {
            console.log(ans)
            setOperations(ans.data);
        });
    }, []);
    return (
        <WalletLogDiv>
            <Log className="EmptyLog">
                <p>Não há registros de entrada ou saída</p>
            </Log>
            <Balance display={"none"}>
                <p>SALDO</p>
                <span>2849.96</span>
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