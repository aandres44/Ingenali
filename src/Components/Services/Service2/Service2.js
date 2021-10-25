import React from 'react'
import "../Service.css"

export const Service2 = () => {
    return (
        <div className="service-grid">
            <div className="service-left">
                <img
                    src="Service2.svg"
                    className="service-img"
                    alt="service"
                />

            </div>
            <div className="service-right">
                <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                    <h2 className="service-title">Some of our services</h2>
                    <p className="service-text">We have been working with some Fortune 500 service.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                </div>

            </div>

        </div>
    )
}
