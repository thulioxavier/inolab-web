import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "../Container";
import *as C from './styles';
import { ChakraProvider } from '@chakra-ui/react'


export const DashboardHeader = () => {
    return (
        <Fragment>
            <C.HeaderDashboard>
                <nav>
                    <C.LinkHeader to="/dashboard"> Dashboard</C.LinkHeader>
                    <C.LinkHeader to="/dashboard/teste"> Relatórios</C.LinkHeader>
                    <C.LinkHeader to="/auth/sign-in"> Perfil</C.LinkHeader>
                    <C.LinkHeader to="/dashboard/subject"> Matérias</C.LinkHeader>
                    <C.LinkHeader to="/dashboard/module"> Módulos</C.LinkHeader>
                    <C.LinkHeader to="/auth/sign-in"> Questões</C.LinkHeader>
                </nav>
            </C.HeaderDashboard>
            <ChakraProvider>
                <Outlet />
            </ChakraProvider>
        </Fragment>
    )
}