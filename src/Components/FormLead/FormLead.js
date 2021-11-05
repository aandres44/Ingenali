import React from 'react'
import "./FormLead.css"

export const FormLead = () => {
    return (
        <div id="contact" className="flex-center">
            <div className="form-card">

                <div className="form-left flex-center">
                    <h4 className="form-card-sub">¡Recibe personal calificado para tu proyecto!</h4>
                </div>

                <form className="form-right">
                    <p className="form-text">Nos pondremos en contacto contigo a la brevedad</p>
                    <input className="form-input" type="text" id="cname" name="cname" placeholder="Nombre de la Empresa" required/>
                    <input className="form-input" type="email" id="email" name="email" placeholder="Correo electrónico" required/>
                    <input className="form-input" type="text" id="fname" name="fname" placeholder="Nombre completo" required/>
                    <button className="form-button" type="submit" >Enviar</button>
                </form>



            </div>
        </div>
    )
}
