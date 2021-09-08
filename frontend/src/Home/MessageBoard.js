import React from 'react';
import * as config from "../Config";
import DjangoCSRFToken from "django-react-csrftoken/src";
import styled from "styled-components";
import { CJY_ORANGE } from "../Config";

export default function MessageBoard() {
    return (
        <div>
            <form method = 'POST' action = {config.BACKEND_DOMAIN + "/postMessage/"}
                  style = {{marginTop: '4vh', textAlign: 'center'}} onSubmit={messageBoardCheck}>
                <DjangoCSRFToken />
                <Title>Below is a message board</Title>
                <InputBox name = 'content' id = 'content' style = {{width: '90vw'}}/>
                <div style = {{width: '60vw', height: '2px', backgroundColor: CJY_ORANGE, margin: 'auto', marginBottom: '5vh'}}/>
                <Title>Signature</Title>
                <InputBox name = 'name' id = 'name' style = {{width: '200px'}}/>
                <div style = {{width: '220px', height: '2px', backgroundColor: CJY_ORANGE, margin: 'auto'}}/>
                <Submit type = 'submit' value = 'Send' />
            </form>
        </div>
    )
}

function messageBoardCheck(e){
    const contentBox = document.getElementById("content");
    if (contentBox.value === ""){
        alert("不要灌水");
        e.preventDefault();
    }
}
const InputBox = styled.input`
  display: block;
  font-size: 20px;
  height: 40px;
  margin: 2vh auto 0 auto;
  outline: none;
  background-color: transparent;
  border: none;
  color: #F2F2F2;
  text-align: center;
  font-family: Verdana, PMingLiU, sans-serif;
`
const Title = styled.div`
  font-size: 20px;
  color: ${CJY_ORANGE};
  font-weight: bold;
  margin-top: 2vh;
  font-family: Verdana, PMingLiU, sans-serif;
  -webkit-user-select: none;
  -moz-user-select:none;
  -ms-user-select:none;
`
const Submit = styled.input`
  -webkit-appearance:none;
  background-color: ${CJY_ORANGE};
  border: none;
  font-size: 20px;
  margin: 8vh auto 0 auto;
  height: 50px;
  width: 120px;
  color: #FFFFFF;
  border-radius: 10px;
  cursor: pointer;
  font-family: Verdana, sans-serif;
  &:hover{
    background-color: #B54D00;
  }
`