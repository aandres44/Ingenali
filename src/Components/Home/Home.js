import React from 'react'
import "./Home.css"

export const Home = () => {
    return (
        <div className="home-grid">
            <div className="home-left">
                <h1 className="home-title">Need your project done?</h1>
                <p className="home-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                <button className="home-button-blue">
                    <span className="home-button-text">Learn more</span>
                </button>
            </div>
            <div className="home-right">
                <img
                    src="gantt.svg"
                    className="home-img"
                    alt="REPSE"
                />
            </div>




        </div>
    )
}
