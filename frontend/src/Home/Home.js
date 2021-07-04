import React, {useEffect} from 'react';
import DjangoCSRFToken from "django-react-csrftoken/src";
import styled from 'styled-components';
import axios from 'axios';
import * as THREE from 'three';
import * as config from '../Config';
import domready from 'domready';


export default function Home (){
    useEffect(()=>{
        axios.post(config.BACKEND_DOMAIN + "/initialization/", {})
            .then(res => {})
            .catch(error => {})

    setRainBack();
    })

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
        <div className= 'Home'
             style = {{textAlign: 'center', fontFamily: 'Hiragino Sans GB', overflowX: 'hidden', backgroundColor: 'transparent', height: '100vh'}}>
            <div className='text' style = {{color: '#F2F2F2', display: 'flex', flexDirection: 'column'}}>
                <MainTitle isPC = {isPC()} style = {{marginTop: '5vh'}}>
                    Jiayuan Chen (陈嘉缘)
                </MainTitle>
                <div id={"photo"} style = {{marginTop: '5vh'}}>
                    <img src={"photo-small.jpg"} alt={"photo"} width={"300px"}/>
                </div>
                <Text isPC = {isPC()} style = {{marginTop: '5vh'}}>
                    I am Jiayuan Chen (also called Geraint Chen), a senior studying Civil Engineering at Tongji University.
                </Text>
                <Text isPC = {isPC()}>
                    I see myself as a novelty seeker, a team player and an eclecticist. I actively took part in a variety of interdisciplinary researches and internships, concerning the areas such as structural design and analysis, digital twin & machine learning, and web & software development. In addition to my academic endeavors, I am also quite willing to connect with people and to engage in all kinds of entertaining and sports activities.
                </Text>
                <Text isPC = {isPC()}>
                    Soon, I am going to Georgia Tech to pursue a Master's degree in Computational Science and Engineering. I will graduate in 2023 and is currently looking for summer intern opportunities.
                    Should you have any questions or requests, please feel free to contact me.
                </Text>

                <Text isPC = {isPC()}>
                    <span>
                        You can acquire my CV from
                    </span>
                    {' '}
                    <span>
                        <a style = {{display: "inline-block", fontWeight: 'bold'}}
                           href = "CV-JiayuanChen.pdf"
                           target = "_blank">
                            here
                        </a>
                    </span>
                </Text>

                <form method = 'POST' action = {config.BACKEND_DOMAIN + "/postMessage/"} style = {{marginTop: '4vh', textAlign: 'center'}} onSubmit={messageBoardCheck}>
                    <DjangoCSRFToken />
                    <Title>Below is a message board</Title>
                    <InputBox name = 'content' id = 'content' style = {{width: '90vw'}}/>
                    <div style = {{width: '60vw', height: '2px', backgroundColor: '#CC5500', margin: 'auto', marginBottom: '5vh'}}/>
                    <Title>Signature</Title>
                    <InputBox name = 'name' id = 'name' style = {{width: '200px'}}/>
                    <div style = {{width: '220px', height: '2px', backgroundColor: '#CC5500', margin: 'auto'}}/>
                    <Submit type = 'submit' value = 'Send' />
                </form>

                <div style={{height: '8vh'}} />

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
                            style = {{textDecoration: 'none', color: '#F2F2F2'}}
                            target = "_blank"
                            rel="noreferrer">Github</a>
                    </FootText>
                    <FootText style = {{userSelect: 'none'}}>
                        Last Updated: June, 2021
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
            <div id = "home-background" style = {{position: 'absolute', zIndex: '-1', top: '0'}} />
        </div>
    )
}

export function setRainBack(){
    let scene, camera, renderer, cloudParticles = [], flash, rain, rainGeo, rainCount = 8000;

    function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 1;
        camera.rotation.x = 1.16;
        camera.rotation.y = -0.12;
        camera.rotation.z = 0.27;
        const ambient = new THREE.AmbientLight(0x555555);
        scene.add(ambient);
        const directionalLight = new THREE.DirectionalLight(0xffeedd);
        directionalLight.position.set(0,0,1);
        scene.add(directionalLight);
        flash = new THREE.PointLight(0x062d89, 30, 500 ,4.5);
        flash.position.set(200,300,100);
        scene.add(flash);
        renderer = new THREE.WebGLRenderer();
        scene.fog = new THREE.FogExp2(0x11111f, 0.002);
        renderer.setClearColor(scene.fog.color);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('home-background').appendChild(renderer.domElement);

        let drops = [];
        for(let i=0; i<rainCount; i++) {
            drops.push(Math.random() * 400 - 200); //x
            drops.push(Math.random() * 1000 - 500); //y
            drops.push(Math.random() * 400 - 200); //z
            drops.push(0); //velocity
        }
        drops = new Float32Array(drops);
        rainGeo = new THREE.BufferGeometry();
        rainGeo.setAttribute( 'position', new THREE.BufferAttribute(drops, 4));

        const rainMaterial = new THREE.PointsMaterial({
            color: 0xaaaaaa,
            size: 0.1,
            transparent: true
        });
        rain = new THREE.Points(rainGeo, rainMaterial);
        scene.add(rain);

        domready(function(){
            const loader = new THREE.TextureLoader();
            loader.load("smoke-1.png", (texture) => {
                let cloudGeo = new THREE.PlaneBufferGeometry(500, 500);
                const cloudMaterial = new THREE.MeshLambertMaterial({
                    map: texture,
                    transparent: true,
                })
                for(let p=0; p<25; p++) {
                    let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
                    cloud.position.set(
                        900 * (Math.random()-0.5), //控制云大约左右方向移动
                        500, //控制云的高度
                        700 * (Math.random()-0.5) - 400 //控制云大约竖直方向移动
                    );
                    cloud.rotation.x = 1.16;
                    cloud.rotation.y = -0.12;
                    cloud.rotation.z = Math.random()*360;
                    cloud.material.opacity = 0.6;
                    cloudParticles.push(cloud);
                    scene.add(cloud);
                }
                animate();
            });
        })
    }

    function animate() {
        cloudParticles.forEach(p => {
            p.rotation.z -= 0.002;
        });
        for (let i=0; i<rainGeo.attributes.position.count; i++){
            rainGeo.attributes.position.array[4*i+3] -= 0.1 + Math.random() * 0.1;
            rainGeo.attributes.position.array[4*i+1] += rainGeo.attributes.position.array[4*i+3];
            if (rainGeo.attributes.position.array[4*i+1] < -500){
                rainGeo.attributes.position.array[4*i+1] = 500;
                rainGeo.attributes.position.array[4*i+3] = 0;
            }
        }
        // rainGeo.vertices.forEach(p => {
        //     p.velocity -= 0.1 + Math.random() * 0.1;
        //     p.y += p.velocity;
        //     if (p.y < -200) {
        //         p.y = 200;
        //         p.velocity = 0;
        //     }
        // });
        rainGeo.attributes.position.needsUpdate = true;
        rain.rotation.y += 0.002;
        if(Math.random() > 0.98 || flash.power > 100) {
            if(flash.power < 100)
                flash.position.set(
                    Math.random()*400,
                    300 + Math.random() *200,
                    100
                );
            flash.power = 50 + Math.random() * 500;
        }
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    init();
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
const FootText = styled.div`
  flex-grow: 1;
  font-size: 8px;
  padding-left: 4px;
  padding-right: 4px;
`