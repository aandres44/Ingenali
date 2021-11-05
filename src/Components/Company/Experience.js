import React from 'react'
import "./Experience.css"

export const Experience = () => {
    return (
        <div className="experience-card">
            <div className="exp-col">
                <img
                    src="Experience-exp.svg"
                    className="exp-icon"
                />
                <div className="exp-mini-card">
                    <p className="exp-number-big exp-dark-red">35+</p>
                    <p className="exp-text exp-dark-red">Años de Experiencia</p>
                </div>
            </div>
            <div className="exp-col">
                <img
                    src="Exp-projects.svg"
                    className="exp-icon"
                />
                <div className="exp-mini-card">
                    <p className="exp-number-big">450+</p>
                    <p className="exp-text">Proyectos Completados</p>
                </div>
            </div>
            <div className="exp-col">
                <img
                    src="Exp-clients.svg"
                    className="exp-icon"
                />

                <div className="exp-mini-card">
                    <p className="exp-number-big">350+</p>
                    <p className="exp-text">Clientes Satisfechos</p>
                </div>

            </div>
            
        </div>
    )
}
