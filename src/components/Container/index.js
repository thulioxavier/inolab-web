import React, { Fragment } from "react";
import *as C from './styles';

export const Container = ({ display, justifyContent, alignItems, children, color, flexDirection }) => {
    return (
        <Fragment>
            <C.Container display={display} flexDirection={flexDirection} justifyContent={justifyContent} alignItems={alignItems} color={color}>
                {children}
            </C.Container>
        </Fragment>
    )
}