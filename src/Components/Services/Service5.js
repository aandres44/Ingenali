import React from 'react'
import "./Service.css"

export const Service5 = () => {
    return (
        <div className="service-alignment">
            <div id="service4" className="service-grid">
                <div className="service-left">
                    <img
                        src="Electricos.svg"
                        className="service-img"
                        alt="service"
                    />

                </div>
                <div className="service-right">
                    <div className="service-center">
                        <h2 className="service-title">Especialistas en <br />Mantenimiento <br />Industrial</h2>
                        <p className="service-text">
                            Contamos con cuadrillas de personal calificado para el mantenimiento de tus instalaciones con el objetivo de lograr la optimización de tus recursos y fomentar la prevención.
                        </p>

                        <ul>
                            <p>Nuestro personal está capacitado en:</p>
                            <li>mantenimiento electromecánico general</li>
                            <li>mantenimiento eléctrico industrial</li>
                            <li>mantenimiento mecánico</li>
                            <li>mantenimiento de equipos de producción</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
