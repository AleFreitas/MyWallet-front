import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { AuthContext } from "../providers/auth";

export default function OperationForms(props) {
    const [form, setForm] = React.useState({
        value: '',
        description: ''
    })
    const { token } = React.useContext(AuthContext)
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const navigate = useNavigate()
    const [submited, setSubmited] = React.useState(false)


    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function doEntry(e) {
        setSubmited(true)
        e.preventDefault();
        const postEntry = axios.post("https://projeto14-mywallet.onrender.com/new-entry", {
            value: form.value,
            description: form.description
        },config)
        // se der tudo certo com a requisição, vai para a página home
        postEntry.then((answer) => success(answer))
        postEntry.catch((error) => fail(error))
    }

    function doExit(e) {
        setSubmited(true)
        e.preventDefault();
        const postExit = axios.post("https://projeto14-mywallet.onrender.com/new-exit", {
            value: form.value,
            description: form.description
        },config)
        // se der tudo certo com a requisição, vai para a página home
        postExit.then((answer) => success(answer))
        postExit.catch((error) => fail(error))
    }

    function success(e){
        setSubmited(false)
        navigate("/home")
    }

    function fail(e){
        alert(e.response.data)
        setSubmited(false)
    }

    return (
        <OperationFormDiv>
            <form onSubmit={props.operation === "entry" ? doEntry : doExit}>
                <input
                    disabled={false}
                    name="value"
                    type="number" 
                    min="1" 
                    step="any"
                    required
                    placeholder="Valor"
                    onChange={handleForm}
                    value={form.email}
                />
                <input
                    disabled={false}
                    name="description"
                    type="text"
                    required
                    placeholder="Descrição"
                    onChange={handleForm}
                    value={form.password}
                />
                <button
                    disabled={false}
                    type="submit"
                >{props.operation === "entry" ? "Salvar entrada" : "Salvar saída"}</button>
            </form>
        </OperationFormDiv>
    );
}

const OperationFormDiv = styled.div`
    form{
        display:flex;
        flex-direction: column;
        margin-top:40px;
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }

        input[type=number] {
        -moz-appearance: textfield;
        }
        input{
            height:58px;
            width:100%;
            border:none;
            border-radius:5px;
            margin-bottom:13px;
            padding:17px 15px 17px 15px;
            color:#000000;
            &::placeholder{
                font-family: 'Raleway',sans-serif;
                font-size: 20px;
                font-weight: 400;
                color:#000000;
            }
        }
        button{
            cursor:pointer;
            height: 46px;
            width: 100%;
            border:none;
            border-radius: 5px;
            background-color:#A328D6;
            color:#FFFFFF;
            font-family: 'Raleway',sans-serif;
            font-size: 20px;
            font-weight: 700;
        }
    }
`;