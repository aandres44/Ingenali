import React from 'react'
import "../Services/Service.css"
import "./Team.css"

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
                <div className="team-grid-center">
                    <h2 className="team-title">Our Team</h2>
                    <h2 className="team-title">Yetzirah Vizcarra <br />CEO</h2>
                    <ul>
                        <li className="team-text">
                            Ingeniera industrial y de sistemas; modalidad Emprendedora, Tec de Monterrey 2006
                        </li>
                        <li className="team-text">
                            Master en Administración, Global MBA for Latinamerican Leaders, Thunderbird, Arizona
                        </li>
                        <li className="team-text">
                            Especialidad en Growing Business & Family Business, Babson College, Massachusetts
                        </li>
                        <li className="team-text">
                            Certificación en Liderazgo, Comunicación Efectiva, Negociación y Ventas, Armstrong Instructores- Dreambuilding Coach, Life Mastery Institute
                        </li>
                        <li className="team-text">
                            Consultora en Desarrollo Organizacional y Alineación Estratégica
                        </li>
                    </ul>

                </div>

            </div>

        </div>
    )
}
