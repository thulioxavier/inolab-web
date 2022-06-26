import React, { Fragment, useState } from "react";
import *as C from './styles';
import { Container } from "../../components";
import { IMG } from "../../assets";

export const Login = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    
    const [error, setError] = useState({
        status: false,
        email: null,
        password: null,
    });

    const handleSubmit = async (event) => {

        error.status = false;
        error.email = null;
        error.password = null;
        setError({...error});

        if (email && (email.includes("@")) && password) {
            event.preventDefault();

            alert("ENTROU")

        } else {
            error.status = true;

            if (!email) {
                error.email = "Campo obrigatório!";
            } else {
                if(!email.includes('@')){
                    error.email = "Informe um e-mail valido!";
                }else{
                    error.email = null;
                }
            }

            if (!password) {
                error.password = "Campo obrigatótio!";
            } else {
                error.password = null;
            }

            setError({...error});

        }

    }

    const goToResetPassword = () => {
        // navigate('/auth/reset-password')
        window.history.pushState('Reset Password', undefined, "/auth/reset-password");
    }

    return (
        <Fragment>
            <Container display="flex" justifyContent="center" alignItems="center">
                <C.ContentForm>
                    <C.FormInfo>
                        <C.Logo src={IMG.LogoVertical} />
                        <C.Info>Acesso administrativo</C.Info>
                    </C.FormInfo>
                    <C.FormArea>
                        <C.Form onSubmit={handleSubmit}>
                            <C.InputArea>
                                <C.Label>E-mail</C.Label>
                                <C.Input
                                    required
                                    type="email"
                                    placeholder="email@email.com.br"
                                    onChange={(e) => { setEmail(e.target.value) }} 
                                />
                                <C.Error>{error.email}</C.Error>
                            </C.InputArea>

                            <C.InputArea>
                                <C.Label>Senha</C.Label>
                                <C.Input
                                    required
                                    type="password"
                                    placeholder="Seu senha"
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                                <C.Error>{error.password}</C.Error>
                            </C.InputArea>
                            <C.ResetPassword onClick={() => { goToResetPassword() }}>Esqueci minha senha</C.ResetPassword>

                            <C.Button type="submit" disabled={!email || !password} onClick={handleSubmit}>Entrar</C.Button>
                        </C.Form>
                    </C.FormArea>
                </C.ContentForm>
            </Container>
        </Fragment>
    )
}