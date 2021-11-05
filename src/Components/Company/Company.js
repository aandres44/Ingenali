import React from 'react'
import styled from "@emotion/styled";
import "./Company.css"
import { Experience } from './Experience';

export const Company = () => {
    return (
        <div>
            <div id="company" className="company-grid" >
                <div className="company-up">
                    <h2 className="company-title">Servicios Especializados <br />con Licencias REPSE</h2>
                </div>
                <div className="company-down">
                    <div className="company-left">

                        <div className="company-card">
                            <div className="company-small-grid">
                                <div className="company-small-left">
                                    <img
                                        src="Headhunting.svg"
                                        className="small-icon"
                                    />
                                </div>
                                <div className="company-small-right">
                                    <h4 className="company-card-sub">Ingeniería</h4>
                                </div>
                            </div>
                        </div>

                        <div className="company-card">
                            <div className="company-small-grid">
                                <div className="company-small-left">
                                    <img
                                        src="PM.svg"
                                        className="small-icon"
                                    />
                                </div>
                                <div className="company-small-right">
                                    <h4 className="company-card-sub">Mecánicos y fabricación</h4>
                                </div>
                            </div>
                        </div>

                        <div className="company-card">
                            <div className="company-small-grid">
                                <div className="company-small-left">
                                    <img
                                        src="step3.svg"
                                        className="small-icon"
                                    />
                                </div>
                                <div className="company-small-right">
                                    <h4 className="company-card-sub">Eléctricos y control</h4>
                                </div>
                            </div>
                        </div>

                        <div className="company-card">
                            <div className="company-small-grid">
                                <div className="company-small-left">
                                    <img
                                        src="step3.svg"
                                        className="small-icon"
                                    />
                                </div>
                                <div className="company-small-right">
                                    <h4 className="company-card-sub">Civiles</h4>
                                </div>
                            </div>
                        </div>

                        <div className="company-card">
                            <div className="company-small-grid">
                                <div className="company-small-left">
                                    <img
                                        src="step3.svg"
                                        className="small-icon"
                                    />
                                </div>
                                <div className="company-small-right">
                                    <h4 className="company-card-sub">Mantenimiento industrial</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="company-right">
                        <img
                            src="Image.svg"
                            className="company-img"
                            alt="company-summary"
                        />
                    </div>





                </div>
            </div>
            <div className="flex-center margin-adjust">
                <Experience />
            </div>

        </div>
    );
};


//export default Company;
