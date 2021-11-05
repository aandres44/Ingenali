import React from 'react'
import "./Service.css"

export const Service1 = () => {
    return (
        <div className="service-alignment">
            <div id="service" className="service-grid">
                <div className="service-left">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/ingenali-9f109.appspot.com/o/Ingenieria.svg?alt=media&token=ba4f028b-46e0-422e-8143-f267f41ece3a"
                        className="service-img"
                        alt="Ingenieria"
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
