import React from 'react';
import styled from 'styled-components';
import { CJY_WHITE } from "../Config";

export default function Foot(){
    let showQR = () => {}, removeQR = () => {};

    const wechatEnter = () => {
        const imageDiv = document.getElementById('wechatImage');
        imageDiv.style.display = '';
        clearInterval(removeQR);
        showQR = setInterval(() => {
            if (imageDiv.style.opacity < 0.5){
                imageDiv.style.opacity = (Number(imageDiv.style.opacity)+0.01).toString();
            }
            else{
                clearInterval(showQR);
            }
        }, 6)
    }

    const wechatLeave = () => {
        const imageDiv = document.getElementById('wechatImage');
        clearInterval(showQR);
        removeQR = setInterval(() => {
            if (imageDiv.style.opacity > 0){
                imageDiv.style.opacity = (Number(imageDiv.style.opacity)-0.01).toString();
            }
            else{
                imageDiv.style.display = 'none';
                imageDiv.style.opacity = '0';
                clearInterval(removeQR);
            }
        }, 6)
    }

    return(
        <div>
            <div className="contactInfo" style={{position:"fixed", bottom: '0', width: '100vw', paddingBottom: '1vh', paddingTop:'1vh',
                backgroundColor: "#555555", opacity: 0.5, display: "flex", alignItems: 'center',
                justifyContent: "space-around", fontFamily: 'Verdana, sans-serif'}}>
                <FootText style = {{userSelect: 'none'}} onMouseEnter={wechatEnter} onMouseLeave={wechatLeave}>
                    Wechat: geraintcjy
                </FootText>
                <FootText>
                    Email: geraintcjy@gmail.com
                </FootText>
                <FootText>
                    <a
                        href = "https://github.com/geraintcjy"
                        style = {{textDecoration: 'none', color: CJY_WHITE}}
                        target = "_blank"
                        rel="noreferrer">Github</a>
                </FootText>
                <FootText style = {{userSelect: 'none'}}>
                    Last Updated: August, 2021
                </FootText>
                {/*
                    <FootText style = {{flexGrow: 0.8}}>
                        <a
                            href = "https://beian.miit.gov.cn/"
                            style = {{textDecoration: 'none', color: '#F2F2F2'}}
                            target = "_blank"
                            rel="noreferrer">沪ICP备2021009744号</a>
                    </FootText>
                    */}
            </div>

            <div id='wechatImage' style={{position:"fixed", bottom: '4vh', height: '200px', width: '200px',
                backgroundColor: "#555555", display: 'none', opacity: 0}}>
                <img src="wechat.jpg" alt='wechat QR code' />
            </div>
        </div>
    )
}

const FootText = styled.div`
  flex-grow: 1;
  font-size: 8px;
  padding-left: 4px;
  padding-right: 4px;
`
