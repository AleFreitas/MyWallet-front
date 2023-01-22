import { Link } from "react-router-dom";
import styled from 'styled-components';
import WalletLog from "../components/WalletLog";

export default function Home() {
    return (
        <HomeDiv>
            <HomeHeader>
                <p>Olá, Fulano</p>
                <ion-icon name="exit-outline"></ion-icon>
            </HomeHeader>
            <WalletLog/>
            <EntryDiv>
                <ButtonDiv>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova entrada</p>
                </ButtonDiv>
                <ButtonDiv>
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