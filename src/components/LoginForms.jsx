import React from "react";
import styled from "styled-components";

export default function LoginForms() {
    const [form, setForm] = React.useState({
        email: '',
        password: ''
    })

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function doLogin() {
        console.log("this function does the login operation")
    }
    return (
        <LoginFormDiv>
            <form>
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
                <button
                    disabled={false}
                    type="submit"
                >Entrar</button>
            </form>
        </LoginFormDiv>
    );
}

const LoginFormDiv = styled.div`
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