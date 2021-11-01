import React from 'react'
import { Footer } from '../Footer/Footer'
import { Clients } from './Clients/Clients'
import { Company } from './Company/Company'
import { FormLead } from './FormLead/FormLead'
import { Home } from './Home/Home'
import { Service2 } from './Services/Service2/Service2'
import { Team } from './Team/Team'

export const Main = () => {
    return (
        <>
            <Home />
            <Company />
            <Clients />
            <Service2 />
            <Team />
            <FormLead />
            <Footer />
        </>
    )
}
