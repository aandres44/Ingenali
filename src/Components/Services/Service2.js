import React from 'react'
import "./Service.css"

export const Service2 = () => {
    return (
        <div className="service-alignment">
            <div id="service2" className="service-grid">
                <div className="service-left">
                    <img
                        src="Mecanicos.svg"
                        className="service-img"
                        alt="service"
                    />

                </div>
                <div className="service-right">
                    <div className="service-center">
                        <h2 className="service-title">Especialistas en <br />Proyectos Mecánicos y<br /> de Fabricación</h2>
                        <p className="service-text">Contamos con mano de obra especializada en montajes de equipos e instalaciones o reubicación de máquinas y líneas completas de producción.
                            Somos especialistas en soldadura y tuberías en acero inoxidable al carbón y aleaciones.
                            Disponemos de un taller propio de fabricación certificado por ASME y AISC.</p>
                    </div>
                </div>

            </div>
        </div>

    )
}
