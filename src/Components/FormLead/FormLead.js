import React from 'react'
import "./FormLead.css"

export const FormLead = () => {
    return (
        <div className="flex-center">
            <div style={{ /*backgroundImage: "url(/BGMask.svg)"*/ }} className="form-card">

                <div className="form-left flex-center">
                    <h4 className="form-card-sub">Do you have a project in mind that you need to get done?</h4>
                </div>

                <form className="form-right">
                    <p className="form-text">Leave us your info, we’ll get back to you real quick!</p>
                    <input className="form-input" type="text" id="cname" name="cname" placeholder="Company Name" required/>
                    <input className="form-input" type="email" id="email" name="email" placeholder="E-mail address" required/>
                    <input className="form-input" type="text" id="fname" name="fname" placeholder="Full Name" required/>
                    <button className="form-button" type="submit" >Send</button>
                </form>



            </div>
        </div>
    )
}
