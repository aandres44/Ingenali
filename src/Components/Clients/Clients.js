import React from 'react'
import "./Clients.css"

export const Clients = () => {
    return (
        <div id="clients" className="clients-grid">
            <h2 className="clients-title">Some of our clients</h2>
            <p className="clients-text">We have been working with some Fortune 500 clients</p>
            <img
                src="Logos.svg"
                className="clients-img"
                alt="clients"
            />
        </div>
    )
}
