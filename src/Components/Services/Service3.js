import React from 'react'
import "./Service.css"

export const Service3 = () => {
    return (
        <div>
            <div id="service3" className="service-grid">
                <div className="service-left">
                    <img
                        src="Electricos.svg"
                        className="service-img"
                        alt="service"
                    />

                </div>
                <div className="service-right">
                    <div className="service-center">
                        <h2 className="service-title">Especialistas en <br />Proyectos Eléctricos</h2>
                        <p className="service-text">
                            Nuestro personal está especializado en instalaciones eléctricas de alta, media y baja tensión.
                            Especialistas en instalación de transformadores, tableros de control, pararrayos, sistemas contra incendios, sistemas HVAC y sistemas de acceso, voz y datos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
