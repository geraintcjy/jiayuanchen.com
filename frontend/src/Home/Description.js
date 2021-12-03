import React from 'react';
import { isPC } from "./Home";
import styled from "styled-components";

export default function Description() {
    return (
        <div>
            <Text isPC = { isPC() }>&emsp;&emsp;
                <span>My name is Jiayuan Chen, a Master's in CSE major at Georgia Tech.</span>
            </Text>
            <Text isPC = { isPC() }>&emsp;&emsp;
                <span>I see myself as a novelty seeker, a team player and an eclecticist. </span>
                <span>During my undergraduate study, I actively took part in a variety of interdisciplinary research projects and internships </span>
                <span>regarding structural analysis, </span>
                <span>digital twin & machine learning, numerical simulation and software development. </span>
                <span>I really learned a lot from these experience.</span>
            </Text>
            <Text isPC = { isPC() }>&emsp;&emsp;
                <span>I am a quite outgoing and approachable person. </span>
                <span>I love to connect with people and to engage in a variety of social and sports activities. </span>
                <span>Among all these, basketball, soccer, board games and Paradox games (they are awesome!) are my favorite. </span>
                <span style = {{fontWeight: "bold"}}>I am looking for someone to share Spotify family plan. If you are interested, please contace me.</span>
                <span>The photo on the right was shot by my GF during our trip to NYC in September. I super love NYC (and Ichiran) (and my GF).</span>
            </Text>
            <Text isPC = { isPC() }>&emsp;&emsp;
                <span>My estimated graduation date is in May, 2023 and I am currently looking for 2022 summer internship opportunities. </span>
                <span>Should you have any questions, please feel free to contact me. </span>
                <span>I would really appreciate it if you could offer any job information, opportunities or referrals. </span>
            </Text>

            <Text isPC = { isPC() }>&emsp;&emsp;
                    <span>
                        You can download my CV from
                    </span>
                    {' '}
                    <span>
                        <a style = {{display: "inline-block", fontWeight: 'bold'}}
                           href = "Resume-JiayuanChen.pdf"
                           target = "_blank">
                            here
                        </a>
                    </span>
                    {'.'}
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
