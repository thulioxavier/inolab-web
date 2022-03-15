import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import *as C from './styles';


export const NotFound = () => {
    const navigate = useNavigate();
    return(
      <Fragment>
          <C.Container>
              <C.NotFound>404</C.NotFound>
              <C.NotFoundSub>Solicitação sem respota</C.NotFoundSub>
              <C.NotFoundInfo>Não foi possível encontrar um correspondente <br/> para a sua solicitação</C.NotFoundInfo>
                <C.Button onClick={() => {
                    navigate("/dashboard")
                }}>Pagina Inicial</C.Button>
          </C.Container>
      </Fragment>  
    );
}