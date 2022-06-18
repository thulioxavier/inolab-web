import React, { Fragment } from "react";
import { IMG } from "../../assets";
import *as S from './styled';

export const InoLab = () => {
    return (
        <Fragment>
            <S.Body>

                <S.Header>
                    <S.Nav>
                        <ul>
                            <li><S.Logo src={IMG.LogoVertical}/></li>
                            <li>Sobre</li>
                        </ul>

                        <ul>
                            <li><S.BottomLogin>Entrar</S.BottomLogin></li>
                            <li>Documentação</li>
                        </ul>

                    </S.Nav>
                </S.Header>

                <S.Main>
                </S.Main>

                <S.Footer>

                </S.Footer>

            </S.Body>

        </Fragment>
    )
}