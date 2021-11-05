import React from 'react'
import "./Service.css"

export const Service1 = () => {
    return (
        <div>
            <div id="service" className="service-grid">
                <div className="service-left">
                    <img
                        src="Ingenieria.svg"
                        className="service-img"
                        alt="service"
                    />

                </div>
                <div className="service-right">
                    <div className="service-center">
                        <h2 className="service-title">Especialistas en <br/>Ingeniería</h2>
                        <p className="service-text">Contamos con ingenieros, proyectistas,
                            diseñadores, dibujantes y auxiliares especialistas en cada sector de la ingeniería
                            (conceptual, básica y detalle) para colaborar contigo desde evaluar la factibilidad técnica
                            y económica de tu proyecto hasta generar la documentación necesaria para su realización.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
