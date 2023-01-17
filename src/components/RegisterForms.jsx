import React from "react";
import styled from "styled-components";

export default function RegisterForms() {
    const [form, setForm] = React.useState({
        email: '',
        password: '',
        name: '',
        passwordConfirm: ''
    })

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function doRegister() {
        console.log("this function does the register operation")
    }
    return (
        <RegisterFormDiv>
            <form>
                <input
                    disabled={false}
                    name="name"
                    type="text"
                    required
                    placeholder="Nome"
                    onChange={handleForm}
                    value={form.name}
                />
                <input
                    disabled={false}
                    name="email"
                    type="email"
                    required
                    placeholder="E-mail"
                    onChange={handleForm}
                    value={form.email}
                />
                <input
                    disabled={false}
                    name="password"
                    type="password"
                    required
                    placeholder="Senha"
                    onChange={handleForm}
                    value={form.password}
                />
                <input
                    disabled={false}
                    name="password-Confirmation"
                    type="password"
                    required
                    placeholder="Confirme sua senha"
                    onChange={handleForm}
                    value={form.passwordConfirm}
                />
                <button
                    disabled={false}
                    type="submit"
                >Cadastrar</button>
            </form>
        </RegisterFormDiv>
    );
}

const RegisterFormDiv = styled.div`
    form{
        display:flex;
        flex-direction: column;
        margin-top:24px;
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