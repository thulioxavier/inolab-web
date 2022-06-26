import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { IMG } from "../../assets";
import *as S from './styled';

export const InoLab = () => {

    const history = useNavigate();

    const goToLogin = () => {
        history('/auth/sign-in', undefined, undefined);
    }

    return (
        <Fragment>
            <S.Body>

                <S.Header>
                    <S.Nav>
                        <ul>
                            <li><S.Logo src={IMG.LogoVertical} /></li>
                            <li><a href="#about">Sobre</a></li>
                        </ul>

                        <ul>
                            <li><S.BottomLogin onClick={goToLogin}>Entrar</S.BottomLogin></li>
                            <li>Documentação</li>
                        </ul>

                    </S.Nav>
                </S.Header>

                <S.Main>

                    <S.Section>
                        <S.Content>

                            <S.ContentLeft>
                                <S.ContentTitle>Inicie agora a sua jornada de aprendizagem</S.ContentTitle>
                                <S.P>Baixe o <b>app</b> para poder colocar em <b>pratica</b> o seu <b>conhecimento</b>.</S.P>
                                <S.BottomApp>Baixar app</S.BottomApp>
                            </S.ContentLeft>

                            <S.ContentRight>
                                <S.ImageContentRight src={IMG.ImageSection} />
                            </S.ContentRight>
                        </S.Content>
                    </S.Section>

                    <S.Section id="about">
                        <S.Content>
                            <S.ContentLeft>
                                <S.ImageContentRight src={IMG.ImageSection_2} />
                            </S.ContentLeft>

                            <S.ContentRight>
                                <div>
                                    <S.ContentTitle>Pilares:</S.ContentTitle>
                                    <S.Card>
                                        <S.CardHeader>
                                            <S.CardTitle>Microlearning</S.CardTitle>
                                            <S.CardBody><span>Microlearning lida com unidades de aprendizagem relativamente pequenas e atividades de aprendizagem de curto prazo. </span></S.CardBody>
                                        </S.CardHeader>
                                    </S.Card>
                                    <S.Card>
                                    <S.CardHeader>
                                            <S.CardTitle>Jornada Flexível</S.CardTitle>
                                            <S.CardBody><span>Microlearning lida com unidades de aprendizagem relativamente pequenas e atividades de aprendizagem de curto prazo. </span></S.CardBody>
                                        </S.CardHeader>
                                    </S.Card>
                                    <S.Card>
                                    <S.CardHeader>
                                            <S.CardTitle>Gamificação</S.CardTitle>
                                            <S.CardBody><span>Microlearning lida com unidades de aprendizagem relativamente pequenas e atividades de aprendizagem de curto prazo. </span></S.CardBody>
                                        </S.CardHeader>
                                    </S.Card>
                                </div>
                            </S.ContentRight>
                        </S.Content>
                    </S.Section>

                </S.Main>

                <S.Footer>

                </S.Footer>

            </S.Body>

        </Fragment>
    )
}