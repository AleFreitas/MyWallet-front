import React from "react";
import styled from "styled-components";

export default function OperationForms(props) {
    const [form, setForm] = React.useState({
        value: '',
        description: ''
    })

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function doEntry() {
        console.log("this function starts Entry operation")
    }

    function doExit() {
        console.log("this function starts Exit operation")
    }

    return (
        <OperationFormDiv>
            <form>
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