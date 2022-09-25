import React from 'react';
import palette from '../../images/assets/palette.svg';
import arrow from '../../images/assets/arrow.svg';

import mununuras from '../../images/proyects/mununuras.jpg';
import globe from '../../images/assets/globe.svg';
import emoji from '../../images/articles/success.png';
import github from '../../images/nav/github.svg';

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
            <div className="proyect_subtitle">Mununuras e-commerce</div>
            <img src={mununuras} alt="mununuras e-commerce"/>
            <code>
                Este proyecto es una tienda virtual para un emprendimiento familiar de juguetes tejidos al crochet para bebés y niños.
            </code>
            <code>
                Consta de un cliente desarrollado en <b className="hilight">React</b> y una apiREST con <b className="hilight">node/express</b> y <b className="hilight">mongoDB atlas</b> para persistir productos, carritos, usuarios, órdenes de compra y notificaciones de pago. Posee integración de <b className="hilight">MercadoPago</b> (modo prueba) para que la experiencia de compra sea óptima sin salir del sitio.
            </code>
            <div className="proyect">
                <div className="proyect_block">
                    <a className="linkproyecto" href="https://mununuras.up.railway.app" rel="noreferrer" target="_blank">
                    <img className="project_icon" src={globe} alt="mununuras github" />
                    <p>
                        ver tienda online
                    </p>
                    </a>
                </div>
                <div className="proyect_block">
                    <a className="linkproyecto" href="https://github.com/ambergesio/mununuras-e-shop" rel="noreferrer" target="_blank">
                        <img className="project_icon" src={github} alt="mununuras github" />
                        <p>
                            github repo
                        </p>
                    </a>
                </div>
            </div>
        </div>


        <div className="card">
            <div className="balls">
                <div className="red ball"></div>
                <div className="yellow ball"></div>
                <div className="green ball"></div>
            </div>
            <code>
                <b className="hilight">Coming soon...</b>
            </code>
            <div className="proyect_subtitle">Disney Plus clone</div>
            <code>
                Clone del sitio de Disney plus desarrollado con <b className="hilight">Next.js, Node/Express, Sass y Mysql.</b>
            </code>
            <code>
                Login y registro de usuario. Películas y series con sus personajes.
            </code>
        </div>

    </article>
    );
}

export default Portfolio;
