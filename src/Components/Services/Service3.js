import React from 'react'
import "./Service.css"

export const Service3 = () => {
    return (
        <div className="service-alignment">
            <div id="service3" className="service-grid">
                <div className="service-left">
                   <object
                       type="image/svg+xml" data="https://firebasestorage.googleapis.com/v0/b/ingenali-9f109.appspot.com/o/Electricos.svg?alt=media&token=4452ff91-e7eb-426f-aba7-127b11ec9be6"
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
