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
                        src="https://firebasestorage.googleapis.com/v0/b/ingenali-9f109.appspot.com/o/Home-logo.svg?alt=media&token=5121d760-e9d9-48f6-a54a-f35053389a5c"
                        className="home-img"
                        alt="REPSE"
                    />
                </div>
            </div>

            <img
                src="https://firebasestorage.googleapis.com/v0/b/ingenali-9f109.appspot.com/o/secodisa.svg?alt=media&token=aa2ecb63-3cbe-488d-844e-4331e032a4c0"
                className="home-img"
                alt="REPSE"
            />
        </div>

    )
}
