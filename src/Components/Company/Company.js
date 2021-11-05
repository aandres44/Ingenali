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
                                        src="https://firebasestorage.googleapis.com/v0/b/ingenali-9f109.appspot.com/o/Headhunting.svg?alt=media&token=a6bfca6e-9962-4e9a-9232-04a5d7e10904"
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
                                        src="https://firebasestorage.googleapis.com/v0/b/ingenali-9f109.appspot.com/o/PM.svg?alt=media&token=28493f5f-fed4-4b96-bb59-d44a1c282f83"
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
                                        src="https://firebasestorage.googleapis.com/v0/b/ingenali-9f109.appspot.com/o/Industrial.svg?alt=media&token=7995d3b2-b458-4020-81f1-c00ea91f0406"
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
                                        src="https://firebasestorage.googleapis.com/v0/b/ingenali-9f109.appspot.com/o/Industrial.svg?alt=media&token=7995d3b2-b458-4020-81f1-c00ea91f0406"
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
                                        src="https://firebasestorage.googleapis.com/v0/b/ingenali-9f109.appspot.com/o/Industrial.svg?alt=media&token=7995d3b2-b458-4020-81f1-c00ea91f0406"
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
                            src="https://firebasestorage.googleapis.com/v0/b/ingenali-9f109.appspot.com/o/Phone.svg?alt=media&token=b2a2f42c-8a42-4620-ba9e-e15ce0545651"
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
