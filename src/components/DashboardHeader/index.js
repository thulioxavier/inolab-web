import React, { Fragment } from "react";
import *as C from './styles';

export const DashboardHeader = () => {
    return(
        <Fragment>
            <C.HeaderDashboard>
                    <nav>
                        <C.LinkHeader to="/"> Dashboard</C.LinkHeader>
                        <C.LinkHeader to="/dashboard/teste"> Relatórios</C.LinkHeader>
                        <C.LinkHeader to="/auth/sign-in"> Perfil</C.LinkHeader>
                        <C.LinkHeader to="/subject"> Matérias</C.LinkHeader>
                        <C.LinkHeader to="/auth/sign-in"> Módulos</C.LinkHeader>
                        <C.LinkHeader to="/auth/sign-in"> Questões</C.LinkHeader>
                    </nav>
                </C.HeaderDashboard>
        </Fragment>
    )
}