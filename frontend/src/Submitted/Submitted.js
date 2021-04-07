import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

export default function Submitted (){
    return(
        <div className= 'Submitted'
             style = {{textAlign: 'center', fontFamily: 'Hiragino Sans GB', overflowX: 'hidden', backgroundColor: '#000034', height: '100vh'}}>
            <div className='text' style = {{color: '#F2F2F2'}}>
                <MainTitle style = {{marginTop: '40vh'}}>
                    Thanks
                </MainTitle>
                <div style = {{marginTop: '5vh'}}><Link to="/home" style = {{color: '#F2F2F2'}}>返回</Link></div>
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
