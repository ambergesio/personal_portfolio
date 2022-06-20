import React from 'react';
import palette from '../../images/assets/palette.svg';
import arrow from '../../images/assets/arrow.svg';
import emoji from '../../images/articles/success.png';

const Portfolio = () => {
    return (
        <article id="portfolio">
        <div class="section_title" id="portfolio">
            <div class="palette_title">
            <img className="palette" src={palette} alt="palette" />
                <img className="arrow" src={arrow} alt="arrow" />
                <p className="subtitle">Portfolio</p>
                <img className="title_ilustration" src={emoji} alt="portfolio" />
            </div>
        </div>

        <div class="card">
            <div class="balls">
                <div class="red ball"></div>
                <div class="yellow ball"></div>
                <div class="green ball"></div>
            </div>
            <code>
                <b class="hilight">Proyect nº1</b>
            </code>
            <code>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <b class="hilight">JavaScript</b>.
            </code>
            <code>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <b class="hilight">Node, Express, React, and Mongo</b>
            </code>
            <div class="techno_icons"></div>
        </div>
        <div class="card">
            <div class="balls">
                <div class="red ball"></div>
                <div class="yellow ball"></div>
                <div class="green ball"></div>
            </div>
            <code>
                <b class="hilight">Proyect nº2</b>
            </code>
            <code>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <b class="hilight">JavaScript</b>.
            </code>
            <code>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <b class="hilight">Node, Express, React, and Mongo</b>
            </code>
        </div>

    </article>
    );
}

export default Portfolio;
