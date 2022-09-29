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
                    <p className="subtitle">Sobre mi</p>
                    <img className="title_ilustration" src={emoji} alt="about me" />
                </div>
            </div>
            <div className="card">
                <div className="balls">
                    <div className="red ball"></div>
                    <div className="yellow ball"></div>
                    <div className="green ball"></div>
                </div>
                <div className="section_subtitle">Perfil</div>
                <code>
                    <p>
                        Profesional del <b className="hilight">diseño gráfico </b>
                        con más de 20 años de experiencia y <b className="hilight">
                        desarrollador javascript fullstack MERN</b> ((M)ongoDB/(M)ySql, (E)xpress, (R)eact/next, (N)ode.)
                    </p>
                </code>
                <div className="section_subtitle">Armada Argentina</div>
                <code>
                    <p>
                        Desde 2005 me desempeño como
                        <b className="hilight"> diseñador gráfico </b>
                        en Gaceta Marinera, que pertenece al Departamento de Comunicación de la Secretaría
                        General Naval de la Armada Argentina. Allí comencé desarrollando producciones
                        multimediales en <b className="hilight"> Actionscript </b>
                        y realizando diseño editorial.
                    </p>
                    <p>
                        Actualmente me encargo del diseño de las infografías para la revista "Gaceta Marinera"
                        además de otras tareas, tales como animaciones en After Effects, diseños y desarrollos para la web 
                        y colaboraciones para distintas áreas de la Armada.
                    </p>
                </code>
                <div className="section_subtitle">Dirección de Cultura</div>
                <code>
                    Entre 2003 y 2011 trabajé para la<b className="hilight"> Dirección de Cultura de Coronel Rosales </b>
                    donde me desempeñé como diseñador y desarrollador web encargándome de la cartelera cultural online de dicha dirección (html, css, javascript, jquery). 
                </code>
                <div className="section_subtitle">Mis comienzos...</div>
                <code>
                    Inicié mis estudios de diseño en 1997 y dí mis primeros pasos en el desarrollo con ActionScript allá por el año 1999. Eran días de la web 1.0.

                </code>
                <div className="section_subtitle">Front, back.... fullstack?</div>
                <code>
                    <p>
                        Amo tanto el <b className="hilight">frontend</b> como el <b className="hilight">backend</b>!.
                    </p>
                    <p>
                        Ser diseñador y animador, sumado a las skills
                        de desarrollo fullstack, me dan la capacidad de crear aplicaciones web de punta a punta,
                        desde la concepción misma de la UI/UX, hasta la programación, desarrollo y deployment.
                    </p>
                </code>
            </div>
        </article>
    );
}

export default About;
