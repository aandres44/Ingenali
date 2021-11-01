import React from 'react'
import styled from "@emotion/styled";
import "./Company.css"
import { Experience } from './Experience';

export const Company = () => {
    return (
        <div>
            <div id="company" className="company-grid" style={{ backgroundImage: "url(/BG.svg)" }}>
                <div className="company-left">
                    <h2 className="company-title">Company Summary</h2>
                    <img
                        src="Image.svg"
                        className="company-img"
                        alt="company-summary"
                    />
                </div>
                <div className="company-right">

                    <div className="company-card">
                        <div className="company-small-grid">
                            <div className="company-small-left">
                                <img
                                    src="Headhunting.svg"
                                    className="small-icon"
                                />
                            </div>
                            <div className="company-small-right">
                                <h4 className="company-card-sub">Personell Headhunting</h4>
                                <p className="company-text">Download and install the app from play store or app store. The app will guide you through the configuration process. </p>
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
                                <h4 className="company-card-sub">Project management</h4>
                                <p className="company-text">Connect the device anywhere your home and turn it on. Then follow the guide given by the app to configure. Make sure your home WiFi is working well. </p>
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
                                <h4 className="company-card-sub">Step 3</h4>
                                <p className="company-text">After the configuration process is completed as per the app guide, you will be able to control your home applicance from anywhere remotely.</p>
                            </div>
                        </div>
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
