import React, {useEffect} from 'react';
import DjangoCSRFToken from "django-react-csrftoken/src";
import styled from 'styled-components';
import axios from 'axios';
import qs from 'qs'

export default function Home (){
    useEffect(()=>{
        axios.post("http://jiayuanchen.com:8002/initialization/", {test: 'hello'})
            .then(res => {})
            .catch(error => {console.log(error)})
    })

    return(
        <div className= 'Home'
             style = {{textAlign: 'center', fontFamily: 'Hiragino Sans GB', overflowX: 'hidden', backgroundColor: '#000034', height: '100vh'}}>
            <div className='text' style = {{color: '#F2F2F2'}}>
                <MainTitle style = {{marginTop: '8vh'}}>Introduction</MainTitle>
                <Text style = {{marginTop: '5vh'}}>
                    Hi, my name is Jiayuan Chen, a senior studying Civil Engineering at Tongji University.
                </Text>
                <Text>
                    I see myself as a novelty seeker, a team player and an eclecticist. I love tech all the time, parties in most circumstances, and soccer occasionally.
                </Text>
                <Text>
                    In this fall, I am going to Georgia Tech to pursue a Master's degree in Computational Science and Engineering.
                    Should you have any requests or questions, please feel free to contact me.
                </Text>
                <form method = 'POST' action = "http://jiayuanchen.com:8002/postMessage/" style = {{marginTop: '8vh', textAlign: 'center'}}>
                    <DjangoCSRFToken />
                    <Title>下面是留言板</Title>
                    <InputBox name = 'content' style = {{width: '90vw'}}/>
                    <div style = {{width: '60vw', height: '2px', backgroundColor: '#CC5500', margin: 'auto', marginBottom: '5vh'}}/>
                    <Title>留个名字吗</Title>
                    <InputBox name = 'name' style = {{width: '200px'}}/>
                    <div style = {{width: '220px', height: '2px', backgroundColor: '#CC5500', margin: 'auto', marginBottom: '2vh'}}/>
                    <Submit type = 'submit' value = 'Send' />
                </form>
                <div style = {{marginTop: '8vh', fontFamily: 'Verdana, sans-serif'}}>Wechat: geraintcjy</div>
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
`
const MainTitle = styled.div`
  font-size: 35px;
  font-family: Verdana, PMingLiU, sans-serif;
  -webkit-user-select: none;
  -moz-user-select:none;
  -ms-user-select:none;
`
const Text = styled.div`
  text-align: left;
  width: 750px;
  margin: 0 auto 8px auto;
  font-size: 16px;
  line-height: 30px;
  font-family: Verdana, PMingLiU, sans-serif;
  -webkit-user-select: none;
  -moz-user-select:none;
  -ms-user-select:none;
`
