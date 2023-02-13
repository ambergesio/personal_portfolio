import React from 'react';
import palette from '../../images/assets/palette.svg';
import arrow from '../../images/assets/arrow.svg';

import mununuras from '../../images/projects/mununuras.jpg';
import fixture from '../../images/projects/fixture.jpg';
// import globe from '../../images/assets/globe.svg';
import emoji from '../../images/articles/success.png';
import github from '../../images/nav/github.svg';
import Twitter from '../csslogos/twitter';
import Youtube from '../csslogos/youtube';
import Tiktok from '../csslogos/tiktok';
import Twitch from '../csslogos/twitch';

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
            <div className="project_subtitle">Mununuras e-commerce</div>
            <img src={mununuras} alt="mununuras e-commerce"/>
            <code>
                Este projecto es una tienda virtual para un emprendimiento familiar de juguetes tejidos al crochet para bebés y niños.
            </code>
            <code>
                Consta de un cliente desarrollado en <b className="hilight">React</b> y una apiREST con <b className="hilight">node/express</b> y <b className="hilight">mongoDB atlas</b> para persistir productos, carritos, usuarios, órdenes de compra y notificaciones de pago. Posee integración de <b className="hilight">MercadoPago</b> (modo prueba) para que la experiencia de compra sea óptima sin salir del sitio.
            </code>
            <div className="project">
    
                <div className="project_border">
                    <div className="project_block">
                        <a className="linkprojecto" href="https://mununuras.up.railway.app" rel="noreferrer" target="_blank">
                        <p>
                            ver tienda online
                        </p>
                        </a>
                    </div>
                </div>

                <div className="project_border">
                    <div className="project_block">
                        <a className="linkprojecto" href="https://github.com/ambergesio/mununuras-e-shop" rel="noreferrer" target="_blank">
                            <img className="project_icon" src={github} alt="mununuras github" />
                            <p>
                                github repo
                            </p>
                        </a>
                    </div>
                </div>

            </div>
        </div>


        <div className="card">
            <div className="balls">
                <div className="red ball"></div>
                <div className="yellow ball"></div>
                <div className="green ball"></div>
            </div>
            <div className="project_subtitle">Fixture Copa del mundo Fifa 2022</div>
            <img src={fixture} alt="fixture 2022"/>
            <code>
                Esta aplicación surgió en una primera instancia como una app para realizar pronósticos del mundial y terminó siendo el fixture para anotar los resultados de los partidos.
            </code>
            
            <code>
                La aplicación está desarrollada en <b className="hilight">React</b> y la apiREST en <b className="hilight">node/express</b> y <b className="hilight">mongoDB atlas.</b>
            </code>
            <code>
                La sesión de usuarios es a traves de jsonwebtoken. El usuario registrado puede guardar u obtener datos guardados de los resultados de partidos que haya ingresado.
                A medida que se van ingresando resultados, la app va calculando las tablas de posiciones de los distintos grupos así como las clasificaciones de las diferentes llaves finales
            </code>

            <div className="project">

                <div className="project_border">
                    <div className="project_block">
                        <a className="linkprojecto" href="https://fixture2022.vercel.app" rel="noreferrer" target="_blank">
                        <p>
                            ver el fixture
                        </p>
                        </a>
                    </div>
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
            <div className="project_subtitle">Disney Plus</div>
            <code>
                Me encuentro desarrollando un clon del sitio de Disney plus con <b className="hilight">Next.js, Node/Express, Sass y Mysql.</b>
            </code>
            <code>
                Login y registro de usuario. Películas y series con sus personajes.
            </code>
            <div className="project">
            
                <div className="project_border">
                    <div className="project_block">
                        <a className="linkprojecto" href="https://github.com/ambergesio/disney-plus-frontend" rel="noreferrer" target="_blank">
                            <img className="project_icon" src={github} alt="disney plus front-end github" />
                            <p>
                                github frontend repo
                            </p>
                        </a>
                    </div>
                </div>

                <div className="project_border">
                    <div className="project_block">
                        <a className="linkprojecto" href="https://github.com/ambergesio/disney-plus-backend" rel="noreferrer" target="_blank">
                            <img className="project_icon" src={github} alt="disney plus back-end github" />
                            <p>
                                github backend repo
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="balls">
                <div className="red ball"></div>
                <div className="yellow ball"></div>
                <div className="green ball"></div>
            </div>
            <div className="project_subtitle">Dibujando con css</div>
            <code>
                Una de las cosas que más me divierte es dibujar con <b className="hilight">css</b>. Replicar logos es una de las mejores maneras que encuentro de combinar diseño y código además de mantener las neuronas activas!.
            </code>
            <div className="logos">
                <Twitter />
                <Youtube />
            </div>
            <div className="logos">
                <Twitch />
                <Tiktok />
            </div>
        </div>

    </article>
    );
}

export default Portfolio;
