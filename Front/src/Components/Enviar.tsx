import React, {FC, useState}from 'react';
import styled from "@emotion/styled";
import { isPropertySignature } from 'typescript';

const Enviar: FC = () => {
    return (
        <div>
            <MyButton>Enviar datos</MyButton> 
        </div>
    );
}
type MyButtonType = {
    width?:string;
    height?:string;
    state?: boolean;
    inputValue?: string;
}
const MyButton = styled.button<MyButtonType>`
    width: ${(props) => props.width || "200px"};
    height: ${(props) => props.height || "20px"};
`
const MyDiv = styled.div`
    width: "1920px";
    height: "500px";
`
export default Enviar;