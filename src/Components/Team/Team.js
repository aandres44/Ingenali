import React from 'react'
import "../Services/Service.css"

export const Team = () => {
    return (
        <div id="service2" className="service-grid">
            <div className="service-left">
                <img
                    src="Team1.svg"
                    className="service-img"
                    alt="service"
                />

            </div>
            <div className="service-right">
                <div className="grid-center">
                    <h2 className="service-title">Our Team</h2>
                    <p className="service-text">- Ingeniera industrial y de sistemas; modalidad Emprendedora, Tec de Monterrey 2006
- Master en Administración, Global MBA for Latinamerican Leaders, Thunderbird, Arizona
- Especialidad en Growing Business & Family Business, Babson College, Massachusetts
- Certificación en Liderazgo, Comunicación Efectiva, Negociación y Ventas, Armstrong Instructores- Dreambuilding Coach, Life Mastery Institute
- Consultora en Desarrollo Organizacional y Alineación Estratégica
</p>
                </div>

            </div>

        </div>
    )
}
