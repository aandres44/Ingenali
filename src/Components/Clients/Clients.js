import React from 'react'
import "./Clients.css"

export const Clients = () => {
    return (
        <div className="clients-alignment">
            <div id="clients" className="clients-grid">
                <h2 className="clients-title">Nuestros Clientes</h2>

               <object
                   type="image/svg+xml" data="https://firebasestorage.googleapis.com/v0/b/ingenali-9f109.appspot.com/o/Logos.svg?alt=media&token=670b6706-9ae1-40eb-8888-11e28a5755bb"
                    className="clients-img"
                    alt="clients"
                />
               <object
                   type="image/svg+xml" data="https://firebasestorage.googleapis.com/v0/b/ingenali-9f109.appspot.com/o/Logos-mov.svg?alt=media&token=5add5284-310d-42d1-830a-bcc5f5a9438a"
                    className="clients-img-mov"
                    alt="clients"
                />
            </div>
        </div>

    )
}
