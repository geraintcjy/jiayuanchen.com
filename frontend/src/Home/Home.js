import React, {useEffect} from 'react';
import DjangoCSRFToken from "django-react-csrftoken/src";
import styled from 'styled-components';
import axios from 'axios';
import qs from 'qs';
import * as THREE from 'three';
import * as config from '../Config';

export default function Home (){
    useEffect(()=>{
        axios.post(config.BACKEND_DOMAIN + "/initialization/", {})
            .then(res => {})
            .catch(error => {})
        console.log(navigator.userAgent);


    })

    return(
        <div className= 'Home'
             style = {{textAlign: 'center', fontFamily: 'Hiragino Sans GB', overflowX: 'hidden', backgroundColor: '#000034', height: '100vh'}}>
            <div className='text' style = {{color: '#F2F2F2', display: 'flex', flexDirection: 'column'}}>
                <MainTitle isPC = {isPC()} style = {{marginTop: '5vh'}}>
                    Jiayuan Chen (陈嘉缘)
                </MainTitle>
                <Text isPC = {isPC()} style = {{marginTop: '5vh'}}>
                    Hi, my name is Jiayuan Chen, a senior studying Civil Engineering at Tongji University.
                </Text>
                <Text isPC = {isPC()}>
                    I see myself as a novelty seeker, a team player and an eclecticist. I love stuff with innovation and passion, such as tech, parties and soccer.
                </Text>
                <Text isPC = {isPC()}>
                    In this fall, I am going to Georgia Tech to pursue a Master's degree in Computational Science and Engineering.
                    Should you have any requests, please feel free to contact me.
                </Text>

                <form method = 'POST' action = {config.BACKEND_DOMAIN + "/postMessage/"} style = {{marginTop: '8vh', textAlign: 'center'}} onSubmit={messageBoardCheck}>
                    <DjangoCSRFToken />
                    <Title>Below is a message board</Title>
                    <InputBox name = 'content' id = 'content' style = {{width: '90vw'}}/>
                    <div style = {{width: '60vw', height: '2px', backgroundColor: '#CC5500', margin: 'auto', marginBottom: '5vh'}}/>
                    <Title>Signature</Title>
                    <InputBox name = 'name' id = 'name' style = {{width: '200px'}}/>
                    <div style = {{width: '220px', height: '2px', backgroundColor: '#CC5500', margin: 'auto'}}/>
                    <Submit type = 'submit' value = 'Send' />
                </form>

                <div style = {{marginTop: '6vh', fontFamily: 'Verdana, sans-serif'}}>
                    Wechat: geraintcjy
                </div>
                <div style = {{marginTop: '1vh', fontFamily: 'Verdana, sans-serif'}}>
                    Email: geraintcjy@gmail.com
                </div>
                <div style = {{marginTop: '1vh', fontFamily: 'Verdana, sans-serif'}}>
                    <a
                        href = "https://beian.miit.gov.cn/"
                        style = {{textDecoration: 'none', color: '#F2F2F2'}}>沪ICP备2021009744号</a>
                </div>
            </div>
        </div>
    )
}

function isPC() {
    const userAgentInfo = navigator.userAgent;
    const Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod"];
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    if(window.screen.width>=768){
        flag = true;
    }
    return flag;
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
  color: #CC5500;
  font-weight: bold;
  margin-top: 2vh;
  font-family: Verdana, PMingLiU, sans-serif;
  -webkit-user-select: none;
  -moz-user-select:none;
  -ms-user-select:none;
`
const Submit = styled.input`
  -webkit-appearance:none;
  background-color: #CC5500;
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
const MainTitle = styled.div`
  font-size: ${props => {return props.isPC ? '35px' : '25px'}};
  font-family: Verdana, PMingLiU, sans-serif;
  -webkit-user-select: none;
  -moz-user-select:none;
  -ms-user-select:none;
`
const Text = styled.div`
  text-align: left;
  width: ${props => {return props.isPC ? '750px' : '80%'}};
  margin: 0 auto 8px auto;
  font-size: 16px;
  line-height: 30px;
  font-family: Verdana, PMingLiU, sans-serif;
  -webkit-user-select: none;
  -moz-user-select:none;
  -ms-user-select:none;
`
