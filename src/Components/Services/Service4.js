import React from 'react'
import "./Service.css"

export const Service4 = () => {
    return (
        <div>
            <div id="service4" className="service-grid">
                <div className="service-left">
                    <img
                        src="Civil.svg"
                        className="service-img"
                        alt="service"
                    />

                </div>
                <div className="service-right">
                    <div className="service-center">
                        <h2 className="service-title">Especialistas en <br />Obra Civil</h2>
                        <p className="service-text">
                            Disponemos de profesionales especializados en dirección de obra, supervisión y control (estimadores y administradores) y personal para la evaluación de ofertas.<br /><br />
                            Nuestro personal está capacitado para avalar el cumplimiento de las especificaciones técnicas, administrativas y normativas de los contratistas que integran los proyectos de construcción.<br /><br />
                            Te ayudamos a garantizar la correcta administración de tu proyecto de inversión y de los recursos asignados a la obra civil.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
