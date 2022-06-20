import React from 'react';
import palette from '../../images/assets/palette.svg';
import arrow from '../../images/assets/arrow.svg';
import emoji from '../../images/articles/waving.png';

const About = () => {
    return (
        <article id="aboutme">
        <div className="section_title">
            <div className="palette_title">
                <img className="palette" src={palette} alt="palette" />
                <img className="arrow" src={arrow} alt="arrow" />
                <p className="subtitle">About me</p>
                <img className="title_ilustration" src={emoji} alt="about me" />
            </div>
        </div>
        <div className="card">
            <div className="balls">
                <div className="red ball"></div>
                <div className="yellow ball"></div>
                <div className="green ball"></div>
            </div>
            <code>
                Hi!. My name is Abel Martin, but everybody knows me as "Bones". I'm a <b className="hilight">graphic designer</b> and a <b className="hilight">MERN Stack developer.</b> (MERN stands for (M)ongoDB, (E)xpress, (R)eact, and (N)ode.
            </code>
            <code>
                As a <b className="hilight">graphic designer</b>, I'm currently working at the Press Office of the Argentine Navy. I started in 2005. I am in <b className="hilight">charge of the infographics department</b> and also do editorial design.
            </code>
            <code>
                I’ve been designing since 1997 and developing in ActionScript since 1999. After flash was killed, I put development aside and dedicated full time to graphic design. <b className="hilight">Almost two years ago</b> I started learning how to work with technologies such as <b className="hilight">react, mongo, and express/node</b>.
            </code>
            <code>
                I love both <b className="hilight">frontend</b> and <b className="hilight">backend</b>.
            </code>
        </div>
    </article>
    );
}

export default About;
