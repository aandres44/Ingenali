import React from 'react'
import "./Experience.css"

export const Experience = () => {
    return (
        <div className="experience-card">
            <div className="exp-up">

                <img
                    src="Experience-exp.svg"
                    className="exp-icon"
                />

                <img
                    src="Exp-projects.svg"
                    className="exp-icon"
                />

                <img
                    src="Exp-clients.svg"
                    className="exp-icon"
                />

                <img
                    src="Exp-rate.svg"
                    className="exp-icon"
                />

            </div>
            <div className="exp-down">
                <div className="exp-mini-card">
                    <p className="exp-number-big exp-dark-red">35+</p>
                    <p className="exp-text exp-dark-red">Years Of Experience</p>
                </div>
                <div className="exp-mini-card">
                    <p className="exp-number-big">450+</p>
                    <p className="exp-text">Projects Completed</p>
                </div>
                <div className="exp-mini-card">
                    <p className="exp-number-big">350+</p>
                    <p className="exp-text">Happy Clients</p>
                </div>
                <div className="exp-mini-card">
                    <p className="exp-number-big exp-light-red">100%</p>
                    <p className="exp-text exp-light-red">Punctuality Rate</p>
                </div>
            </div>
        </div>
    )
}
