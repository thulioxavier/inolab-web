import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components";

import *as C from './styles';

export const Home = () => {
    return(
        <Fragment>
            <Container display="flex" justifyContent="top" alignItems="center" flexDirection="column">
                <C.DashboardInfo>
                    <C.CardInfo>
                        <C.HeaderCard color="#00C880"/>
                    </C.CardInfo>
                    <C.CardInfo>
                        <C.HeaderCard color="#FFBA1C"/>
                    </C.CardInfo>
                    <C.CardInfo>
                        <C.HeaderCard color="#E75353"/>
                    </C.CardInfo>
                    <C.CardInfo>
                        <C.HeaderCard color="#00A3FE"/>
                    </C.CardInfo>
                </C.DashboardInfo>
            </Container>
        </Fragment>
    );
}