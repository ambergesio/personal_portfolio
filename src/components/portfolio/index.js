import React from 'react';
import palette from '../../images/assets/palette.svg';
import arrow from '../../images/assets/arrow.svg';
import emoji from '../../images/articles/success.png';

const Portfolio = () => {
    return (
        <article id="portfolio">
        <div className="section_title" id="portfolio">
            <div className="palette_title">
            <img className="palette" src={palette} alt="palette" />
                <img className="arrow" src={arrow} alt="arrow" />
                <p className="subtitle">Portfolio</p>
                <img className="title_ilustration" src={emoji} alt="portfolio" />
            </div>
        </div>

        <div className="card">
            <div className="balls">
                <div className="red ball"></div>
                <div className="yellow ball"></div>
                <div className="green ball"></div>
            </div>
            <code>
                <b className="hilight">Project nº1</b>
            </code>
            <code>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <b className="hilight">JavaScript</b>.
            </code>
            <code>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <b className="hilight">Node, Express, React, and Mongo</b>
            </code>
            <div className="techno_icons"></div>
        </div>
        <div className="card">
            <div className="balls">
                <div className="red ball"></div>
                <div className="yellow ball"></div>
                <div className="green ball"></div>
            </div>
            <code>
                <b className="hilight">Project nº2</b>
            </code>
            <code>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <b className="hilight">JavaScript</b>.
            </code>
            <code>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <b className="hilight">Node, Express, React, and Mongo</b>
            </code>
        </div>

    </article>
    );
}

export default Portfolio;
