import React from 'react';
import DjangoCSRFToken from "django-react-csrftoken/src";
import styled from 'styled-components';

export default function Home (){
    return(
        <div className= 'Home'
             style = {{textAlign: 'center', fontFamily: 'Hiragino Sans GB', overflowX: 'hidden', backgroundColor: '#000034', height: '100vh'}}>
            <div className='text' style = {{color: '#F2F2F2'}}>
                <MainTitle style = {{marginTop: '15vh'}}>帅哥的主页</MainTitle>
                <MainTitle style = {{marginTop: '5vh', fontFamily: 'Arial, serif'}}>A Handsome Guy's Homepage</MainTitle>
                <form method = 'POST' action = "http://jiayuanchen.com:8002/postMessage/" style = {{marginTop: '10vh', textAlign: 'center'}}>
                    <DjangoCSRFToken />
                    <Title>Anything to say</Title>
                    <InputBox name = 'content' style = {{width: '90vw'}}/>
                    <div style = {{width: '94vw', height: '2px', backgroundColor: '#CC5500', margin: 'auto', marginBottom: '5vh'}}/>
                    <Title>If you want to comment with your name</Title>
                    <InputBox name = 'name' style = {{width: '200px'}}/>
                    <div style = {{width: '220px', height: '2px', backgroundColor: '#CC5500', margin: 'auto', marginBottom: '2vh'}}/>
                    <Submit type = 'submit' value = 'Send' />
                </form>
                <div style = {{position: 'absolute', bottom: '5vh', left: 0, right: 0}}>现在搞毕设 之后再弄</div>
            </div>
        </div>
    )
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
  font-family: Arial,serif;
`
const Title = styled.div`
  font-size: 20px;
  color: #CC5500;
  font-weight: bold;
  margin-top: 2vh;
  font-family: Arial,serif;
  -webkit-user-select: none;
  -moz-user-select:none;
  -ms-user-select:none;
`
const Submit = styled.input`
  -webkit-appearance:none;
  background-color: #CC5500;
  border: none;
  font-size: 20px;
  margin: 4vh auto 0 auto;
  height: 50px;
  width: 120px;
  color: #FFFFFF;
  border-radius: 10px;
  cursor: pointer;
  font-family: Arial,serif;
`
const MainTitle = styled.div`
  font-size: 35px;
  -webkit-user-select: none;
  -moz-user-select:none;
  -ms-user-select:none;
`
