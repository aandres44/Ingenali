import React from 'react'
import "./Home.css"

export const Home = () => {
    return (
        <div id="home" className="home-separator">
            <div className="home-grid">
                <div className="home-left">
                    <h1 className="home-title">¿Necesitas personal para <span className="blue-text">tu proyecto?</span></h1>
                    <p className="home-text">¡Conseguimos el personal perfecto para tus necesidades! Somos especialistas en administración y gestión de proyectos.</p>
                    <button className="home-button-blue">
                        <span className="home-button-text">Más Información</span>
                    </button>
                </div>
                <div className="home-right">
                    <img
                        src="Home-logo.svg"
                        className="home-img"
                        alt="REPSE"
                    />
                </div>
            </div>

            <img
                src="secodisa.svg"
                className="home-img"
                alt="REPSE"
            />
        </div>

    )
}
