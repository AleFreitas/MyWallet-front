import { Link } from "react-router-dom";
import styled from 'styled-components';
import OperationForms from "../components/OperationForms";

export default function NewOperation(props) {
    return (
        <OperationDiv>
            <OperationHeader>
                <p>{props.operation === "entry" ? "Nova entrada" : "Nova saída"}</p>
            </OperationHeader>
            <OperationForms operation={props.operation}/>
        </OperationDiv>
    );
}

const OperationDiv = styled.div`
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

const OperationHeader = styled.div`
    display:flex;
    width:100%;
    height:30px;
    justify-content: space-between;
    align-items: center;
    color:#FFFFFF;
    p{
        font-family: 'Raleway',sans-serif;
        font-size: 26px;
        font-weight: 700;
    }
`;