import React from 'react';
import { isPC } from "./Home";
import styled from "styled-components";

export default function Description() {
    return (
        <div>
            <Text isPC = { isPC() }>&emsp;&emsp;
                <span>Hi there! Welcome to my website and thanks for visiting! </span>
                <span>My name is Jiayuan (jah-yoo-aan) Chen, and I am a CSE Master's student at Georgia Tech.</span>
            </Text>
            <Text isPC = { isPC() }>&emsp;&emsp;
                <span>I see myself as a novelty seeker, a hard worker as well as a perfect team player. </span>
                <span>The projects I have worked on in school were mainly about Digitalization and Machine Learning in Civil Engineering. </span>
                <span>Through my last two years in undergraduate I participated in a couple of research programs and competitions, </span>
                <span>which were quite interesting could have potential applications in future structures' development and maintenance. </span>
            </Text>
            <Text isPC = { isPC() }>&emsp;&emsp;
                <span>I play a variety of games and activities. </span>
                <span>Among all, basketball, soccer, and board games are my favorite. I am also a big fan of Paradox games and I wasted a lot of time on them, which was not very good. </span>
                <span>The photo on the right was shot by my GF during our trip to SLC this winter. It was such a wonderful trip. Definitely would visit again. </span>
            </Text>
            <Text isPC = { isPC() }>&emsp;&emsp;
                <span>My graduate date can be either in Dec, 2022 or in May, 2023, depending on if I need to conduct a Co-op internship or not. </span>
                <span>I am currently looking for 2022 summer internship as well as Fall 2022 Co-op internship opportunities. </span>
                <span>Please feel free to contact me about anything :) </span>
            </Text>

            <Text isPC = { isPC() }>&emsp;&emsp;
                    <span>
                        BTW, You could download my resume through this
                    </span>
                    {' '}
                    <span>
                        <a style = {{display: "inline-block", fontWeight: 'bold'}}
                           href = "Resume-JiayuanChen.pdf"
                           target = "_blank">
                            link
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
