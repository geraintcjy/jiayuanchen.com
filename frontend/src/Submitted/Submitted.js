import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { setRainBack } from "../Home/Home";

export default function Submitted (){
    useEffect(()=>{
        setRainBack();
    })


    return(
        <div className= 'Submitted'
             style = {{textAlign: 'center', fontFamily: 'Hiragino Sans GB', overflowX: 'hidden', backgroundColor: 'transparent', height: '100vh'}}>
            <div className='text' style = {{color: '#F2F2F2'}}>
                <MainTitle style = {{marginTop: '40vh'}}>
                    Thanks
                </MainTitle>
                <div style = {{marginTop: '5vh'}}><Link to="/home" style = {{color: '#F2F2F2'}}>返回</Link></div>
            </div>
            <div id = "home-background" style = {{position: 'absolute', zIndex: '-1', top: '0'}}>

            </div>
        </div>
    )
}
const MainTitle = styled.div`
  font-size: 35px;
  -webkit-user-select: none;
  -moz-user-select:none;
  -ms-user-select:none;
`
