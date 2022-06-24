import React from 'react';
import palette from '../../images/assets/palette.svg';
import arrow from '../../images/assets/arrow.svg';
import emoji from '../../images/articles/idea.png';

import html from '../../images/techs/html5.svg';
import css from '../../images/techs/css3.svg';
import js from '../../images/techs/js.svg';
import reactimg from '../../images/techs/react.svg';
import node from '../../images/techs/node.svg';
import mongo from '../../images/techs/mongo.svg';

const Tech = () => {
    return (
        <article id="technologies">
        <div className="section_title">
            <div className="palette_title">
                <img className="palette" src={palette} alt="palette" />
                <img className="arrow" src={arrow} alt="arrow" />
                <p className="subtitle">Tecnologies</p>
                <img className="title_ilustration" src={emoji} alt="technologies" />
            </div>
        </div>
        <div className="card">
            <div className="balls">
                <div className="red ball"></div>
                <div className="yellow ball"></div>
                <div className="green ball"></div>
            </div>
            <code>
                <b className="hilight">JavaScript everywhere!</b> Yes!.
            </code>
            <code>
                After a broken heart and many years of mourning Flash/ActionScript, I felt in love again. This time, the object of my love was <b className="hilight">JavaScript</b>.
            </code>
            <code>
                I discovered a whole new world of technologies like <b className="hilight">Node, Express, React, and Mongo</b> which are all JavaScript based.
            </code>
            <code></code>
            <code>
                I am proficient in these technologies:
            </code>
        </div>
        <div className="tech_card">
            <img className="techs" src={html} alt="html5" title="html5" />
            <img className="techs" src={css} alt="css" title="css" />
            <img className="techs" src={js} alt="js" title="javascript" />
            <img className="techs" src={reactimg} alt="react" title="React.js" />
            <img className="techs" src={node} alt="node" title="Node.js" />
            <img className="techs" src={mongo} alt="mongo" title="Mongo db" />
        </div>
    </article>
    );
}

export default Tech;
