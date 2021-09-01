import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import * as THREE from 'three';
import * as config from '../Config';
import domready from 'domready';
import Description from "./Description";
import MessageBoard from "./MessageBoard";
import Foot from "./Foot";


export default function Home () {
    useEffect(()=>{
        axios.post(config.BACKEND_DOMAIN + "/initialization/", {})
            .then(res => {})
            .catch(error => {})

    setRainBack();
    })

    return(
        <div className= 'Home'
             style = {{textAlign: 'center', fontFamily: 'Hiragino Sans GB', overflowX: 'hidden', backgroundColor: 'transparent', height: '100vh'}}>
            <div className='text' style = {{color: '#F2F2F2', display: 'flex', flexDirection: 'column'}}>
                <MainTitle isPC = {isPC()} style = {{marginTop: '5vh', marginBottom: '5vh'}}>
                    Jiayuan Chen
                </MainTitle>

                <div style = {{display: 'flex', width: '60%', margin: '0 auto'}}>
                    <div style = {{flex: '18 10 0'}}>
                        <Description />
                    </div>
                    <SpaceDesPic isPC = {isPC()} />
                    <Pic isPC = {isPC()}>
                        <img src="photo-small.jpg" alt="Myself" width="100%" />
                    </Pic>
                </div>

                <MessageBoard />

                <div style = {{marginTop: '10vh'}} />

                <Foot />

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
export function isPC() {
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

const MainTitle = styled.div`
  font-size: ${props => {return props.isPC ? '35px' : '25px'}};
  font-family: Verdana, PMingLiU, sans-serif;
  -webkit-user-select: none;
  -moz-user-select:none;
  -ms-user-select:none;
`
const SpaceDesPic = styled.div`
  flex: ${props => {return props.isPC ? '1 1 0' : '0 0 0'}};
`
const Pic = styled.div`
  flex: ${props => {return props.isPC ? '6 4 50px' : '0 0 0'}};
  display: flex;
  align-items: center;
`