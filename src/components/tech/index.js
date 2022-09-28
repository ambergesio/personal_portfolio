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
import mysql from '../../images/techs/mysql.svg';
import next from '../../images/techs/next.svg';
import sass from '../../images/techs/sass.svg';

const Tech = () => {
    return (
        <article id="technologies">
        <div className="section_title">
            <div className="palette_title">
                <img className="palette" src={palette} alt="palette" />
                <img className="arrow" src={arrow} alt="arrow" />
                <p className="subtitle">Tecnologías</p>
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
                <p>
                    <b className="hilight">JavaScript</b> everywhere!
                </p>
            </code>
            <code>
                <p>
                    Luego de la muerte de <b className="hilight">Flash/Actionscrip</b> y la famosa carta de Jobs en 2010, a medida que actionscript dejó de ser soportado, puse el desarrollo
                    multimedia en stand-by para dedicarme exclusivamente al diseño.
                </p>
            </code>
            <code>
                <p>        
                    Años más tarde retomé el desarrollo eligiendo javascript como herramienta central.
                </p>
            </code>
            <code>
                En esta nueva etapa descubrí nuevas tecnologías como <b className="hilight">Node, Express, React </b>
                y <b className="hilight">Mongo</b>, todas basadas en ese lenguaje.
            </code>
            <code>
                Además profundicé mis conocimientos en html5 y css3
            </code>
            <code>
                Éstas son algunas de las tecnologías que manejo:
            </code>
        </div>
        <div className="card tech_card">
            <img className="techs" src={html} alt="html5" title="html5" />
            <img className="techs" src={css} alt="css3" title="css3" />
            <img className="techs" src={js} alt="javascript" title="javascript" />
            <img className="techs" src={reactimg} alt="React.js" title="React.js" />
            <img className="techs" src={node} alt="Node.js" title="Node.js" />
            <img className="techs" src={mongo} alt="Mongo db" title="Mongo db" />
            <img className="techs" src={mysql} alt="Mysql" title="MySql" />
            <img className="techs" src={next} alt="Next.js" title="Next.js" />
            <img className="techs" src={sass} alt="Sass" title="Sass" />
        </div>
    </article>
    );
}

export default Tech;
