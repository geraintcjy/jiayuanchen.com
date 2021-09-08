import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { setRainBack } from "../Home/Home";
import { CJY_ORANGE, CJY_WHITE } from "../Config";

export default function Submitted (){
    useEffect(()=>{
        setRainBack();
    })


    return(
        <div className= 'Submitted'
             style = {{textAlign: 'center', fontFamily: 'Hiragino Sans GB', overflowX: 'hidden', backgroundColor: 'transparent', height: '100vh'}}>
            <div className='text' style = {{color: CJY_WHITE}}>
                <MainTitle>
                    <span>Thanks for your message! </span>
                    <span>I will reach out to you ASAP. </span>
                </MainTitle>
                <Advice>
                    <span>However, please be advised that I do not check my message database very often. </span>
                    <br />
                    <span>If there's an urgent matter, please directly get me in touch via phone: 404-660-0631. </span>
                </Advice>
                <div style = {{marginTop: '10vh'}}>
                    <Link to="/home" style = {{color: CJY_WHITE, fontSize: '30px'}}>
                        Back
                    </Link>
                </div>
            </div>
            <div id = "home-background" style = {{position: 'absolute', zIndex: '-1', top: '0'}}>
            </div>
        </div>
    )
}
const MainTitle = styled.div`
  font-size: 35px;
  color: ${CJY_ORANGE};
  margin-top: 40vh;
  -webkit-user-select: none;
  -moz-user-select:none;
  -ms-user-select:none;
`
const Advice = styled.div`
  font-size: 20px;
  margin-top: 5vh;
  line-height: 40px;
`

