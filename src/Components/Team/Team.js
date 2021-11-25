import React from 'react'
import "../Services/Service.css"
import "./Team.css"

export const Team = () => {
    return (
        <div className="team-alignment">
            <h2 className="team-title">Nuestro Equipo</h2>
            <div id="our-team" className="service-grid">
                
                <div className="service-left">
                   <object
                       type="image/svg+xml" data="https://firebasestorage.googleapis.com/v0/b/ingenali-9f109.appspot.com/o/Team1.svg?alt=media&token=0306c7e4-8f0a-4d2c-b68e-083c516c5ec4"
                        className="team-img"
                        alt="service"
                    />

                </div>
                <div className="service-right">
                    <div className="team-grid-center">
                        
                        <h2 className="team-member">Yetzirah Vizcarra CEO</h2>
                        <ul className="team-ul">
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
        </div>

    )
}
