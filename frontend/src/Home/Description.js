import React from 'react';
import { isPC } from "./Home";
import styled from "styled-components";

export default function Description() {
    return (
        <div>
            <Text isPC = {isPC()}>&emsp;&emsp;
                <span>My name is Jiayuan Chen, a Master's Computational Science & Engineering student of Georgia Tech.</span>
            </Text>
            <Text isPC = {isPC()}>&emsp;&emsp;
                <span>I see myself as a novelty seeker, a team player and an eclecticist. </span>
                <span>When I was in my undergraduate, I actively took part in a variety of interdisciplinary research projects and internships </span>
                <span>in areas including structural design & analysis, </span>
                <span>digital twin & machine learning in civil engineering, model numerical simulation and engineering software development. </span>
                <span>Without doubt, these experience have improved my academic and research skills, making me an outstanding graduate of Tongji University.</span>
                <span>More importantly, it also allowed me to accumulate plenty of valuable practical experience.</span>
            </Text>
            <Text isPC = {isPC()}>&emsp;&emsp;
                <span>Though being a bit nerdy in school, I am quite outgoing and approachable in life off campus. </span>
                <span>I love to connect with people and to engage in a variety of social and sports activities. </span>
                <span>For me, talking to people is an effective approach to addressing problems in life, and it usually will be a great pleasure.</span>
            </Text>
            <Text isPC = {isPC()}>&emsp;&emsp;
                <span>I will graduate in 2023 and am currently looking for 2022 summer internship opportunities. </span>
                <span>Should you have any questions, please feel free to contact me.</span>
            </Text>

            <Text isPC = {isPC()}>&emsp;&emsp;
                    <span>
                        You can download my CV from
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
        </div>
    )
}

const Text = styled.div`
  text-align: justify;
  width: ${props => {return props.isPC ? '100%' : '100%'}};
  margin: 0 auto 8px auto;
  font-size: 16px;
  line-height: 30px;
  font-family: Verdana, PMingLiU, sans-serif;
  -webkit-user-select: none;
  -moz-user-select:none;
  -ms-user-select:none;
`
