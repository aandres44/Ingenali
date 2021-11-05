import React from 'react'
import "./Service.css"

export const Service5 = () => {
    return (
        <div className="service-alignment">
            <div id="service4" className="service-grid">
                <div className="service-left">
                   <object
                       type="image/svg+xml" data="https://firebasestorage.googleapis.com/v0/b/ingenali-9f109.appspot.com/o/Electricos.svg?alt=media&token=4452ff91-e7eb-426f-aba7-127b11ec9be6"
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
