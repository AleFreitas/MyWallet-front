import { Link } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';
import WalletLog from "../components/WalletLog";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../providers/auth';

export default function Home() {
    const { token } = React.useContext(AuthContext)
    const { setToken } = React.useContext(AuthContext)
    const navigate = useNavigate()
    const [operations, setOperations] = React.useState([])
    const [userName, setUserName] = React.useState("")
    const [userBalance, setUserBalance] = React.useState("")
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    React.useEffect(() => {
        const getOperations = axios.get(`${process.env.REACT_APP_API_URL}user-balance`, config);
        getOperations.then(ans => {
            console.log(ans)
            setOperations(ans.data.operationList);
            setUserName(ans.data.user)
            setUserBalance(ans.data.balance)
        });
    }, []);
    return (
        <HomeDiv>
            <HomeHeader>
                <p>{`Olá, ${userName}`}</p>
                <ion-icon name="exit-outline" onClick={()=>{
                    setToken("")
                    navigate("/")
                }}></ion-icon>
            </HomeHeader>
            <WalletLog operations={operations} balance={userBalance}/>
            <EntryDiv>
                <ButtonDiv onClick={()=>{navigate("/nova-entrada")}}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova entrada</p>
                </ButtonDiv>
                <ButtonDiv onClick={()=>{navigate("/nova-saida")}}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova saída</p>
                </ButtonDiv>
            </EntryDiv>
        </HomeDiv>
    );
}

const HomeDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    width:100%;
    height:100%;
    min-height:100vh;
    max-height:100vh;
    padding:25px 25px 25px 25px;
    background-color:#8c11be;
`;

const HomeHeader = styled.div`
    display:flex;
    width:100%;
    height:30px;
    justify-content: space-between;
    align-items: center;
    color:#FFFFFF;
    margin-bottom:22px;
    p{
        font-family: 'Raleway',sans-serif;
        font-size: 26px;
        font-weight: 700;
    }
    ion-icon{
        cursor:pointer;
        width:28px;
        height:28px;
    }
`;

const EntryDiv = styled.div`
    display:flex;
    justify-content: space-between;
    height:114px;
    width:100%;
    margin-top:13px;
`;

const ButtonDiv = styled.div`
    width:155px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px;
    font-weight: 700;
    color:#FFFFFF;
    background-color: #A328D6;
    cursor:pointer;
    p{
        height: 40px;
        width: 64px;
        font-family: 'Raleway',sans-serif;
        font-size: 17px;
        font-weight: 700;
    }
    ion-icon{
        width:22px;
        height:22px;
    }
`;

const StyledLink = styled(Link)`
    color:#ffffff;
    width:100%;
    margin-top:36px;
    text-decoration: none;
    font-family: 'Raleway',sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
`;