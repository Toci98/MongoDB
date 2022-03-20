import React, {FC, useState}from 'react';
import styled from "@emotion/styled";
import { isPropertySignature } from 'typescript';
import Enviar from './Enviar';
import Recibir from './Recibir';

const Menu: FC = () => {
    return (
        <div>
            <Recibir></Recibir>    
        </div>
    );
}

export default Menu;