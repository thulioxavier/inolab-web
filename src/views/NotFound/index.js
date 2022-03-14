import React, { Fragment } from "react";
import *as C from './styles';


export const NotFound = () => {
    return(
      <Fragment>
          <C.Container>
              <C.NotFound>404</C.NotFound>
              <C.NotFoundSub>Solicitação sem respota</C.NotFoundSub>
              <C.NotFoundInfo>Não foi possível encontrar um correspondente <br/> para a sua solicitação</C.NotFoundInfo>
          </C.Container>
      </Fragment>  
    );
}