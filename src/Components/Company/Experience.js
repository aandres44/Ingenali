import React from 'react'
import "./Experience.css"

export const Experience = () => {
    return (
        <div className="experience-card">
            <div className="exp-col">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/ingenali-9f109.appspot.com/o/Experience-exp.svg?alt=media&token=429bf5c4-4849-4ca9-8a1f-25f8a9c8ae03"
                    className="exp-icon"
                />
                <div className="exp-mini-card">
                    <p className="exp-number-big exp-dark-red">35+</p>
                    <p className="exp-text exp-dark-red">Años de Experiencia</p>
                </div>
            </div>
            <div className="exp-col">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/ingenali-9f109.appspot.com/o/Exp-projects.svg?alt=media&token=e64350ad-b0c5-4d8b-805f-b810ab748d5a"
                    className="exp-icon"
                />
                <div className="exp-mini-card">
                    <p className="exp-number-big">450+</p>
                    <p className="exp-text">Proyectos Completados</p>
                </div>
            </div>
            <div className="exp-col">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/ingenali-9f109.appspot.com/o/Exp-clients.svg?alt=media&token=88a443fc-d70a-4803-9a1e-3888407b6d9c"
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
