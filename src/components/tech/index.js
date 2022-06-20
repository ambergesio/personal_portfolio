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
        <article id="aboutme">
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
                <b class="hilight">JavaScript everywhere!</b> Yes!.
            </code>
            <code>
                After a broken heart and many years of mourning Flash/ActionScript, I felt in love again. This time, the object of my love was <b class="hilight">JavaScript</b>.
            </code>
            <code>
                I discovered a whole new world of technologies like <b class="hilight">Node, Express, React, and Mongo</b> which are all JavaScript based.
            </code>
            <code></code>
            <code>
                I am proficient in these technologies:
            </code>
        </div>
        <div class="tech_card">
            <img class="techs" src={html} alt="html5" title="html5" />
            <img class="techs" src={css} alt="css" title="css" />
            <img class="techs" src={js} alt="js" title="javascript" />
            <img class="techs" src={reactimg} alt="react" title="React.js" />
            <img class="techs" src={node} alt="node" title="Node.js" />
            <img class="techs" src={mongo} alt="mongo" title="Mongo db" />
        </div>
    </article>
    );
}

export default Tech;
