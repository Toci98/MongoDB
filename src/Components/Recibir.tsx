import React, {FC, useState}from 'react';
import styled from "@emotion/styled";
import { isPropertySignature } from 'typescript';
import axios, { Axios } from 'axios';

const Recibir: FC = () => {
    return (
        <div>
        <MyButton onClick={() => recibirPet()}>Recibir datos</MyButton> 
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
function recibirPet() {
    axios
    .get('http://localhost:8080/users')
    .then(res => {
      console.log(`statusCode: ${res.status}`)
      console.log(res)
    })
    .catch(error => {
      console.error(error)
    })
  
}
export default Recibir;


